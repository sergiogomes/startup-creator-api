import { Response, Request } from 'express'
import { getRepository } from 'typeorm'

import TabelaProdutos from '../../models/Produtos'

const ProdutosAtualiza = async (request: Request, response: Response): Promise<Response> => {
  try {
    const connextion = getRepository(TabelaProdutos)
    const { params: { id }, body } = request
    
    const result = await connextion
      .createQueryBuilder()
      .update(TabelaProdutos)
      .set(body)
      .where({ idprodutos: id })
      .execute()

    return response.json(result)
  } catch (err) {
    return response.status(400).json(err)
  } 
}

export default ProdutosAtualiza
