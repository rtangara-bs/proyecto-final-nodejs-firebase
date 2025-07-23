import "dotenv/config";
import express from 'express';
import productsRouter from './src/routes/products.router.js';
import authRouter from "./src/routes/auth.router.js";

const PORT = 3002; // puerto por defecto

const app = express();

//middleware global permite json
app.use(express.json());

app.get("/", (req,res) => {
    res.json({message:"Bienvenidos a la Api Rest en json "});
});

// ruta de productos bajo api
app.use("/api", productsRouter);

// ruta de autenticacion /api/auth
app.use("/api/auth", authRouter);

app.listen(PORT, () => 
    console.log(`Servidor Corriendo en http://localhost:${PORT}`) // mensaje de inicio
);
