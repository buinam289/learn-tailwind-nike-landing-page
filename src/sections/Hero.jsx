import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import SelectableShoeCard from "../components/SelectableShoeCard";
import { useState } from "react";


const Hero = () => {

  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-between gap-10 min-h-[90vh] max-container">
      <div className="xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mb-14 mt-6 leading-8 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconUrl={arrowRight} isPrimary={true}/>
        <div className="flex justify-start items-start flex-wrap mt-20 gap-14 w-full">
          {statistics.map((statistic) => {
            return (
              <div key={statistic.label}>
                <p className="text-4xl font-palanquin font-bold">{statistic.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{statistic.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative border-2 flex-1 flex  justify-center items-center max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImage} alt=""
          width={610}
          height={500}
          className="object-contain relative z-10" />

        <div className="absolute -bottom-[5%] flex justify-start gap-10 mt-10 ">
          {shoes.map((shoe, index) => {
            return (
              <SelectableShoeCard key={index} shoeUrl={shoe}
                bigShoeImage={bigShoeImage}
                setBigShoeImage={setBigShoeImage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero