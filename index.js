import { getProducts } from './src/commands/getProducts.js'
import { getProduct } from './src/commands/getProduct.js'
import { postProduct } from './src/commands/postProduct.js'
import { deleteProduct } from './src/commands/deleteProduct.js'

const args = process.argv.slice(2)

const [method, resourse, ...rest] = args

const userMethod = method.toUpperCase()

switch (true) {
  case userMethod === 'GET' && resourse === 'products':
    getProducts()
    break
  case userMethod === 'GET' && resourse.startsWith('products'):{
    const parts = resourse.split('/')
    const id = parts[1]
    const product = await getProduct(id)
    console.log(product)
  }
    break
  case userMethod === 'POST' && resourse === 'products' && rest.length === 3: {
    const [title, price, category] = rest
    const product = { title, price, category }
    postProduct(product)
    break
  }
  case userMethod === 'DELETE' && resourse.startsWith('products'): {
    const parts = resourse.split('/')
    const id = parts[1]
    const deletedProduct = await deleteProduct(id)
    console.log('Producto eliminado: ', deletedProduct)
  }
    break
  default:
    console.error('Comando desconocido.')
    break
}
