import { BASE_URL } from '../config/constants.js'

export const postProduct = async (product) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json '
      },
      body: JSON.stringify(product)
    })
    const data = await response.json()
    console.log('Producto agregado: ', data)
  } catch (error) {
    console.error('Error: ', error)
  }
}
