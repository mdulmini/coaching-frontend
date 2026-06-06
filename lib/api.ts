const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: number
    email: string
    name: string
  }
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data
}

export const api = {
  login: (body: LoginRequest) =>
    request<AuthResponse>('/api/auth/login', { method: 'POST', body: JSON.stringify(body) }),

  register: (body: RegisterRequest) =>
    request<AuthResponse>('/api/auth/register', { method: 'POST', body: JSON.stringify(body) }),

  guestLogin: () =>
    request<AuthResponse>('/api/auth/guest', { method: 'POST' }),

  me: () =>
    request<AuthResponse['user']>('/api/auth/me'),
}

export const saveToken = (token: string) =>
  typeof window !== 'undefined' && localStorage.setItem('auth_token', token)

export const getToken = () =>
  typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null

export const clearToken = () =>
  typeof window !== 'undefined' && localStorage.removeItem('auth_token')