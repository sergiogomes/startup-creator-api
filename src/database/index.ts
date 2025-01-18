import { createConnection } from 'typeorm'

import Produtos from '../models/Produtos'

require('dotenv').config()

const { DB_NAME, DB_PASS, DB_HOST, DB_USER } = process.env 

createConnection({
    type: 'mysql',
    host: DB_HOST,
    port: 3306,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    logging: ['query', 'error'],
    entities: [
      Produtos
    ],
  })
  