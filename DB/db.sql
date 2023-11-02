SHOW DATABASES;

CREATE DATABASE turnos_db;

USE turnos_db;

SHOW TABLES;


CREATE TABLE usuario(
    id_usuario INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_usuario)
);

INSERT INTO usuario (nombre,email)
VALUES ("sofia", "sofiabelenmedina1@gmail.com");

SELECT * FROM usuario;