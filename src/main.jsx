import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/login.jsx'
import SignUp from './Pages/SignUp.jsx'
import AuthLayout from './components/AuthLayout'
import Allposts from './Pages/Allposts.jsx'
import Addpost from './Pages/Addpost.jsx'
import EditPost from './Pages/EditPost.jsx'
import Post from './Pages/Post.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:(
        <AuthLayout authentication={false}>

          <Login/>
        </AuthLayout>)
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <SignUp/>
          </AuthLayout>
        )
      },
      {
        path:'/all-posts',
        element:(
          <AuthLayout authentication>
            <Allposts/>
          </AuthLayout>
        )
      },{
        path:'/add-post',
        element:(
          <AuthLayout authentication>
                    {" "}
                    <Addpost />
                </AuthLayout>

    )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <AuthLayout authentication>
            {''}
            <EditPost/>
          </AuthLayout>
        )
      },  {
        path: "/post/:slug",
        element: <Post />,
    },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>

    
    </Provider>
  </React.StrictMode>,
)
