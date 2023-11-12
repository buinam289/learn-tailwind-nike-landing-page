const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-3xl rounded-[20px] px-10 py-16 flex flex-col justify-center gap-5">
      <div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center"><img src={imgURL} alt="Service" /></div>
      <h3 className="font-bold text-3xl font-palanquin leading-normal">{label}</h3>
      <p className="font-montserrat text-slate-gray text-lg leading-normal break-words">{subtext}</p>
    </div>
  )
}

export default ServiceCard