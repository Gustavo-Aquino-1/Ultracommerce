import React, { useContext, useState } from 'react'
import api from '../api'
import Context from '../context/Context'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import logo from '../imgs/logo_ultracommerce.png'
import { SiPlanetscale } from 'react-icons/si'

const LoginArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    
    h1 {
      letter-spacing: 3px;
      text-shadow: 2px 2px #a9baca;
    }

    .inp-login {
      padding: 10px 45px;
      outline-color: #050556;
      margin-top: -40px;
    }

    #btn-login {
      background-color: black;
      color: white;
      border: none;
      padding: 12px 50px;
      border-radius: 4px;
      letter-spacing: 1px;
      text-transform: capitalize;
      letter-spacing: 2px;
      font-weight: 700;
    }

    a {
      text-decoration: none;
      color: black;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

function Login() {
  const { setCnUser } = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { push } = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post('/login', { email, password })
      setCnUser(data)
      push('/products')
    } catch (error) {
      alert(error.response.data.message)
      console.log(error.response.data)
    }
  }

  return (
    <LoginArea>
      <form onSubmit={handleSubmit}>
        <h1>UltraCommerce <span><SiPlanetscale /></span></h1>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='inp-login'
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='inp-login'
          required
        />

        <button id='btn-login' type='submit'>login</button>
      <Link to="/create/account">Create your account</Link>
      </form>
    </LoginArea>
  )
}

export default Login
