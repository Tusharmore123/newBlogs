import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import { login } from '../Store/authSlice';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { appwriteObj } from '../../Appwrite/auth';
import { useForm } from 'react-hook-form';
import Button from './Button';

function SignIn() {
  const [error,setError]=useState("");
  const navigate=useNavigate();
  const {register,handleSubmit}=useForm();
  const dispatch=useDispatch();
  const authStatus=useSelector((state)=>state.auth.signIn)
  const loginUser=async(data)=>{
    try{
      setError("");
      const loggedIn=appwriteObj.login(data);
      navigate('/');
      if(loggedIn){
        const userData=await appwriteObj.getUserAccount();
        console.log('userData',userData)
        if (userData){
          
          dispatch(login(userData))
          console.log("authStatus after signIn",authStatus);
        }

      }
    }
    catch(e){
      setError(e.message)
    }

  }
  return (
    
    <>
    <div
                className='flex items-center justify-center w-full'
            >
                <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                    <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo width="100%" />
                        </span>
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                    <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            to="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
    {error && <p className='text-red-500'>{error}</p>}
    <form onSubmit={handleSubmit(loginUser)}>

    <Input
    label="Enter your email"
    type='text'
    {...register('email',{
      required:true,
      matchPattern:(value)=>{/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)}

    })}
    
    />
    <Input
    label="Enter your Password"
    type='password'
    {...register('password',{
      required:true
    })}
    />
    <Button type={'submit'}
    children='Submit'
    className='mx-10p my-1'/>
    </form>
    </div>
    </div>
    </>
  )
}

export default SignIn