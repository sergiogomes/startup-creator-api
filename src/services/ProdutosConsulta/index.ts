import { Response, Request } from 'express'
import { getRepository } from 'typeorm'

import TabelaProdutos from '../../models/Produtos'

const ProdutosConsulta = async (request: Request, response: Response): Promise<Response> => {
  try {
    const connextion = getRepository(TabelaProdutos)
    const result = await connextion.find()

    return response.json(result)
  } catch (err) {
    return response.status(400).json(err)
  } 
}

export default ProdutosConsulta
