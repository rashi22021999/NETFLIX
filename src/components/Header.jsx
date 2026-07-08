
import {signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import {LOGO} from "../utils/constants";
import {USER_ICON} from "../utils/constants";


const Header= () => {
    
const navigate = useNavigate();
const dispatch = useDispatch();

const handleSignOut = () => {
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

            <img className = "w-30 py-5"  src = {LOGO} alt = "logo"/>

<div>

<img className = "w-9 py-2" src = {USER_ICON} alt = "user Icon" />

<button onClick = {handleSignOut} className = "text-white cursor-pointer flex"> Sign out </button>
</div>

        </div>
    )

}

export default Header;


