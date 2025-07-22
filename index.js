import "dotenv/config";
import express from 'express';
const app = express();

app.get("/", (req,res) => {
    res.json({message:"Bienvenidos a la Api Rest en json "});
});

import productsRouter from './src/routes/products.router.js';
app.use("/api", productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Servidor Corriendo en http://localhost:${PORT}`));
