
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };


  return (
    <div>
    <Header />
    
    <div className ="absolute">
         <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/2f42605e-e786-4a06-8612-ebc67c55ba6c/web/IN-en-20260629-TRIFECTA-perspective_76b17e8c-cff9-4c65-9938-08ca5029be6b_large.jpg" alt = "background"/>
    </div>

  <form className = "w-3/12 absolute p-12  bg-black/80 my-30 mx-auto right-0 left-0">
  <h1 className = "text-white font-bold text-2xl mb-10 ml-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

{!isSignInForm && (
  <input type = "text" placeholder = "Enter Full name" className = "p-2 m-2 bg-gray-300 w-60" />
)}

<input type = "text" placeholder = "Enter Email" className = "p-2 m-2 bg-gray-300 w-60" />

 <input type = "password" placeholder = "Enter Password" className = "p-2 m-2 bg-gray-300 w-60" />

<button className = "p-3 m-4 w-60 ml-2 bg-red-600 text-white cursor-pointer">{isSignInForm ? "Sign In" : "Sign Up"}</button>
<p onClick = {toggleSignInForm} className = "text-white cursor-pointer">{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign in now."}</p>
</form>

</div>
  )
}
export default Login;


