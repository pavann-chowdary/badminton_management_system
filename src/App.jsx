import React from 'react'
import {useState} from 'react'
import {jwtDecode} from 'jwt-decode'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import clientid from './environmentalVariables/googleClientId'
import axios from 'axios'

function App() { 
  console.log(window.location.origin)
  
  
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    console.error('Google login Successful');
    const decoded = jwtDecode(credentialResponse.credential);
    try {
      const response = await axios.post('/users', {
          name: decoded.name,
          email: decoded.email,
      });

      console.log('User data saved to MongoDB', response.data);
  } catch (error) {
      console.error('Failed to save user data', error);
  }

  };
  
  const handleGoogleLoginError = () => {
    console.error('Google login failed');
  };

  const handleTestEndpoint = async () => {
    try {
        const response = await axios.get('/users/test');
        console.log('Test endpoint response:', response.data);
        alert(response.data.message); // Show the response
    } catch (error) {
        console.error('Error calling test endpoint:', error);
        alert('Test endpoint failed');
    }
};

  return (
    <>
    <GoogleOAuthProvider clientId={clientid}>
      <h1>hi,hello</h1>
      
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={handleGoogleLoginError}
      />
      <button onClick={handleTestEndpoint}>Test Endpoint</button>
    </GoogleOAuthProvider>
        
    </>
  )
}

export default App
