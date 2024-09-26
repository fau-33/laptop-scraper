import { Request, Response } from 'express';
import { scrapeLaptops } from '../services/laptopService';
import fs from 'fs-extra';

export const getLaptops = async (req: Request, res: Response) => {
    try {
        // Tente ler os dados do arquivo primeiro
        const data = await fs.readJson('laptops.json');
        res.status(200).json(data);
    } catch (error) {
        // Se não conseguir ler o arquivo, faça o scraping novamente
        console.error('Erro ao ler o arquivo, fazendo scraping novamente:', error);
        
        const laptops = await scrapeLaptops();
        res.status(200).json(laptops);
    }
};