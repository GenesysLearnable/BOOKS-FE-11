import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign up");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleActionChange = () => {
    setAction(action === "Sign up" ? "Login" : "Sign up");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  const handlePasswordChange = (event) => {
   const newPassword = event.target.value;
   setPassword(newPassword);

   if (newPassword.length > 8) {
    setErrorMessage('Password must not be longer than 8 characters');
   } else {
      setErrorMessage(''); 
   }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action === "Sign up" ? "Create Account" : "Login"}</div>
        <div className="details">
          Get unlimited access to any academic resource of your choice
        </div>
      </div>
      <div className="inputs">
       <div className="input">
        <img src='images/google.png' alt="" />
        <input type="text" placeholder="Sign up with Google " />
       </div>

      <div className="input">
       <img src='images/Facebook.png' alt="" />
         <input type="text" placeholder="Sign up with Facebook "/>
     </div>

     <div className="input">
       <img src='images/apple.png' alt="" />
       <input type="text" placeholder="Sign up with Apple "/>
        </div>
        
        <div className="or">Or</div>

          <div className="inputemailpassword">
            <input type="email" placeholder={action === "Sign up" ? "Email " : "Email"} />
          </div>

          <div className="inputemailpassword">
            <input type={showPassword ? "text" : "password"}placeholder="Password"
            value={password} maxLength={10} onChange={handlePasswordChange}
            />
            <img
              className="passwordimage"
              src="images/Huge-icon.png" 
              alt="show-password"
              onClick={toggleShowPassword} 
            />
          </div>
          {errorMessage && <div className="errormessage">{errorMessage}</div>} 
          {action === "Login" && <div className="forgotpassword">Forgot Password?</div>}

          <div className="submit-container" onClick={handleActionChange}>
            <div className="submit">{action}</div>
          </div>
        {/* </div> */}
      </div>

      <div className="t-and-c">
        <p className="t-details">
          By {action === "Sign up" ? "signing up" : "logging in"}, you agree to <span>our Terms and Service, and Privacy Policy</span>
        </p>
        <p className="account">
          {action === "Sign up" ? (
            <span>Already have an Account? </span>
          ) : (
            <span>Don't have an Account yet? </span>
          )}
          <a className="link" onClick={handleActionChange}>
            {action === "Sign up" ? "Login" : "Sign up"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;

