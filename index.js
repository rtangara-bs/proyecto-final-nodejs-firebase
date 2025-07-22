import express from 'express';
const app = express();

app.get("/", (req,res) => {
    res.json({message:"Bienvenidos a la Api Rest en json"});
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor Corriendo en http://localhost:${PORT}`));
