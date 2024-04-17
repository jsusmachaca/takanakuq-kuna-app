import axios from "axios"
import { API_URL } from "@env"

baseAPIUrl = `http://${API_URL}`

export const apiClient = axios.create({
  baseURL: baseAPIUrl
})
