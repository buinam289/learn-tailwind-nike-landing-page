import { copyrightSign, facebook, instagram, twitter } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="text-white bg-black flex items-start max-lg:flex-col gap-16">
        <div className="flex flex-col lg:max-w-md gap-7 w-full">
          <div><a href="/"><img src={footerLogo} alt="nike link" width={150} height={50} /></a>
          </div>
          <p className="text-white-400 text-base leading-7 max-w-sm font-montserrat ">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex gap-4 justify-start">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
              <img src={facebook} alt="Facebook" width={24} height={24} />
            </div>
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
              <img src={twitter} alt="Facebook" width={24} height={24} />
            </div>
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
              <img src={instagram} alt="Facebook" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-between flex-wrap gap-20 lg:gap-10">
          {footerLinks.map((link) => {
            return (
              <div key={link.title}>
                <h3 className="text-3xl leading-normal">{link.title}</h3>
                <ul className="mt-5">
                  {link.links.map((item) => {
                    return (
                      <li key={item} className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"><a href={item.link}>{item.name}</a></li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-16">

        <div className="flex w-full justify-between items-center">
          <a className="text-base text-white-400 flex items-center gap-2" href="">
            <img
              src={copyrightSign}
              alt='copyright sign'
              width={20}
              height={20}
              className='rounded-full m-0'
            />Copyright. All rights reserved.</a>
          <a className="text-base text-white-400" href="">Terms & Conditions</a>
        </div>
      </div>
    </footer >
  )
}

export default Footer
