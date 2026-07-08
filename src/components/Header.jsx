
import {signOut, onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";
import {LOGO, SUPPORTED_LANGUAGE} from "../utils/constants";
import {USER_ICON} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header= () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const user = useSelector((store) => store.user);
const showGptSearch = useSelector((store) => store.gpt.showGptSearch);



const handleSignOut = () => {
    signOut(auth).then(() => {
})
.catch((error) => {
    navigate("/error")
})
};


const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView())
};



const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))

}



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


{user && (
<div className="flex p-2">
    {showGptSearch && (
<select onChange = {handleLanguageChange}  className="p-1 bg-gray-900 text-white m-4">
    {
    SUPPORTED_LANGUAGE.map((lang) => (
    <option key = {lang.identifier}
     value = {lang.identifier}> 
     {lang.name}
    </option> 
))}
</select>
    )}
 <button  
 onClick = {handleGptSearchClick} 
  className=" px-3 my-2 mx-4 ml-auto bg-blue-700 cursor-pointer text-white rounded-lg">{showGptSearch? "Homepage" :"GPT Search"}</button>

<div>
<img className = "w-9 py-2" src = {USER_ICON} alt = "user Icon" />
<button onClick = {handleSignOut} className = "text-white cursor-pointer flex"> Sign out </button>
</div>
        </div>

)
}

</div>
    
    )

}

export default Header;


