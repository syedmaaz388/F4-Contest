import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError('Error: All fields are mandatory');
      setSuccess('');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
      setSuccess('');
    } else {
      // Generate a random access token
      const accessToken = Math.random().toString(36).substring(2, 18);

      // Save user details and access token to local storage
      const user = {
        name,
        email,
        password,
        accessToken,
      };
      localStorage.setItem('user', JSON.stringify(user));

      // Reset form fields and show success message
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');
      setSuccess('successful Sign Up!');

      // Redirect to profile page after a brief delay
      setTimeout(() => {
        history.push('/profile');
      }, 1000);
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      
      <div className="input-group">
        {/* <label className="label">Name</label> */}
        <input
          className="input"
          type="text"
          value={name}
          placeholder='Full Name'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        {/* <label className="label">Email</label> */}
        <input
          className="input"
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        {/* <label className="label">Password</label> */}
        <input
          className="input"
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        {/* <label className="label">Confirm Password</label> */}
        <input
          className="input"
          type="password"
          value={confirmPassword}
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <button className="btn" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
};

export default Signup;
