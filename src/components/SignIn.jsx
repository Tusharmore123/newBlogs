import { Link, useNavigate } from 'react-router-dom'
import { logIn as authLogin } from '../store/authSlice'
import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import Logo from './logo'
import { useForm } from 'react-hook-form'
import { appwriteObj } from '../../Appwrite/auth'
import Input from './Input'
import Button from './Button'

function SignIn() {
    const [error, setError] = useState();
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const{register,handleSubmit}=useForm();
    const logIn = async (data) => {
        try {
            console.log(data)

            setError("")
            const data2 = await appwriteObj.login(data);
            navigate("/")
            if (data2) {
                const getUser = await appwriteObj.getUser();
                if(getUser){
                    dispatch(authLogin(getUser))
                }
            }
        }
        catch (error) {
            setError(error.message);
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
                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                    <form onSubmit={handleSubmit(logIn)}>
                        <Input
                        label="Email:"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email",{
                            required:true,
                            matchPattern:(value)=>{/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)}
                        })}    />
                        <Input
                        type="password"
                        placeholder="Enter your password"
                        {...register('password',{
                            required:true
                        })}
                                                
                        />
                        <Button type='submit'
                        children="Sign in"
                        className='w-full'/>

                    </form>
                </div>
            </div>
 
        </>
    )
}

export default SignIn;