import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
        await axios.post('http://localhost:5000/login', {
          username,password
        });
        alert('User Login successfully.');
        setUsername('');
        setPassword('');
      }
       catch (error) {
        console.error('Error Login:', error);
        alert('User Not found.');
      }
  
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
         <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;