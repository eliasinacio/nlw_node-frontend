import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"

type AuthProvider = {
  children: ReactNode
}

type AuthResponse = {
  token: string,
  user: {
    id: string,
    name: string,
    avatar_url: string,
    login: string
  }
}

type User = {
  id: string,
  name: string,
  login: string,
  avatar_url: string
}

type AuthContextData = {
  user: User | null;
  signInUrl: string;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null)
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=3c817333340cc7c114dd`

  async function signIn (githubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode
    })

    const { token, user } = response.data

    localStorage.setItem('@application:token', token)
    
    setUser(user)
  }

  useEffect(() => {
    var url = window.location.href;
    const githubCode = url.includes('code=') ? url.split('?code=')[1] : null
    url = url.split('?code=')[0]


    if (githubCode) {
      window.history.pushState({}, '', url)

      signIn(githubCode)
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{ signInUrl, user }}> 
      {props.children}
    </AuthContext.Provider>
  )
}