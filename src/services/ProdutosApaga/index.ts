import { Response, Request } from 'express'
import { getRepository } from 'typeorm'

import TabelaProdutos from '../../models/Produtos'

const ProdutosApaga = async (request: Request, response: Response): Promise<Response> => {
  try {
    const connextion = getRepository(TabelaProdutos)
    const { params: { id } } = request

    const result = await connextion.delete(id)

    return response.json(result)
  } catch (err) {
    return response.status(400).json(err)
  } 
}

export default ProdutosApaga
