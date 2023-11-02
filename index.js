import express from "express";
import cors from "cors";
import pool from "./conexionDB.js";


const app = express();
app.use(express.json());
app.use(cors());

//defino la ruta base
app.get("", async (req, res) => {
    try {
        const [resultado] = await pool.query("SELECT * FROM usuario");
        console.log(resultado);
        res.json(resultado);
    } catch (error) {
res.status(500).json({
    mensaje : "algo salio mal",
    error: error
})
    }

});


app.get("/api", (req, res) => {
    console.log(req.query);
    res.send(`<h1> hola 2! ${req.query.param} </h1>`);
});


app.get("/api/:id", (req, res) => {
    console.log(req.params);
    res.send(`<h1> hola 3! ${req.params.id}</h1>`);
});


//para crear un elemento en la api usamos el post
app.post("/api", (req, res) => {
    console.log(req.body);
    res.status(201).send(`<h1> POST! ${req.body["atributo 1"]}</h1>`);
});


//inicia la pag
app.listen(process.env.PORT || 4000, () => {
    console.log("servidor activo", process.env.PORT || 4000);
});

//le dice a la app que use esta ruta por defecto si no ingresa a la ruta base
app.use((req, res) => {
    res.send("<h1>ERROR: ruta no encontrada</h1>");
});