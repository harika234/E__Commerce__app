import React, { useState } from 'react';
import './login.css'; // Importing the CSS file
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Logged in:', email, password);
  };

  return (
    <div className="login">
      <div className="login__container">
        {/* Logo */}
        <img 
          className="login__logo" 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
          alt="Amazon Logo"
        />
        
       
        <form onSubmit={handleLogin}>
          <h2>Sign-In</h2>

          
          <div className="login__input">
            <label htmlFor="email">Email or mobile phone number</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          
          <div className="login__input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          
          <Link to = "/">
          <button type="submit" className="login__signInButton">Sign-In</button>
          </Link>

          
          <div className="login__footer">
            <span className="login__forgotPassword">
              <a href="#">Forgot your password?</a>
            </span>
          </div>
        </form>

        
        <div className="login__createAccount">
          <span>New to Amazon?</span>
          <button className="login__createButton">Create your Amazon account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
