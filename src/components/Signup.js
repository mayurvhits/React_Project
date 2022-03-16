import React, {useRef, useState} from 'react'
import { Button, Form, Card, Alert} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css"
import {useAuth} from  '../context/AuthContext'

function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try{
            setError('')
            setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
          setLoading(false)
    }

  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'> Sign up</h2>
        
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                   <Form.Lable>Email </Form.Lable>
                   <Form.Control type='email' ref={emailRef} required/>             
                </Form.Group>
                <Form.Group id="password">
                   <Form.Lable>Password </Form.Lable>
                   <Form.Control type='password' ref={passwordRef} required/>             
                </Form.Group>
                <Form.Group id="password-confirm">
                   <Form.Lable>Password confirmation </Form.Lable>
                   <Form.Control type='password' ref={passwordConfirmRef} required/>             
                </Form.Group>
                <Button disabled={loading} className='w-100' type='submit'>Sign in</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        Already have an account? Log in
    </div>
    </>
  )
}

export default Signup