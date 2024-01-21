import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Blogcard from '../components/Blogcard'
import shirt from './images/shirt.jpg'
import { Link } from 'react-router-dom'

const Singleblog = () => {
  return (
    <div>
      <Breadcrumb title='Dynamic blog name as prefer'  />
      <div className='blog-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
     <div className='row'>
    <div className='col-12'>
    <div className='single-blog-card'>
    <Link to='/blogs' className='d-flex align-items-center gap-10'>Go back to blogs</Link>
     <h3 className='title'>
         Jean shirt </h3>
     <img src={shirt} alt='SHIRT' className='img-fluid w-90 my-4 h-100' 
     />
     <p>you're only as good as your last collection which is an enormous pressure i think there is sometnig about luxiry its not something people need but its luxury to be truth</p>
    </div>
    </div>
      </div>
     
      </div>
      </div>
      </div>)
}

export default Singleblog
