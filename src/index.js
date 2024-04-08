import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import HealthSoultions from './components/HealthSolutions'
import NavBar from './components/NavBar'
import ContactForm from './components/ContactForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sample-project',
    element: <HealthSoultions />,
  },
  {
    path: '/contact',
    element: <ContactForm />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
