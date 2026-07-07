
import Header from "./Header";
import { useState, useRef } from "react";
import {checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

const navigate = useNavigate();
const dispatch = useDispatch();

const name = useRef(null);
const email = useRef(null);
const password = useRef(null);


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };


  const handleButtonClick = (e) => {
  
    const message = checkValidData(email.current.value, password.current.value, name.current?.value);
      setErrorMessage(message);
  

    if (message) return ;
   

    if(!isSignInForm){
      //  Sign up logic
    createUserWithEmailAndPassword(
      auth, 
      email.current.value, 
      password.current.value
    )

    .then((userCredential) => {
      const user = userCredential.user;

      updateProfile(user, {
        displayName: name.current.value,

      }).then(()=> {
         const {uid, email, displayName} = auth.currentUser;
            dispatch(
              addUser({
                uid: uid, 
                email: email, 
                displayName: displayName
              }));
          navigate("/browse")
      }).catch((error) => {
        setErrorMessage(error.message);
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    });
  }
   else{
    // sign in logic
      console.log("Sign In clicked");

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    const user = userCredential.user;

    console.log(user);
       navigate("/browse")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

    }
  }


  return (
    <div>
    <Header />
    
    <div className ="absolute">
         <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/2f42605e-e786-4a06-8612-ebc67c55ba6c/web/IN-en-20260629-TRIFECTA-perspective_76b17e8c-cff9-4c65-9938-08ca5029be6b_large.jpg" alt = "background"/>
    </div>

  <form 
   onSubmit = {(e) => e.preventDefault()} 
   className = "w-3/12 absolute p-12  bg-black/80 my-30 mx-auto right-0 left-0">

  <h1 
  className = "text-white font-bold text-2xl mb-10 ml-3">{isSignInForm ? "Sign In" : "Sign Up"}
  </h1>


{!isSignInForm && (
  <input 
  ref = {name}
  type = "text" 
  placeholder = "Enter Full name" 
  className = "p-2 m-2 bg-gray-300 w-60" />
)}


<input 
ref = {email} 
type = "text" 
placeholder = "Enter Email" 
className = "p-2 m-2 bg-gray-300 w-60"
 />

 <input 
 ref = {password} 
 type = "password"
 placeholder = "Enter Password"
 className = "p-2 m-2 bg-gray-300 w-60" 
   />

   <p className = "text-red-600">{errorMessage}  </p>

<button 
className = "p-3 m-4 w-60 ml-2 bg-red-600 text-white cursor-pointer" 
onClick = {handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}
</button>

<p
 onClick = {toggleSignInForm} 
 className = "text-white cursor-pointer">{isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign in now."}
 </p>

</form>

</div>
  )
}

export default Login;


