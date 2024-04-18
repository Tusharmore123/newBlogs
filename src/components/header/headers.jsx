import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../../container/container'
import { useNavigate } from 'react-router-dom'
import LogoutBtn from './logoutBtn'

function Headers() {
  const authStatus=useSelector((state)=>state.auth.signIn)
  const navigate=useNavigate();
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  
  
  return (
    <header>
      {console.log("headers auth",authStatus)}
      <Container>
        <nav className='flex'>

        <ul className=' flex ml-auto'>
          {
            navItems.map((item)=>item.active?
          <li key={item.name}>
             <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
          </li>:null)
          }
          {authStatus && (
            <li>
             <LogoutBtn />
           </li>
         )}
        </ul>
         </nav>
      </Container>
    </header>   
  )
  
}

export default Headers