import { Router } from 'express'

import ProdutosCadastro from '../services/ProdutosCadastro'

const routes = Router()

routes.post('/', ProdutosCadastro)

export default routes
