import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  // State hooks for storing user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  // Function to handle login
  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Replace this URL with the actual third-party API endpoint
      const response = await axios.post('https://third-party-api.com/login', {
        email,
        password,
      });

      // On successful login, handle the response accordingly
      if (response.status === 200) {
        setSuccess('Login Successful!');
        // You can also save the authentication token here if necessary
        // localStorage.setItem('authToken', response.data.token);
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };


}

export default Login;
