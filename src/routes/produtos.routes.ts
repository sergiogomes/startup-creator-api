import { Router } from 'express'

import ProdutosCadastro from '../services/ProdutosCadastro'
import ProdutosConsulta from '../services/ProdutosConsulta'
import ProdutosConsultaId from '../services/ProdutosConsultaId'
import ProdutosAtualiza from '../services/ProdutosAtualiza'

const routes = Router()

routes.post('/', ProdutosCadastro)
routes.get('/', ProdutosConsulta)
routes.get('/:id', ProdutosConsultaId)
routes.put('/:id', ProdutosAtualiza)

export default routes
