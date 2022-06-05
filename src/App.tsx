import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import './styles/App.scss'

export function App() {
  return (
    <main className="contentWrapper">
      <MessageList />
      <LoginBox />
    </main>
  )
}