import puppeteer from 'puppeteer';
import fs from 'fs-extra'; 

const url = "https://webscraper.io/test-sites/e-commerce/static/computers/laptops";

export const scrapeLaptops = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('.col-sm-4 > .thumbnail');

    const links: string[] = await page.$$eval(
        '.col-sm-4 > .thumbnail > .caption > h4 > a',
        el => el.map(link => link.href)
    );

    const lenovoLaptops: any[] = [];

    for (const link of links) {
        await page.goto(link);
        await page.waitForSelector('.col-md-9');

        // Usar type assertion para garantir que o elemento é um HTMLElement
        const title = await page.$eval('.caption > h4:nth-of-type(2)', (element) => {
            return (element as HTMLElement).innerText;
        });
        
        const price = await page.$eval('.caption > .pull-right', (element) => {
            return (element as HTMLElement).innerText.replace(/[^\d.-]/g, '');
        });
        
        const description = await page.$eval('.description', (element) => {
            return (element as HTMLElement).innerText;
        });
        
        // Coletar todos os spans de avaliações e contar
        const reviews = await page.$$eval('.ratings span', spans => spans.length); // Número total de estrelas
        
        const reviewCount = await page.$eval('.ratings p', (element) => {
            return (element as HTMLElement).innerText; // Contagem total de avaliações
        });

        lenovoLaptops.push({
            title,
            price: Number(price),
            description,
            reviews,
            reviewCount,
        });
    }

    // Ordenar os laptops pelo preço
    const sortedLaptops = lenovoLaptops.sort((a, b) => a.price - b.price);

    // Salvar em um arquivo JSON
    await fs.writeJson('laptops.json', sortedLaptops, { spaces: 2 });
    
    await browser.close();
    
    return sortedLaptops;
};