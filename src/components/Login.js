import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [errors, setErrors]=useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if(Object.values(errors).every((error)=>error ==='')){
      navigate('/weather');
    }
  }

  const validate = () => {
    const errors = {}

    if (!email) {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        errors.email = "Email is not valid";
      } else {
        errors.email = "";
      }
    }
    
    if(!password) {
      errors.password = "Password is required";
    }else if (password.length<8) {
      errors.password = "Incorrect Password";
    }else {
      errors.password = "";
    }
    return errors;
  }


  return (
    <div className="form-container">
      <div className="form">
      <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter your Email</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <div className="error">{errors.email}</div>}          
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter your Password</label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button onClick={() => validate()}>Sign In</button>
        </form>
      </div>
    </div>
  );
}
export default Login;


