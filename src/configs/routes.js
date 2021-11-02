import React, { useContext, useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from "../components/navbar";
import { GlobalContext } from "../context/context";
import Home from "../screens/home";
import Login from "../screens/login";
import MyAdmin from "../screens/myadmin";
import Register from "../screens/register";
import { auth ,onAuthStateChanged ,getDoc ,doc,db} from "./firebase";

function Routes(){
    let {state , dispatch} = useContext(GlobalContext)
   useEffect(function(){
    onAuthStateChanged(auth, async(user) => {
        if (user) {
            let Ref1 = doc(db,'users',user.uid);
            let  userInfo = await getDoc(Ref1);
              dispatch({type : 'CURRENT_USER' , payload : user})
           
         
                dispatch({type : 'AUTH_USER_DETAILS' , payload : userInfo.data()})
                console.log(userInfo.data())
    
        } else {
            console.log('USER NOT FOUUND')
            dispatch({type : 'AUTH_USER_DETAILS' , payload : undefined})
        }
      });
   },[])
      
    return(
        <>
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/myadmin' exact>
                    <MyAdmin />
                </Route>
                {/* <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route> */}

            </Switch>
        </Router>
        </>
    )
}

export default Routes;