CREATE DATABASE saude_dh;

USE saude_dh;

CREATE TABLE pacientes (
	paciente_id INT(11) PRIMARY KEY,
    paciente_idsaude INT(11),
    paciente_nome VARCHAR(50),
    paciente_sobrenome VARCHAR(100)
);

CREATE TABLE especialidades (
	especialidade_id INT(11) PRIMARY KEY,
    especialidade_nome VARCHAR(100)
);

CREATE TABLE medicos (
	medico_id INT(11),
	medico_nome VARCHAR(40),
    medico_sobrenome VARCHAR(100),
    especialidade_id INT(11),
    PRIMARY KEY (medico_id),
    CONSTRAINT FKespecialidades
    FOREIGN KEY (especialidade_id)
    REFERENCES especialidades(especialidade_id)
);

CREATE TABLE consultas (
	consulta_id INT(11),
    paciente_id INT(11),
    medico_id INT(11),
    data_consulta DATE,
    hora_consulta TIME,
    PRIMARY KEY (consulta_id),
    CONSTRAINT FKmedicos
    FOREIGN KEY (medico_id)
    REFERENCES medicos(medico_id),
    CONSTRAINT FKpacientes
    FOREIGN KEY (paciente_id)
    REFERENCES pacientes(paciente_id)
);
    