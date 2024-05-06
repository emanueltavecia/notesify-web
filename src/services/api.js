import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://notesify-api.onrender.com',
})
