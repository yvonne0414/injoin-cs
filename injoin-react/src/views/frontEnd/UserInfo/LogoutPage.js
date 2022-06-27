import React, { useState } from 'react'
import Login from '../Login'
import Sighup from '../Signup'



const LogoutPage = ({setisLogin}) => {
  let [logoutstate, setlogoutState] = useState(1)
  return (
    <>
    {logoutstate === 1 && <Login setlogoutState={setlogoutState} setisLogin={setisLogin}/>}
    {logoutstate === 2 && <Sighup setlogoutState={setlogoutState}/>}
    
    </>
  )
}

export default LogoutPage