import axios from 'axios'

export const getAllProducts = () => axios.get('http://localhost:3001/products')
