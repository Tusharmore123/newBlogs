import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { conf } from '../config/config';
import './App.css'
import Headers from './components/header/headers';
import Footer from './components/footer/footer';
import { Outlet } from 'react-router-dom';
import { appwriteObj } from '../Appwrite/auth';
import { logIn, logOut } from './store/authSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    appwriteObj.getUserAccount()
      .then((data) => {
        if (data) {
          dispatch(logIn(data));
        }
        else {
          dispatch(logOut());
        }
      }
      )
      .catch((error) => { console.log("auth error", error) })
      .finally(() => { setLoading(false) })
  }, [])
  console.log(conf);

  return (
    !loading ? (<>
      <div className='w-full min-h-screen bg-green-100 flex flex-wrap  content-between'>
        <div className=' w-full block'>

          <Headers />
          <main>
            todo<Outlet />
          </main>
          <Footer />
        </div>
      </div>

    </>) : null
  )
}

export default App
