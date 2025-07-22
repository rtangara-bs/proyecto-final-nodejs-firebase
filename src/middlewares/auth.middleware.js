import jwt from "jsonwebtoken";



export const auth =  (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) return res.sendStatus(401); // No autorizado 

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403); // Token invalido 

    req.user = decoded; // Guardamos el token 

        next();
    });
};

