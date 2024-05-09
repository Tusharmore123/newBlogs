import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Store/store.js'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Authlayout from './Components/Authlayout.jsx'
import LognIn from './Pages/LognIn.jsx'
import Signup from './Pages/SignUp.jsx'
import Home from './Pages/Home.jsx'
import AddPosts from './Pages/AddPosts.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import Post from './Components/Post.jsx'
import EditPost from './Pages/EditPost.jsx'
const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    
    {
    path:'login',
    element:(
    <Authlayout authentication={false}>
      <LognIn/>
    </Authlayout>
    )
  },
  {
    path:'/signup',
    element:(
      <Authlayout authentication={false}>
        <Signup/>
       </Authlayout>
    
)},
  {
    path:'/addposts',
    element:(
      <Authlayout authentication>
       
        <AddPosts/>
        </Authlayout>
    
)},
  {
    path:'/signup',
    element:(
      <Authlayout authentication={false}s>
        <Signup/>
       </Authlayout>
    
)},{
  path:'/all-posts',
  element:(
    <Authlayout authentication>
      <AllPosts/>
    </Authlayout>
  )
},{
  path:'/post/:slug',
  element:(
    <Authlayout>

      <Post/>
     </Authlayout>
  )
},{
  path:'/edit-post/:slug',
  element:(
    <Authlayout>
      <EditPost/>
    </Authlayout>
  )
}
],

}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    

    <Provider store={store}>
   <RouterProvider router={router}>

    
   </RouterProvider>
    
    </Provider>
  </React.StrictMode>,
)
