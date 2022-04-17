/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Social from "../Social/Social";
import './Login.css'

const Login = () => {
    const emailRef = useRef('');;
    const passwordRef = useRef('');
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    
    if (user) {
        navigate(from, { replace: true });
    }

    const navigateLogin = () => {
        navigate('/register')
    }
  return (
    <div style={{height: '67vh'}} className="container w-50 mx-auto mt-5">
        <h2 className="text-center text-success mb-3">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button className="btn btn-success w-75 text-center login-btn mt-3" variant="primary" type="submit">
          Login
        </Button>
        <p className="text-center fw-bold mt-3">New here? <Link to="/register" className='text-warning pe-auto text-decoration-none' onClick={navigateLogin}>Please Register</Link></p>
      </Form>
      <Social></Social>
    </div>
  );
};

export default Login;
