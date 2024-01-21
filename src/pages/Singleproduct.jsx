import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Productcards from '../components/Productcards'
import shirt from './images/shirt.jpg'
import { Link } from 'react-router-dom'
import wishlist from './images/wishlist.jpg'
import compare from './images/compare.png'
import productblue from './images/productblue1.jpeg'

const Singleproduct = () => {
  const [orderedproduct, setOrderedproduct] = useState
    (true)
    const copyToClipboard = (text) =>{
      console.log('text', text);
      var textfield = document.createElement('textarea'
      )
      textfield.innerHTML = text;
      document.body.appendChild(textfield)
      textfield.select()
      document.execCommand('copy')
      textfield.remove()
    }
  return (
    <div>
      <Breadcrumb title='singleproduct' />
      <div className='main-product-wrapper py-5 bg-dark home-wrapper-2'>
        <div className='container-xxl '>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <img src={shirt} alt='track'style={{height:'100vh'}} className='img-fluid w-100' />
                <div>
 
 <div> <img src={productblue} alt='track'
  className='img-fluid pt-10' style={{height:'500px',width:'500px'}} />
  </div>
          </div>
              </div>
            </div>
            <div className='col-6'>
            <div className='main-product-details'>
           <div className='border-bottom'>
           <h3 className='title'>Mens jean shirt Cotton fabric Mv3</h3>
           </div>
         <div className='border-bottom'>
       <p className='price'>$500</p>
         </div>
         <div className='border-bottom d-flex'>
         <h4 className='title'>Type :</h4>
         <p className='text-center pt-2'>Shirt</p>
           </div>
           <div className='border-bottom '>
          <div className='d-flex '>
          <h4 className='title'>Brand :</h4>
          <p  className='text-center pt-2'>
          Greenworld</p> 
          </div> 
          <div className='border-bottom d-flex'>
          <h4 className='title'>Availability :</h4>
          <p className='text-center pt-2'>in stock</p>
            </div>
<div className='d-block'>
<h4 className='title'>Categories :</h4>
<p className='pl-10'> Shirts, Fullhand Halfhand</p>
</div>

<div className='d-block'>
<h4 className='title'>Tags :</h4>
<p className='d-flex gap-5 align-items-center'>Shop Diwalisale  Shirt  Cottonshirt Casuals Formals Coat</p>
</div>
<div className='d-flex gap-10 flex-column my-2'>
<h4 className='title'>Size :</h4>
<p className='d-flex flex-wrap gap-15 align-items-center'>
<span className='badge border bg-white text-dark border-1 border-secondary
'>M</span>
<span className='badge border bg-white text-dark border-1 border-secondary
'>L</span>
<span className='badge border bg-white text-dark border-1 border-secondary
'>XL</span>
<span className='badge border bg-white text-dark border-1 border-secondary
'>XXL</span>
</p>
</div>

<div className='d-flex colors gap-10 flex-column my-2'>
<h4 className='title'>Color :</h4>
<div className='d-flex flex-wrap colorwrapper gap-3'>
<div className='one'></div>
<div className='two'></div>
<div className='three'></div>
<div className='four'></div>
 
 </div>
</div>


<div className='d-flex gap-10 flex-row my-2'>
<h4 className='title'>quantity :</h4>
<div className=''>
<input type='number'className='form-control'
style={{width:'70px',margin:'10px'}} min={1} max={10} />
</div>
<div className= 'gap-15 align-items-center'>
<button className='btn btn1 btn-primary mt-2'>Add to cart</button>
<Link to='/signup' className='btn btn-primary signup mt-2'>
Buy it now</Link>
</div>
</div>
<div className='d-flex align-items-center gap-15'>
<div><a href='/compareprod' ><img src={compare}
style={{height:'30px', width:'30px'}}
 className='img-fluid'
alt='compare' />Add to compare</a></div>
<div><a href='/wishlist' ><img className='img-fluid'
src={wishlist} alt='wishlist' style={{height:'30px', width:'30px'}}/>
Add to wishlist</a></div>
</div>

<div className= 'd-block  flex-wrap gap-10 my-2 align-items-center'>
<h3 className='title mt-10'>Shipping & Returns :</h3>
<p className='para d-flex'>Free shipping and returns available
 on all orders! <br />we ship all of products within <br /> 
<b>5 to 10 days</b></p>
</div>

<div className= 'd-block  flex-wrap gap-10 my-2 align-items-center'>
<h3 className='title mt-10'>instructions :</h3>
<p className='para d-flex'> wash after every wearing and dont kept in high temperature area</p>
</div>


<div className= 'd-block  flex-wrap gap-10 my-2 align-items-center'>
<h3 className='title mt-10'>Copy product link :</h3>
<a href='link' onClick={() =>copyToClipboard({shirt})} >
copy it</a>
</div>


             </div>

            </div>
            
            </div>
          </div>
        </div>
      </div>

      <div className='description-wrapper py-5 home-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>

                <p>This section based on review by customers who used our products and put their reiwes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3>Reviews</h3>
              <div className='review-inner-wrapper'>
                <div className='review-head d-flex 
     justify-content-between align-items-end'></div>
                <div>
                </div>
                <div>
                  <h4 className='mb-2'>Customer reviews</h4>
                  {
                orderedproduct &&(
                      <div className='d-flex  justify-content-end'>
                        <a href='*'
                          className='text-dark text-decoration-underline
     align-items-end bg-white w-90 mb-10 p-20 review-link'  >Write a review</a>
                      </div>
                    )
                  }
                </div>


              </div>

            </div>
            <div className='review-form'>
              <h4>Write a Review</h4>
              <form className='d-flex flex-column gap-15'>
                <div>
                  <textarea placeholder='Comment' className='form-control '>
                  </textarea>
                </div>

                <div className='d-flex  justify-content-end'>
                  <button className='btn btn-primary button'>Submit</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>our popular products</h3>
            </div>
          </div>
          <div className='row'>
            <Productcards />
            <Productcards />

          </div>
        </div>
      </section>
    </div>
  )
}

export default Singleproduct
