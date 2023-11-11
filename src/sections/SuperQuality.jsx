import { shoe8 } from "../assets/images"
import Button from "../components/Button"
import ImageCard from "../components/ImageCard"

const SuperQuality = () => {
  return (
    <section className="flex max-lg:flex-col items-center gap-10">
      <div className="flex flex-1 flex-col justify-center items-start gap-6">
        <h2 className="text-4xl font-palanquin font-bold  lg:max-w-lg">We Provide You <span className="text-coral-red">Super Quality </span>Shoes</h2>

        <p className="text-lg text-slate-gray info-text  mb-6  lg:max-w-lg">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance. <br /> <br />
          Our dedication to detail and excellence ensures your satisfaction</p>
        <Button label="View details" />
      </div>
      <div className="flex flex-1 justify-center items-center">
        {/* <img src={shoe8} alt="product detail" width={570} height={520} className="object-contain" /> */}
        <ImageCard url={shoe8} width={96} height={96} />
      </div>
    </section>
  )
}

export default SuperQuality
