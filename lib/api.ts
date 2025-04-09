export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://13.113.249.51:8000'

export const api = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
} 