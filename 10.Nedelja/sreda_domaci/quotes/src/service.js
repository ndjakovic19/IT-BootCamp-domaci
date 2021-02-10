import axios from 'axios'

export const postUser = (user) => axios.post('http://localhost:3005/users',user)

export const getAllQuotes =()=> axios.get('http://localhost:3005/quotes') 

export const getAllUsers = () => axios.get('http://localhost:3005/users')

export const postQuote = (quote,author) => axios.post('http://localhost:3005/quotes',quote,author)