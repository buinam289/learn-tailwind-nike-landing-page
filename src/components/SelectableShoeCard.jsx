const SelectableShoeCard = ({ shoeUrl, bigShoeImage, setBigShoeImage, width }) => {
  return (
    <div
      className={`${bigShoeImage === shoeUrl.bigShoe ? 'border-coral-red border-2 ' : 'border-transparent'}cursor-pointer 
      flex justify-center items-center ${width !== undefined ? "" : "bg-card"} bg-center bg-cover sm:w-${width || 40} sm:h-${width || 40} rounded-xl max-sm:p-4`}
      onClick={() => setBigShoeImage && setBigShoeImage(shoeUrl.bigShoe)}
    >

      <img src={shoeUrl.thumbnail} alt="thumbnail image" className="object-contain" />
    </div>
  )
}

export default SelectableShoeCard