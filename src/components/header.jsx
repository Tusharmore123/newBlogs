import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '../container/Container';
import LogoutBtn  from './logoutBtn';

function Header() {
  const auth= useSelector((state) => state.auth.signIn);
  console.log(auth);
  const navigate = useNavigate();
  const [navStyle,setNavStyle]=useState("flex ");
  const[linkStyle,setLinkStyle]=useState("dl:hidden")
  const[menu,setMenu]=useState("sm:hidden xs:block")
  const mystle="h-72 w-full bg-black text-white"
  const handleNav=()=>{
    setNavStyle("flex-col align-center w-full");
    setLinkStyle("dl:block");
    setMenu(" dl:hidden")
    console.log(navStyle,linkStyle)

  }
  const close=()=>{
    setNavStyle("flex");
    setLinkStyle("dl:hidden");
    setMenu(" sm:hidden xs:block")
    console.log(navStyle,linkStyle)

  }
  const navItems = [
    {
      name: 'Login',
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
        <nav className='flex bg-black text-white w-full '>
        <i className={`fas fa-bars py-2 px-2  ${menu}`} onClick={handleNav}></i>
       
        {menu=="sm:hidden xs:block" ||
        <i className={`fas fa-times py-2 px-2 ${linkStyle}`} onClick={close} ></i>
      }

       <ul className={` items-center  ${navStyle}`}>
          {
            navItems.map((item)=>(item.active &&
          (<li key={item.name}>
            
             <button
                onClick={() => navigate(item.slug)}
                className={`inline-block  text-white  px-6 mx-2 py-2 duration-200 hover:bg-blue-100 hover:text-black xs:text-sm dl:text-xs rounded-full display-nav sm:block ${linkStyle} `}
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
