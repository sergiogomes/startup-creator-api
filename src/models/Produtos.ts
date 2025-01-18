import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('produtos')
class Produtos {
  @PrimaryGeneratedColumn()
  idprodutos: number

  @Column()
  nome: string

  @Column()
  preco: number

  @Column()
  descricao: string
}

export default Produtos
