import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { appwriteObj } from '../../Appwrite/auth';
import { login } from '../Store/authSlice';
import Input  from './input';
import Button from './button';
import  Logo from './Logo';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const{register,handleSubmit}=useForm();
    const[Error,setError]=useState('');
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const signUp=(data)=>{
        try{

            const user=appwriteObj.createUser(data);
           
            if (user){
                dispatch(login(user));
                navigate('/');
            }
        }
        catch(error){
            setError(error.message);
        }
    }
    {console.log('Signup')}
  return (
    <>
    <div className="flex items-center justify-center">
    <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%" />
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
                to="/login"
                className="font-medium text-primary transition-all duration-200 hover:underline"
            >
                Sign In
            </Link>
        </p>
    {Error && <p className='text-red-500'>{Error}</p>}
    <form onSubmit={handleSubmit(signUp)}>
        <Input
        type='text'
        label='Enter your Name'
        {...register('name',{
            required:true
        })}/>
        <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            {...register("email",{
                required:true,
                matchPattern:(value)=>{/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)}
            })}
            />
        <Input
        type='password'
        label='Password'
        {...register('password',{
            required:true,
            
        })}
        />
        <Button
        type={'submit'}
        children='Submit'
        />
            

        
    </form>
    </div>
    </div>
    </>
  )
}

export default SignUp