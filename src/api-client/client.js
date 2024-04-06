import axios from "axios"


const API_URL = 'http://192.168.59.185:3000'

export const apiClient = axios.create({
  baseURL: API_URL
})
