import { BASE_URL } from '../config/constants.js'

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, { method: 'GET' })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error: ', error)
  }
}
