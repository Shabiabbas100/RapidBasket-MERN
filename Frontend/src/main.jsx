import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './route/index'
import { Provider } from 'react-redux'
import Login from './pages/Login.jsx'
import Search from './components/Search.jsx'
import { store } from './store/store.js'
import Register from './pages/Register.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
 <Provider store={store}>
  <RouterProvider router={router}/>
</Provider>

    
  
  // </StrictMode>,
)
