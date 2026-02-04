/*
https://images.cbazaar.com/images/anarkali-suit-for-indian-ethnic-wear-in-green-net-embroidered-sequins--slscc32003903-u.jpg


Traditional Wear Womens Dress Stores Online Traditional Wear Best
*/

import React from 'react'

import './ProductCart.css'
function ProductCard({product}) {
  return (
    <div className='productCart border-2  w-[15rem] m-3 transition-all cursor-pointer' >
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-top-left' src={product.imgurl} alt="" />
      </div>

      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p className=''> {product.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className=''> Rs. {product.discountPrice}</p>
          <p className='line-through opacity-30 font-semibold'>Rs. {product.price}</p>
          <p className='text-red-600 text-bold'>{product.discountPresent}% Off</p>
        </div>

      </div>
      
    </div>
  )
}

export default ProductCard