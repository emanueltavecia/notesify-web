import { useState } from 'react'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { api } from '../../services/api'
import { Background, Container, Form } from './styles'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) return alert('Preencha todos os campos')

    api
      .post('/users', {
        name,
        email,
        password,
      })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Erro ao cadastrar usuário')
          console.error(error)
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Notesify</h1>

        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
          icon={FiMail}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
