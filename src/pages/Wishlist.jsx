import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import cross from './images/coriginalcros.jpg'
import watch from './images/colorwatch.jpeg'
import blackwatch from './images/blackwatch.jpeg'

const Wishlist = () => {
  return (
    <div>
      <Breadcrumb title='wishlist' />
      <div className='wishlist-wrapper home-wrapper-2 py-5'>
      <div className='container'>
      <div className='row'>
      <div className='col-3'>
      <div className='wishlist-card position-relative
       img-fluid'>
      <img src={cross}  alt='cross'
       className='position-absolute img-fluid cross' />
      <div className='wishlist-card-image'>
      <img src={blackwatch} alt='watch' className='img-fluid w-100' />
      </div>
      <div>
      <h5 className='title'>New Black Rolex watch model sm3</h5>
      <h6 className='price'>$500</h6>
      </div>
     
      </div>
      </div>

      <div className='col-3'>
      <div className='wishlist-card position-relative
       img-fluid'>
      <img src={cross}  alt='cross'
       className='position-absolute img-fluid cross' />
      <div className='wishlist-card-image'>
      <img src={blackwatch} alt='watch' className='img-fluid w-100' />
      </div>
      <div>
      <h5 className='title'>New Black Rolex watch model sm3</h5>
      <h6 className='price'>$500</h6>
      </div>
     
      </div>
      </div>

      <div className='col-3'>
      <div className='wishlist-card position-relative
       img-fluid'>
      <img src={cross}  alt='cross'
       className='position-absolute img-fluid cross' />
      <div className='wishlist-card-image'>
      <img src={blackwatch} alt='watch' className='img-fluid w-100' />
      </div>
      <div>
      <h5 className='title'>New Black Rolex watch model sm3</h5>
      <h6 className='price'>$500</h6>
      </div>
     
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Wishlist
