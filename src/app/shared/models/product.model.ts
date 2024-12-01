export type ProductPayload = Omit<Product, 'id'>

export class Product {
  id!: string
  title!: string
}
