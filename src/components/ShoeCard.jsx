import React from 'react'

const ShoeCard = ({ shoeUrl, bigShoeImage, setBigShoeImage }) => {
  return (
    <div
      className={`${bigShoeImage === shoeUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} border-2 cursor-pointer 
      flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4`}
      onClick={() => setBigShoeImage(shoeUrl.bigShoe)}
    >

      <img src={shoeUrl.thumbnail} alt="thumbnail image" className="object-contain" />
    </div>
  )
}

export default ShoeCard