/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';
import Social from "../Social/Social";

const Register = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const handleRegister = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        createUserWithEmailAndPassword(email, password)
    }

    if(user) {
        navigate('/home')
    }

    const navigateLogin = () => {
        navigate('/login')
    }

  return (
    <div className="container w-50 mx-auto mt-5">
      <h2 className="text-center text-success mb-3">Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control type="text" placeholder="Phone Number" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button
          className="btn btn-success w-75 text-center login-btn"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
        <p className="text-center fw-bold mt-3">
          Already Registered? <Link to="/login" className='text-warning pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link>
        </p>
      </Form>
      <Social></Social>
    </div>
  );
};

export default Register;
