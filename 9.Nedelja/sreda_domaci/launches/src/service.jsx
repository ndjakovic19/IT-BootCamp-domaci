import axios from 'axios'
const BASE_URL = 'https://api.spacexdata.com/v4'
const LAUNCHES = '/launches'
const PAST = '/past'
const COMPANY = '/company'

export const getPastLaunches = () => axios.get(`${BASE_URL}${LAUNCHES}${PAST}`)
export const getCompanyInfo = () => axios.get(`${BASE_URL}${COMPANY}`)