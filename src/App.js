import React, { useState } from 'react';
import LoginForm from './LoginForm.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    const defaultUsername = "Gellie";
    const defaultPassword = "Gellie123";

    if (username === defaultUsername && password === defaultPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      {isLoggedIn ? (
        <div style={styles.successBox}>
          <h1 style={styles.successText}>Login Successful</h1>
          <p style={styles.welcome}>Welcome Back Gellie!</p>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', 
    fontFamily: 'Inter, sans-serif',
  },
  successBox: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    width: '320px',
    border: '1px solid #eaeaea',
  },
  successText: {
    color: '#222222',
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    fontWeight: 600,
  },
  welcome: {
    color: '#555555',
    fontSize: '1rem',
  },
};

export default App;