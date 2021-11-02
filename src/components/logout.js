import React from "react";
import { useHistory } from "react-router";
import { auth , signOut  } from "../configs/firebase";

function Logout(){
    let history = useHistory()
    async function logoutBtn(){
        try {
            await signOut(auth)
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <>
        <button onClick={logoutBtn}>Logout</button>
        </>
    )
}

export default Logout