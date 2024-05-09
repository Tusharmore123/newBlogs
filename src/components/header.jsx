import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '../container/Container';
import LogoutBtn  from './logoutBtn';

function Header() {
  const auth= useSelector((state) => state.auth.signIn);
  console.log(auth);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'login',
      slug: '/login',
      active: !auth,
    },
    {
      name: 'Home',
      slug: '/',
      active: auth,
    },
    {
      name: 'logout',
      slug: '/login',
      active: auth,
    },
    {
      name: 'All-posts',
      slug: '/all-posts',
      active: auth,
    },
    {
      name: 'Add posts',
      slug: '/addposts',
      active: auth,
    },
    {
      name: 'Sign Up',
      slug: '/signup',
      active: !auth,
    },
  ];

  {console.log("headers auth",auth)}
  return (
    <header>
      <Container>
        <nav className='flex'>

        <ul className=' flex ml-auto'>
          {
            navItems.map((item)=>(item.active &&
          (<li key={item.name}>
            
             <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
          </li>))
            )
          }
          {
            auth && <LogoutBtn/>
          }
        </ul> 
         </nav>
      </Container>
    </header>
  );
}

export default Header;
