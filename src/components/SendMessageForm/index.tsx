import './styles.scss'
import logoutIcon from '../../assets/logout.svg'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'
import { VscGithubInverted } from 'react-icons/vsc'

export function SendMessage() {
  const { user, signOut } = useContext(AuthContext)

  return (
    <div className='sendMessageContainer'>
      <div className='sendMessageBox'>
        <img className='logoutIcon' src={logoutIcon} alt="Logout" onClick={()=>{signOut()}} />

        <div className='profile'>
          <div className='profileIcon'>
            <img src={user?.avatar_url} alt={user?.name} />
          </div>

          <strong className='profileName' >{user?.name}</strong>

          <div className='profileUserName'>
            <VscGithubInverted />
            <span>{user?.login}</span>
          </div>
        </div>

        <div className='messageBox'>
          <div className="messageBoxHeader">
            <span>Messagem</span>
          </div>

          <div className="messageBoxBody">
            <textarea name="" id="" placeholder='Digite sua mensagem...'></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}