import axios from "axios"
import { API_URL } from "@env"

baseAPIUrl = `http://${API_URL}`
console.log(baseAPIUrl)
export const apiClient = axios.create({
  baseURL: baseAPIUrl
})
