import React from 'react';
import { useState,} from "react";
import { Container, Form, Button } from 'react-bootstrap'

const Login = () => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  
  const handleSubmit = async (e) => {
    fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
        username: user,
        password: pwd
      })
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
  }   
  return (
    <Container className='d-flex justify-content-center align-items-center h-100 w-100'>
        <Form className='w-50 m-auto border border-2 border-dark p-4' onSubmit={handleSubmit}>
            <h1 className=''>Login :</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='text-bold'><h3>Username :</h3></Form.Label>
              <Form.Control type="email" className='ml-4 input-form' placeholder="Enter email" onChange={(e) => setUser(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label><h3>Password :</h3></Form.Label>
              <Form.Control type="password" className='ml-4 input-form' placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
        </Form>
    </Container>
  )
}

export default Login