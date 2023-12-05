import 'dotenv/config'
import { Options } from 'sequelize';

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env

console.log(DB_USER, DB_PASS, DB_HOST, DB_NAME)

const config: Options = {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql"
}

export = config;