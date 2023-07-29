import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Index from './components/Index/Index';
import UserDetail from './components/UserDetail/UserDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Index></Index>,
        loader:  ()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'user/:friendId',
        element: <UserDetail></UserDetail>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
