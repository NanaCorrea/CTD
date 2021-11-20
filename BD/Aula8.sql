CREATE DATABASE minhaprimeirabasededados;

USE minhaprimeirabasededados;

CREATE TABLE post (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200)
);

CREATE TABLE filmes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(500) NOT NULL,
    rating DECIMAL(3,1) NOT NULL,
    premio INT DEFAULT 0,
    data_lancamento DATE NOT NULL,
    duracao INT NOT NULL
);

CREATE TABLE clientes (
	cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);

INSERT INTO clientes (nome)
VALUES ('Mariana');

UPDATE clientes
SET nome = 'Sandy'
WHERE cliente_id=1;

SELECT nome, cliente_id
FROM clientes;

SELECT nome
FROM clientes
WHERE nome = 'Sandy';

select *
from clientes
where cliente_id < 5
ORDER BY nome DESC;

DELETE FROM clientes WHERE cliente_id = 2;

CREATE TABLE ordens (
	ordem_id INT NOT NULL,
    ordem_numero INT NOT NULL,
    cliente_id INT,
    PRIMARY KEY (ordem_id),
    CONSTRAINT FKcliente
    FOREIGN KEY (cliente_id) 
    REFERENCES clientes(cliente_id)
);

ALTER TABLE filmes
ADD teste DECIMAL(3,1) NOT NULL;

ALTER TABLE filmes
MODIFY rating DECIMAL(4,1) NOT NULL;

ALTER TABLE filmes
DROP teste;

DROP TABLE IF EXISTS filmes;
