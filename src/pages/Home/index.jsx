import { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { Container, Form, UserCard } from './style';


function Home() {

  const users = [{
    id: '122342143',
    name: 'leandro',
    age: 33,
    email: 'teste@gmail.com'
  }, {
    id: '23423',
    name: 'teste 2',
    age: 31,
    email: 'teste2@gmail.com'
  }] 

  return (
    <Container>
      <Form>
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" placeholder="Nome" />
        <input name="idade" type="number" placeholder="Idade" />
        <input name="email" type="email" placeholder="Email" />
        <button type="button">Cadastrar</button>
      </Form>

      {users.map(user => (
        <UserCard key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <FaTrash />
          </button>
        </UserCard>
      ))}
    </Container>
  );
}

export default Home
