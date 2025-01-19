import { Response, Request } from 'express'
import { getRepository } from 'typeorm'

import TabelaProdutos from '../../models/Produtos'

const ProdutosConsultaId = async (request: Request, response: Response): Promise<Response> => {
  try {
    const connextion = getRepository(TabelaProdutos)
    const { params: { id } } = request

    const result = await connextion.find({
      where: {
        idprodutos: id
      }
    })

    return response.json(...result)
  } catch (err) {
    return response.status(400).json(err)
  } 
}

export default ProdutosConsultaId
