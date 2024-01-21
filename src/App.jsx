import React from "react";
import Layout from "./components/Layout";
import {BrowserRouter,  Routes,Route } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Nomatch from "./Nomatch";
import Ourstore from "./pages/Ourstore";
import Blog from "./pages/Blog";
import Compareproduct from "./pages/Compareproduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgetpassword from './pages/Forgetpassword'
import Signup from './pages/Signup'
import Resetpassword from "./pages/Resetpassword";
import Singleblog from "./pages/Singleblog";
import Privacypolicy from "./pages/Privacypolicy";
import Conditions from "./pages/Conditions";
import Refundpolicy from "./pages/Refundpolicy";
import Shippingpolicy from "./pages/Shippingpolicy";
import Singleproduct from "./pages/Singleproduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
<Route path="/" element={<Layout />}>
 <Route index element={<Home/>} />
 <Route path="/about" element={<About />} />
 <Route path="/contact" element={<Contact />} />
 <Route path= '*' element={<Nomatch />} />
 <Route path= '/product' element={<Ourstore />} />
 <Route path= '/product/:id' element={<Singleproduct />} />
 <Route path= '/blogs' element={<Blog />} />
 <Route path= '/blogs/:id' element={<Singleblog />} />
 <Route path= '/compprc:\Users\ASUS\Desktop\hey\bye\src\Nomatch.jsxod' element={<Compareproduct />} />
 <Route path= '/wishlist' element={<Wishlist />} />
 <Route path= '/login' element={<Login />} />
 <Route path= '/forgetpassword' element={<Forgetpassword />} />
 <Route path= '/signup' element={<Signup />} />
 <Route path= '/Conditions' element={<Conditions />}/>
 <Route path= '/Privacypolicy' element={<Privacypolicy />}/>
 <Route path= '/Refundpolicy' element={<Refundpolicy />} />
 <Route path= '/Shippingpolicy' element={<Shippingpolicy />}/>
 <Route path= '/reset-password' element={<Resetpassword />} />
 <Route path= '/cart' element={<Cart/>}/>
 <Route path= '/checkout' element={<Checkout/>}/>
 </Route>

 </Routes>
 </BrowserRouter>
   
    </div>
  );
}

export default App;
