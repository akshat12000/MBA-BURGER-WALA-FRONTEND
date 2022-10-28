import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./components/about/About";
import Dashboard from "./components/admin/Dashboard";
import Orders from "./components/admin/Orders";
import Users from "./components/admin/Users";
import Cart from "./components/cart/Cart";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Shipping from "./components/cart/Shipping";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import NotFound from "./components/layout/NotFound";
import Login from "./components/login/Login";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import Profile from "./components/profile/Profile";
import { loadUser } from "./redux/actions/user";
import toast,{Toaster} from "react-hot-toast";
import {ProtectedRoute} from "protected-route-react"
import "./styles/app.scss";

function App() {

  const dispatch = useDispatch();
  const {error,message,isAuthenticated,user} = useSelector(state=>state.auth);

  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch])

  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:"clearErrors"})
    }
    if(message){
      toast.success(message)
      dispatch({type:"clearMessage"})
    }
  },[dispatch,error,message])

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
        
        <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me"><Login/></ProtectedRoute>}/>
       
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/me" element={<Profile/>}/>
          <Route path="/shipping" element={<Shipping/>}/>
          <Route path="/confirmorder" element={<ConfirmOrder/>}/>
          <Route path="/myorders" element={<MyOrders/>}/>
          <Route path="/order/:id" element={<OrderDetails/>}/>
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user?.role==="admin"} redirectAdmin="/me"/>}>
          <Route path="/admin/dashboard" element={<Dashboard/>}/>
          <Route path="/admin/users" element={<Users/>}/>
          <Route path="/admin/orders" element={<Orders/>}/>
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
      <Toaster/>
    </Router>
  );
}

export default App;
