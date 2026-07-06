
import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";


const Header= () => {

const navigate = useNavigate();

const handleSignOut = () => {
    signOut(auth).then(() => {

        navigate("/")
})
.catch((error) => {
    navigate("/error")
})
};


    return(
        <div className = "absolute w-full  px-15 bg-linear-to-b from-black flex justify-between">

            <img className = "w-50"  src = "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVBEN9I57czDc_uW4ZnDTNTb9hWvK70hYAqf0VNv_dsufIxZqfNclKrp7ugn5j0DkKCYy_4ncEpi6fJk1wpPuLO61r5YUWiEbVjxFpCESIWdJwAAOvAX.svg" alt = "logo"/>

<div>
<img className = "w-10" src = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt = "user Icon" />

<button onClick = {handleSignOut} className = "text-white cursor-pointer font-bold flex"> Sign out </button>


</div>

        </div>
    )

}

export default Header;


