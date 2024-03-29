
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";



const Login = () => {

    const [user,setUser] = useState(null);
    const auth = getAuth(app)
    
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then(result =>{
             const LoggedInuser = result.user;
             console.log(LoggedInuser);
             setUser(LoggedInuser);
        })
        .catch(error =>{
            console.log('error',error.message);
        })
    }

    const handleGoogleSignout = ()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)
        })
        .catch(error =>{
            console.log('signout',error);
        })
    }


    return (
        <div className="mt-10">
            <button onClick={handleGoogleSignIn} className="btn">Google login</button>
            <br />
            <button onClick={handleGoogleSignout} className="btn">Sign out</button>
            {
                user && <div> 
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                </div>
                
            }
        </div>
    );
};

export default Login;