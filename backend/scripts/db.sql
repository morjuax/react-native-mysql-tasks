CREATE DATABASE IF not exists tasksdb;

USE tasksdb;

CREATE TABLE IF NOT exists tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    description TEXT;
    PRIMARY KEY (id)
);

INSERT INTO tasks (title, description) values
('tasks 1', 'some description 1')
('tasks 2', 'some description 2');