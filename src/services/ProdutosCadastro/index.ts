import { Response, Request } from 'express'
import { getRepository } from 'typeorm'

import TabelaProdutos from '../../models/Produtos'

const ProdutosCadastro = async (request: Request, response: Response): Promise<Response> => {
  try {
    const connextion = getRepository(TabelaProdutos)
    const { body } = request

    const result = await connextion.insert(body)

    return response.json(result)
  } catch (err) {
    return response.status(400).json(err)
  } 
}

export default ProdutosCadastro
