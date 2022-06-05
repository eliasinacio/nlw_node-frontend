import { useContext } from 'react'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessage } from './components/SendMessageForm'
import { AuthContext } from './contexts/auth'
import './styles/App.scss'

export function App() {
  const { user } = useContext(AuthContext)

  return (
    <main className='contentWrapper'>
      <MessageList />
      { !!user ? <SendMessage /> : <LoginBox />}
    </main>
  )
}