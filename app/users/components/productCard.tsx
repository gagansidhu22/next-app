import React from 'react'
import AddToCart from './AddToCart';

export const ProductCard = () => {
  return (
    <div className='p-5 bg-sky-400 text-white test-xl hover:bg-sky-500'>
      <AddToCart />
    </div>
  
  )
}

export default ProductCard;