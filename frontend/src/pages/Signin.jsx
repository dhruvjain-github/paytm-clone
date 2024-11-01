import React, { useState } from 'react';
import { BottomWarning } from "../components/BottomWarning.jsx";
import { Button } from "../components/Button.jsx";
import { Heading } from "../components/Heading.jsx";
import { InputBox } from "../components/InputBox.jsx";
import { SubHeading } from "../components/SubHeading.jsx";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Signin() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username, // Send username
        password, // Send password
      });
      
      // Store the token in localStorage
      localStorage.setItem("token", response.data.token);
      
      // Navigate to the dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Signin failed:", error);
      alert("Signin failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          
          {/* Input for Email/Username */}
          <InputBox 
            placeholder="abc@gmail.com" 
            label={"Email"} 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          
          {/* Input for Password */}
          <InputBox 
            placeholder="123456" 
            label={"Password"} 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          
          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleSignIn} />
          </div>
          
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
}

export default Signin;
