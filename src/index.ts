import express from 'express';
import laptopRoutes from './routes/laptopRoutes';

const app = express();
const PORT = 3000;

// Usar as rotas de laptop
app.use('/api', laptopRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});