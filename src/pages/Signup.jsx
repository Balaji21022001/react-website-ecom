import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const Signup = () => {
  return (
    <div>
      <Breadcrumb title='signup' />
      <div className='login-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
    <div className='row'>
    <div className='col-lg-12 col-md-12 col-sm-8'>
    <div className='login-card'>
    <h3 className='text-center'>Create Account</h3>
    <form onSubmit={(e) =>e.preventDefault}
    className='d-flex flex-column gap-25'
    >
    <div>
    <input type='text'
    placeholder='Name' className='form-control'
    style={{borderRadius:'10px'}} / >
    </div>
    <div>
    <input type='number'
    placeholder='Number' className='form-control'
    style={{borderRadius:'10px'}} / >
    </div>
    <div>
    <input type='email'
    placeholder='Email' className='form-control'
    style={{borderRadius:'10px'}} / >
    </div>
    <div>
    <input type='password'
    placeholder='password' className='form-control'
    style={{borderRadius:'10px'}} / >
    </div>
    <div>
   
   <div className='d-flex justiy-content-center gap-10 mb-10 align-items
   -center'>
   <button className='btn btn-primary'>Signup</button>
   
   </div>
     </div>
   </form>
 
    </div>
    </div>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Signup
