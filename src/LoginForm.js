import React, { useState } from 'react';
import LoginInput from './LoginInput.js';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Log in to your account</p>

        <hr style = {styles.line}></hr>

        <LoginInput
          label="Username:"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Gellie"
        />

        <LoginInput
          label="Password:"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Gellie123"
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Inter, sans-serif',
  },
  line: {
    marginBottom: '1rem',
    marginTop: '1rem ',
    width: '19rem',
    border: '.2px solid #dbdadaff',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    width: '320px',
    textAlign: 'center',
    border: '1px solid #eaeaea',
  },
  title: {
    marginBottom: '0.3rem',
    color: '#222',
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  subtitle: {
    color: '#777',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
  },
  button: {
    backgroundColor: '#196317ff',
    color: '#fff',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
    marginTop: '1.5rem',
    transition: 'background 0.3s ease, transform 0.1s ease',
  },
};

export default LoginForm;