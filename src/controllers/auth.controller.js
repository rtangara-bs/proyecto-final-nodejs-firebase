import jwt from "jsonwebtoken";

const default_user = { //datos del user fijo
  id: 1,
  email: "tangara@email.com",
  password: "tangaraPass123",
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = { id: 1, email };
// validamos credenciales
  if (email === default_user.email && password === default_user.password) {
    const payload = { id: user.id };
    const expiration = { expiresIn: "2h" };// se loguea cada 2 horas para las peticiones

    const token = jwt.sign(payload, process.env.JWT_SECRET, expiration);
    res.json({ "message": "¡Bienvenido Usuario!", token }); // devuelve JWT
  } else {
    res.sendStatus(401).json({error: 'Sus credenciales no coinciden ....'}) // mensaje si la credencia no coincide
  }
};
