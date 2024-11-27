export type ProductRequest = Omit<Product, 'id' | 'title'>

export class Product {
  id!: string
  title!: string
}
