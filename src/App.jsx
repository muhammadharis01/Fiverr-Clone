import React from "react"
import Navbar from "./components/navbar/Navbar"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/home/home"
import Footer from "./components/footer/Footer"
import Add from "./pages/add/add"
import Gig from "./pages/gig/gig"
import Orders from "./pages/orders/orders"
import MyGigs from "./pages/myGigs/myGigs"
import Messages from "./pages/messages/messages"
import Message from "./pages/message/message"
import Gigs from "./pages/gigs/Gigs"
import "./app.scss"

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
