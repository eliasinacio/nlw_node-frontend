import './styles.scss'
import Logo from '../../assets/logo.svg'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { ReactNode } from 'react'

type Message = {
  id: string,
  text: string,
  user: {
    avatar_url: string,
    name: string
  }
}

export function MessageList() {
  const [messages, updateMessages] = useState<Message[]>([])

  useEffect(() => {
    api.get('messages/last3').then(response => {
      if (response.data.length) {
        updateMessages(response.data)
      }
    })
  }, [])

  return (
    <div className="messageList">
      <img className="logo" src={Logo} alt="doWhile Logo" />

      <ul className="messagesContainer">
        {
          messages.map( (message, index) => {
            return (
              <li key={message.id} className="message" id={"message-"+index}>
                <span>{message.text}</span>
                <div className="author">
                  <div className="authorIcon">
                    <img src={message.user.avatar_url} alt={message.user.name} />
                  </div>
                  <span className="authorName">{message.user.name}</span>
                </div>
              </li>
            ) as ReactNode
          })
        }
      </ul>
    </div>
  )
}