/* Criação de um Banco de Dados para uma Biblioteca com registros de associados, editoras, autores, livros, copias e emprestimos. 
Um associado poderá ter vários empréstimos, um empréstimo poderá ter apenas uma cópia de livro, um livro terá várias cópias, um autor e uma editora poderão ter vários livros.
Foram utilizados comandos para criação de banco de dados, tabelas e colunas, além de operações do CRUD, de inserção, update, seleção e deleção de dados.*/

CREATE SCHEMA biblioteca;

USE biblioteca;

CREATE TABLE associados (
	associado_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    associado_rg INT,
    associado_endereco VARCHAR(200),
    associado_telefone VARCHAR(15),
    associado_nome VARCHAR(40),
    associado_sobrenome VARCHAR(100)
);

CREATE TABLE editoras (
	editora_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    editora_nome VARCHAR(100),
    editora_telefone VARCHAR(50)
);

CREATE TABLE autores (
	autor_id INT(11) AUTO_INCREMENT PRIMARY KEY,
    autor_nome VARCHAR(50),
    autor_sobrenome VARCHAR(100)
);

CREATE TABLE livros (
	livro_id INT(11) AUTO_INCREMENT,
    livro_isbn INT,
    livro_titulo VARCHAR(200),
    livro_ano INT(4),
	editora_id INT(11),
    autor_id INT(11),
    PRIMARY KEY (livro_id),
    CONSTRAINT FKeditoras
	FOREIGN KEY (editora_id)
    REFERENCES editoras(editora_id),
	CONSTRAINT FKautores
	FOREIGN KEY (autor_id)
    REFERENCES autores(autor_id)
);

CREATE TABLE copias (
	copia_id INT(11) AUTO_INCREMENT,
    copia_danificada INT(1),
    livro_id INT(11),
    PRIMARY KEY (copia_id),
    CONSTRAINT FKlivros
    FOREIGN KEY (livro_id)
    REFERENCES livros(livro_id)
);

CREATE TABLE emprestimos (
	emprestimo_id INT(11) AUTO_INCREMENT,
    emprestimo_retirada DATE,
    emprestimo_previsao DATE,
    emprestimo_devolucao DATE,
    associado_id INT(11),
    copia_id INT(11),
    PRIMARY KEY (emprestimo_id),
    CONSTRAINT FKassociados
    FOREIGN KEY (associado_id)
    REFERENCES associados(associado_id),
	CONSTRAINT FKcopias
    FOREIGN KEY (copia_id)
    REFERENCES copias(copia_id)
);

INSERT INTO autores (autor_nome, autor_sobrenome)
VALUES ('Sandy', 'Leah'), ('Junior', 'Lima'), ('Noely', 'Pereira'), ('Durval', 'Lima'), ('Lucas', 'Scholes'), ('Theo', 'Scholes');

SELECT * FROM biblioteca.autores;

SELECT autor_nome FROM biblioteca.autores;

UPDATE autores SET autor_sobrenome = 'Lima'
WHERE autor_sobrenome = 'Leah';

DELETE FROM autores WHERE autor_nome = 'Sandy';