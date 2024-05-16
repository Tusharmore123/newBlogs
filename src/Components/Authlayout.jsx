import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Authlayout({children,authentication=true}) {
    console.log('authentication',authentication)
    const authStatus=useSelector((state)=>state.auth.signIn);
    const navigate=useNavigate();
    const [loader,setLoader]=useState(true);

    useEffect(()=>{
        if (authentication && authentication!==authStatus){
            navigate('/login');
        }
        else if (!authentication && authentication!==authStatus){
            navigate('/');
        }
        setLoader(false)

    },[authentication,authStatus,navigate])
  return (
    
    loader?<h1>Loading....</h1>:<>
    {children}
    </>
  )
}

export default Authlayout