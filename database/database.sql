CREATE DATABASE firstapi;

CREATE TABLE info(
    id SERIAL PRIMARY KEY,
    orden VARCHAR(10),
    producto VARCHAR(10),
    materia VARCHAR(10),
    inyectora VARCHAR(10),
    molde VARCHAR(10),
    ciclo VARCHAR(10)
);

INSERT INT0 info (id,orden,producto,materia,inyectora,molde,ciclo) VALUES
        (8630,90453,20041,'MIF10/3',190,17)
