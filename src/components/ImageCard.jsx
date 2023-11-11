const ImageCard = ({ url, width, height }) => {
  return (
    <div
      className={`flex justify-center items-center bg-center bg-cover sm:w-${width || 40} sm:h-${height || 40} rounded-xl max-sm:p-4`}>

      <img src={url} alt="<image card>" className="object-contain" />
      
    </div>
  )
}

export default ImageCard