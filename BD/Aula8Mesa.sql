CREATE DATABASE universo_da_leitura;

use universo_da_leitura;

CREATE TABLE associados (
	associado_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    associado_rg CHAR(7),
    associado_nome VARCHAR(50),
    associado_sobrenome VARCHAR(50),
    associado_endereco VARCHAR(150),
    associado_cidade VARCHAR(50),
    associado_estado CHAR(2)
);

CREATE TABLE editoras (
	editora_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    editora_razao_social VARCHAR(150),
    editora_telefone VARCHAR(100)
); 

CREATE TABLE autores (
	autor_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    autor_sobrenome VARCHAR(100),
    autor_nome VARCHAR(100)
);           

CREATE TABLE telefones (
	telefone_id INT NOT NULL AUTO_INCREMENT,
    telefone_numero VARCHAR(100),
    associado_id INT,
    PRIMARY KEY (telefone_id),
    CONSTRAINT FKassocidados
    FOREIGN KEY (associado_id)
    REFERENCES associados(associado_id)
);

CREATE TABLE livros (
	livro_id INT NOT NULL AUTO_INCREMENT,
    livro_titulo VARCHAR(200),
    livro_ano_criacao DATE,
    livro_ano_publicacao DATE,
    autor_id INT,
    editora_id INT,
    PRIMARY KEY (livro_id),
    CONSTRAINT FKautores
    FOREIGN KEY (autor_id)
    REFERENCES autores(autor_id),
    CONSTRAINT FKeditoras
    FOREIGN KEY (editora_id)
    REFERENCES editoras(editora_id)
);

CREATE TABLE emprestimos (
	emprestimo_id INT NOT NULL AUTO_INCREMENT,
    emprestimo_data DATE,
    emprestimo_prazo_devolucao DATE,
    emprestimo_data_devolucao DATE,
    associado_id INT,
    PRIMARY KEY (emprestimo_id),
    CONSTRAINT FKassociados
    FOREIGN KEY (associado_id)
    REFERENCES associados(associado_id)
);

CREATE TABLE exemplares (
	exemplar_id INT NOT NULL AUTO_INCREMENT,
    exemplar_sinistro BOOL,
    livro_id INT,
    PRIMARY KEY (exemplar_id),
    CONSTRAINT FKlivros
    FOREIGN KEY (livro_id)
    REFERENCES livros(livro_id)
);

CREATE TABLE emprestimo_exemplares (
	emprestimo_exemplares_id INT NOT NULL AUTO_INCREMENT,
    emprestimo_id INT,
    exemplar_id INT,
    PRIMARY KEY (emprestimo_exemplares_id),
    CONSTRAINT FKemprestimos
    FOREIGN KEY (emprestimo_id)
    REFERENCES emprestimos(emprestimo_id),
    CONSTRAINT FKexemplares
    FOREIGN KEY (exemplar_id)
    REFERENCES exemplares(exemplar_id)
);

INSERT INTO associados (associado_rg, associado_nome, associado_sobrenome, associado_endereco, associado_cidade, associado_estado)
VALUES (1234567, 'Mariana', 'Correa', 'Rua Pedro Alves de Faria 200 Jd Santa Julia', 'São josé dos Campos', 'SP');

INSERT INTO associados (associado_rg, associado_nome, associado_sobrenome, associado_endereco, associado_cidade, associado_estado)
VALUES (1111111, 'xasfsdf', 'asdasdas', 'sdasdasdasdas', 'dasdasdasdas', 'dd');

INSERT INTO associados (associado_rg, associado_nome, associado_sobrenome, associado_endereco, associado_cidade, associado_estado)
VALUES (2222222, 'rwerwewer', 'werwerweewrew', 'werewtwe', 'fdsrerew', 'gg');

INSERT INTO associados (associado_rg, associado_nome, associado_sobrenome, associado_endereco, associado_cidade, associado_estado)
VALUES (4444444, 'gfhgfhgfhgf', 'hkiuluiy', 'yutryiyu', 'ytuiytiyu', 'kk');
    
INSERT INTO associados (associado_rg, associado_nome, associado_sobrenome, associado_endereco, associado_cidade, associado_estado)
VALUES (3333333, 'dfjyj', 'kyilçio', 'iuiuoy', 'dasduyaiuyosdasdas', 'uu');

INSERT INTO associados (associado_rg, associado_nome, associado_sobrenome, associado_endereco, associado_cidade, associado_estado)
VALUES (5555555, 'rgeryr', 'ertreter', 'reterter', 'reterter', 'ff');

INSERT INTO associados (associado_rg, associado_nome, associado_sobrenome, associado_endereco, associado_cidade, associado_estado)
VALUES (6666666, 'klyioçio', 'kuygio', 'yuooiu', 'yuiyu', 'jj');

INSERT INTO associados (associado_rg, associado_nome, associado_sobrenome, associado_endereco, associado_cidade, associado_estado)
VALUES (7777777, 'yr5657', 'asdastyhtedas', 'rtyrtyrt', 'yrtytryr', 'ww');

INSERT INTO telefones (telefone_numero, associado_id)
VALUES (123456789, 1);

INSERT INTO telefones (telefone_numero, associado_id)
VALUES (111111111, 2);

INSERT INTO telefones (telefone_numero, associado_id)
VALUES (222222222, 3);

INSERT INTO telefones (telefone_numero, associado_id)
VALUES (333333333, 4);

INSERT INTO telefones (telefone_numero, associado_id)
VALUES (444444444, 5);

INSERT INTO telefones (telefone_numero, associado_id)
VALUES (555555555, 6);

INSERT INTO telefones (telefone_numero, associado_id)
VALUES (666666666, 7);

INSERT INTO telefones (telefone_numero, associado_id)
VALUES (777777777, 8);

INSERT INTO autores (autor_sobrenome, autor_nome)
VALUES ('Christie', 'Agatha');

INSERT INTO editoras (editora_razao_social, editora_telefone)
VALUES ('Moderna', 29441424);

INSERT INTO editoras (editora_razao_social, editora_telefone)
VALUES ('erfree', 12345789);

INSERT INTO editoras (editora_razao_social, editora_telefone)
VALUES ('ugugiohoi', 32145698);

INSERT INTO livros (livro_titulo, livro_ano_criacao, livro_ano_publicacao, autor_id, editora_id)
VALUE ('Assassinato no Expresso do Oriente', 1980, 1982, 1, 1);