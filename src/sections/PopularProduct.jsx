import { star } from "../assets/icons";
import { products } from "../constants";

const PopularProduct = () => {
  return (
    <section id="products"
      className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-center items-start">

        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products </h2>
        <p className="lg:max-w-lg mt-5 font-montserrat text-slate-gray">Experience top-notch quality and style with out sought-after selections. Discover a world of comfort, design, and value</p>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product) => {
            return (
              <div key={product.name} className="flex flex-col justify-start items-start gap-6">
                <img src={product.imgURL} alt={product.name}
                  width={282}
                  height={282} 
                  className="w-[282px] h-[282px]"/>
                <div className="flex-1 flex flex-col justify-center items-start gap-3">
                  <div className="flex justify-start items-center gap-2.5">
                    <img src={star} alt="rating icon" width={24} height={24} />
                    <p className="font-montserrat text-slate-gray text-xl leading-normal">(4.5)</p>
                  </div>
                  <h3 className="text-2xl font-semibold font-palanquin">{product.name}</h3>
                  <p className="text-2xl font-semibold font-montserrat text-coral-red">{product.price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PopularProduct
