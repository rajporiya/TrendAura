import React from 'react'

const HomeSectionCart = ({product}) => {
  return (
    <div className="flex justify-center">
    <div className="relative  cursor-pointer bg-white rounded-xl overflow-hidden w-[14rem] shadow-sm hover:shadow-md transition">

      {/* Image Wrapper */}
      <div className="relative w-full h-[180px] overflow-hidden flex justify-center items-end">
        <img
          src={product.imgurl}
          alt="Men's Cotton Shirt"
          className="absolute bottom-0 h-full w-auto max-w-none"
        />
      </div>

      {/* Content */}
      <div className="p-3 text-center">
        <h3 className="text-sm font-semibold text-black">
          {product.brand}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {product.title}
        </p>

        <button className="cursor-pointer mt-3 w-full bg-black text-white py-1.5 rounded-lg text-xs hover:bg-gray-900 transition">
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  )
}

export default HomeSectionCart
// object-cover object-top w-full h-full