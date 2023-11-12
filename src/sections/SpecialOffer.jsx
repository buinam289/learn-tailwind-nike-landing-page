import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
import ImageCard from "../components/ImageCard"

const SpecialOffer = () => {
  return (
    <section className="flex max-xl:flex-col-reverse justify-center items-center gap-10">

      <div className="flex justify-center w-full  items-center">
        <ImageCard url={offer} width={773} height={687} />
      </div>

      <div className="flex flex-col gap-5 justify-start items-start">
        <h2 className="text-4xl font-palanquin font-bold"><span className="text-coral-red">Special</span> Offer </h2>
        <p className="info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart. <br /><br />

          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex justify-start gap-4 mt-5">
          <Button label="Shop Now" iconUrl={arrowRight} isPrimary={true} />
          <Button label="Learn more" />
        </div>

      </div>
    </section>
  )
}

export default SpecialOffer
