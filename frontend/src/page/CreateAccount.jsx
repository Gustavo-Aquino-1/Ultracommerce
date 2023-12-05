import React, { useContext, useState } from 'react'
import api from '../api'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const CreateAccountArea = styled.div`
  margin-top: 100px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    
    .inp-create-account {
      padding: 10px 25px;
      outline-color: #050556;
    }

    #btn-create-account {
      background-color: black;
      color: white;
      border: none;
      padding: 8px 40px;
      border-radius: 4px;
      letter-spacing: 1px;
    }
  }
`

function CreateAccount() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const { push } = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post('/user', { email, password, name })
      push('/')
    } catch (error) {
      alert(error.response.data.message)
      console.log(error.response.data)
    }
  }

  return (
    <CreateAccountArea>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          className='inp-create-account'
          minLength={5}
          required
          />

        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='inp-create-account'
          required
        />

        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='inp-create-account'
          required
        />

        <button id='btn-create-account' type='submit'>create</button>
      </form>
    </CreateAccountArea>
  )
}

export default CreateAccount
