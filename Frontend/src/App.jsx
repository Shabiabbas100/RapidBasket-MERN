
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
//import fetchUserDetails from './utils/fetchUserDetails';
//import { setUserDetails } from './store/userSlice';
//import { setAllCategory,setAllSubCategory,setLoadingCategory } from './store/productSlice';
//import { useDispatch } from 'react-redux';
import Axios from './utils/Axios';
import SummaryApi from './common/SummaryApi';
//import { handleAddItemCart } from './store/cartProduct'
//import GlobalProvider from './provider/GlobalProvider';
import { FaCartShopping } from "react-icons/fa6";
//import CartMobileLink from './components/CartMobile';
function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default App