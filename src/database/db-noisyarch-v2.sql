-- DROP DATABASE NoisyArch;
CREATE DATABASE NoisyArch;
USE NoisyArch;

CREATE TABLE Distro(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nomeDistro VARCHAR(45)
);

INSERT INTO Distro(nomeDistro)
VALUES  ('Nothing'),
		('Deepin'),
		('Cinnamon'),
		('i3wm'),
        ('XFCE');
        
CREATE TABLE Usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(60) UNIQUE,
    senha VARCHAR(32),
    fk_distro INT NULL,
    FOREIGN KEY (fk_distro) REFERENCES Distro(id)
);

INSERT INTO Usuario(nome, email, senha, fk_distro)
VALUES  ('Donilo', 'donilo@gmail.com', 'don123', 3),
		('Pedro', 'pedro@gmail.com', 'pedro123', 2),
		('Carlos', 'carlos@gmail.com', 'carlos123', 2),
		('Maria', 'maria@gmail.com', 'maria123', 5),
		('Julia', 'julia@gmail.com', 'julia123', 3),
		('Leticia', 'leticia@gmail.com', 'leticia123', 3),
		('Victor', 'victor@gmail.com', 'vic123', 5),
		('Braian', 'braian@gmail.com', 'braian123', 4),
		('Vitoria', 'vitoria@gmail.com', 'vitoria123', 3);

SELECT COUNT(fk_distro) as distros FROM usuario JOIN distro ON fk_distro = distro.id WHERE distro.id = 1;
SELECT COUNT(fk_distro) as distros FROM usuario JOIN distro ON fk_distro = distro.id WHERE distro.id = 2;
SELECT COUNT(fk_distro) as distros FROM usuario JOIN distro ON fk_distro = distro.id WHERE distro.id = 3;
SELECT COUNT(fk_distro) as distros FROM usuario JOIN distro ON fk_distro = distro.id WHERE distro.id = 4;