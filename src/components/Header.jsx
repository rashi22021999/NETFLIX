
import {signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import {LOGO} from "../utils/constants";
import {USER_ICON} from "../utils/constants";


const Header= () => {
    console.log("header render");
    
const navigate = useNavigate();
const dispatch = useDispatch();

const handleSignOut = () => {
     console.log("Button clicked");
    signOut(auth).then(() => {
         console.log("User signed out");
})
.catch((error) => {
          console.log(error);

    navigate("/error")
})
};


useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName} = user;
    dispatch(
        addUser({
            uid: uid, 
            email: email, 
            displayName: displayName
        }));
        navigate("/browse")
  } else {
    dispatch(removeUser());
    navigate("/")
  }
});

return () => unsubscribe(); 

},[]);


    return(
        <div className = "absolute w-full z-50  px-15 bg-linear-to-b from-black flex justify-between">

            <img className = "w-50"  src = {LOGO} alt = "logo"/>

<div>
<img className = "w-10" src = {USER_ICON} alt = "user Icon" />

<button onClick = {handleSignOut} className = "text-white cursor-pointer font-bold flex"> Sign out </button>
</div>

        </div>
    )

}

export default Header;


