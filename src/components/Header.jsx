import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './indexmain.css'
import wishlist from './images/wishlist.jpg'
import cartimg from './images/cartimg.png'
import compare from './images/compare.png'
import {  useSelector } from 'react-redux'
import { cartfile } from '../features/cart/cartSlice'

const Header = () => {
  const cartlength = useSelector(cartfile)
  console.log(cartlength)
  return (
     <div>
    <header className='header-top-strip pt-10'>
    <div className='container-xxl'>
    <div className='row'>
    <div className='col-6'>
    <p className='text-white mb-0'>Free shipping over $100 & free Returns</p>
    </div>
    <div className='col-6'>
    <p className='text-end' style={{color:'red'}}>Hotline :<a className='text-white ' href='tel:+91 678965432'>+91 678965432</a></p>
    </div>
      </div>
    </div>
    </header>
    <header className='header-upper py-3'>
    <div className='container-xxl'>
    <div className='row'>
    <div className='col-lg-2 col-md-2 col-2'>
<h1><Link className='text-green'>Shopee</Link></h1>
    </div>
    <div className='col-lg-5 col-md-5 col-3'>
    <div className="input-group mb-3">
    <input type="text" className="form-control py-2" placeholder="search products here" 
    aria-label="search products here" aria-describedby="basic-addon2" />
    <span className="input-group-text" 
    id="basic-addon2"></span>
  </div>
    </div>
    <div className='col-lg-5 col-md-5 col-7'>
      <div className='header-upper-links d-flex align-items-center justify-content-between' >
     <div>
     <Link to='/wishlist' className='d-flex align-items-center gap-10
     text-white'  >
     <img src={wishlist} alt='' style={{height:'30px', width:'50px'}} />
     <p className='mb-0'>Favourite <br />  wishlist</p>
   
     </Link>
     </div>

     <div>
     <Link to='/compprod'  className='d-flex align-items-center gap-10
     text-white' >
     <img src={compare}
      alt='compare' 
     style={{height:'50px', width:'60px'}} />
     <p className='mb-0'>Compare</p>
     </Link>
     </div>

     <div>
     <Link to='/login' className='d-flex align-items-center gap-10
     text-white' >
     <img src='data:image/jpeg;base64,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' alt='' style={{height:'30px', width:'50px'}} />
     <p className='mb-0'>log in <br/>  my account </p>
   
     </Link>
     </div>

     <div>
     <Link to='/cart'  className='d-flex align-items-center gap-10
     text-white'>
     <img src={cartimg}alt=''
      style={{height:'30px', width:'50px'}} />
      <div className='d-flex flex-column' >
     <span className='badge bg-white text-dark'>
     0
     </span>
     <p className='mb-0'>$ 500</p>
     </div>
     </Link>
     </div>
   </div>
    </div>
    </div>
    </div>
    </header>

 <header className='header-bottom py-3'>
 <div className='container-xxl'>
 <div className='row'>
 <div className='col-12'>
<div className='menu-bottom d-flex align-items-center gap-15'>
<div>
<div className="dropdown ">
 <ul className="dropdown-menu" bg-black
   aria-labelledby ="dropdownMenuButton1">
<li>
<Link className='dropdown-item' to='' >Home</Link>
</li>
<li>
<Link  className='dropdown-item' to='' >Home</Link>
</li>
<li>
<Link  className='dropdown-item' to='' >Home</Link>
</li>
  </ul>
</div>
</div>
<div className='menu-links'>
<div className='d-flex align-items-center gap-15'>
<NavLink to='/'>Home</NavLink>
<NavLink to='/product'>store</NavLink>
<NavLink to='/blogs'>blogs</NavLink>
<NavLink to='/contact'>contact</NavLink>
</div>
</div>
</div>
 </div>
 <div className='col-12'>
 
 </div>
 </div>
 
 
 </div>
 </header>
   </div>
)
}

export default Header
