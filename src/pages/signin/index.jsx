import { useState } from 'react'
import { FiLock, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { useAuth } from '../../hooks/auth'
import { Background, Container, Form } from './styles'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>Notesify</h1>

        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}
