import React from 'react';

const LoginInput = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div style={styles.inputGroup}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={styles.input}
        onFocus={(e) => (e.target.style.border = '1px solid #222222ff')}
        onBlur={(e) => (e.target.style.border = '1px solid #ddd')}
      />
    </div>
  );
};

const styles = {
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
    width: '100%',
  },
  label: {
    marginLeft: '.5rem',
    marginTop: '1rem',
    marginBottom: '1rem',
     textAlign: 'left',
    fontWeight: 500,
    color: '#333',
    fontSize: '0.9rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '0.95rem',
    outline: 'none',
    backgroundColor: '#fafafa',
    transition: 'border 0.2s ease, background 0.2s ease',
  },
};

export default LoginInput;