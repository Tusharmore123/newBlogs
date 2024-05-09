import React from 'react'
import { useDispatch } from 'react-redux';
import { login,logout } from '../Store/authSlice';
import { useNavigate } from 'react-router-dom';
import { appwriteObj } from '../../Appwrite/auth';

function LogoutBtn({
    children,
    type,
    label,
    id,
    className,
    ...props
}) {
    const navigate=useNavigate();
    const logoutHandler=async()=>{
        await appwriteObj.logout();
        useDispatch(logout);
        navigate('/login');

    }
  return (
    <div>

    {label && <label htmlFor={id}>{id}</label>}
    <button className={`bg-black text-white px-4 ${className}`}  type={type} {...props}
    onClick={logoutHandler}>
    {children}
    </button>
        </div>
  )
}

export default LogoutBtn;