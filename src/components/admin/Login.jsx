import React, { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../../Css/Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuthenticated) {
    console.log('isAuthenticated');
    return <Navigate to="/admin" />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      console.log('admin logging');
      login(username);
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <img
          src={'src/assets/kpmg-logo.png'}
          style={{ width: '500px', height: 'auto' }}
          alt="KPMG Logo"
        />
      </div>
      <div className="login-box">
        <div className="language">
          <span>
            EN{' '}
            <img
              src={'src/assets/uk-flag.jpeg'}
              style={{ width: '20px', height: '20px', borderRadius: '50%' }}
              alt="UK flag Logo"
            />
          </span>
        </div>
        <div className="login-text">
          <span style={{ fontWeight: 'bolder', fontSize: 'xx-large' }}>Login</span>
          <span>Welcome back!</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
        </form>
      </div>
    </div>
  );
};
