-- drop database noisyarch;
CREATE DATABASE NoisyArch;
USE NoisyArch;

CREATE TABLE Usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(60) UNIQUE,
    senha VARCHAR(32)
);

CREATE TABLE Distro(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nomeDistro VARCHAR(45)
);

CREATE TABLE UsuarioDistro(
	id INT UNIQUE AUTO_INCREMENT,
    fk_usuario INT,
    fk_distro INT,
    PRIMARY KEY(fk_usuario, fk_distro),
    FOREIGN KEY (fk_usuario) REFERENCES Usuario(id),
    FOREIGN KEY (fk_distro) REFERENCES Distro(id)
);

INSERT INTO Distro(nomeDistro)
VALUES  ('Cinnamon'),
		('Deepin'),
		('i3wm'),
        ('XFCE');