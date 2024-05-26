import axios from "axios"
import { API_URL } from "@env"

baseAPIUrl = `http://${API_URL || '161.132.47.170' }`
console.log(baseAPIUrl)
export const apiClient = axios.create({
  baseURL: baseAPIUrl
})
