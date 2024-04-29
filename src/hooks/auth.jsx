import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })

      const { user, token } = response.data
      setData({ user, token })

      api.defaults.headers.authorization = `Bearer ${token}`

      localStorage.setItem('@notesify:user', JSON.stringify(user))
      localStorage.setItem('@notesify:token', token)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar.')
        console.error(error)
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@notesify:token')
    const user = localStorage.getItem('@notesify:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user: JSON.parse(user), token })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
