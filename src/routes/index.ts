import { Router } from 'express'
import useragent from 'express-useragent'

import produtos from './produtos.routes'

const rotas = Router()
rotas.use(useragent.express())

rotas.use('/produtos', produtos)

export default rotas
