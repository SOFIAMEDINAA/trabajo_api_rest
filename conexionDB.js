import { createPool } from "mysql2/promise";
import configuracion from "./configuracion.js";

const pool = createPool({
    host: configuracion.HOST,
    port: configuracion.PORT,
    user: configuracion.USER,
    password: configuracion.PASSWORD,
    database: configuracion.NAME
});

console.log("DB conectada");

export default pool;