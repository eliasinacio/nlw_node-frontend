import './styles.scss'
import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'

import girlBanner from '../../assets/banner-girl.png'
import { AuthContext } from '../../contexts/auth'

export function LoginBox() {
  const { signInUrl, user } = useContext(AuthContext)

  console.log(user)

  return (
    <div className='loginBox'>
      <img src={girlBanner} alt='Girl' />
      <strong>Envie e compartilhe sua mensagem</strong>
      <a href={signInUrl}>
        <VscGithubInverted size='24' />
        Entrar com Github
      </a>
      <div></div>
    </div>
  )
}