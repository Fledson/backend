--CRIA O BANCO
CREATE DATABASE mycontacts;

--ATIVA A FUNÇÃO UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--CRIA A TABELA DE CATEGORIAS
CREATE TABLE IF NOT EXISTS categories  (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

-- CRIA TABELA DE CONTATOS
CREATE TABLE IF NOT EXISTS contacts  (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,

  FOREIGN KEY(category_id) REFERENCES categories(id) -- cria relacionamento
);
