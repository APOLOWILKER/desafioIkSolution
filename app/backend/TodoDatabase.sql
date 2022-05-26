DROP DATABASE IF EXISTS TodoDatabase;

CREATE SCHEMA TodoDatabase;

CREATE TABLE `TodoDatabase`.`Tasks` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `titleTask` VARCHAR(45) NULL,
    `nameTask` VARCHAR(125) NULL,
    `dataTask` VARCHAR(45) NULL,
    `hourTask` VARCHAR(45) NULL,
    PRIMARY KEY (`id`));

SET SQL_SAFE_UPDATES = 0;

INSERT INTO TodoDatabase.Tasks (titleTask, nameTask, dataTask, hourTask ) VALUES
    ("aniversário", "ir para o aniversário", "19/07/2022", "19:00"),
    ("1 Ano de trybe", "comemorar 1 ano de aprendizado", "12/07/2022", "19:00");

