import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import * as RoutePath from './routes/routes.js'
import AddCoffee from './components/AddCoffee/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx'

const route= createBrowserRouter([
{
  path:RoutePath.HOME,
  element:<App/>
},
{
path:RoutePath.ADD,
element:<AddCoffee/>
},
{
  path:RoutePath.UPDATE,
  element:<UpdateCoffee/>
}
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
