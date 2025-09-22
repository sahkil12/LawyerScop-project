import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Routes/Root.jsx';
import Home from './assets/Component/Home/Home.jsx';
import ErrorPage from './assets/ErrorPages/ErrorPage.jsx';
import MyBookings from './assets/Component/MyBookings/MyBookings.jsx';
import Blogs from './assets/Component/Blogs/Blogs.jsx';
import Contact from './assets/Component/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement:<ErrorPage></ErrorPage>,
   children:[
    {
      index: true,
      Component: Home,
    },
    {
      path:'myBookings',
      Component:MyBookings,
    },
    {
      path:'blogs',
      Component:Blogs,
    },
    {
      path:'contact',
      Component:Contact,
    }
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} ></RouterProvider>
  <Toaster></Toaster>
  </StrictMode>,
)
