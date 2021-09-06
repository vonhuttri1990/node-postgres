#!/bin/bash
set -e
# log in user root: postgres
psql -d postgres admin<<-EOSQL

CREATE ROLE me WITH LOGIN PASSWORD 'password';

ALTER ROLE me CREATEDB;

\q
EOSQL

psql -d postgres -U me <<-EOSQL

CREATE DATABASE api;

\c api

CREATE TABLE users (ID SERIAL PRIMARY KEY, name VARCHAR(30), email VARCHAR(30));

INSERT INTO users (name, email) VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');
EOSQL