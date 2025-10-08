import { BASE_URL } from '../config/constants.js'

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`, { method: 'GET' })
    const data = await response.json()
    console.log('Productos: ')
    data.forEach(element => {
      console.log(element)
    })
  } catch (error) {
    console.error('Error: ', error)
  }
}
