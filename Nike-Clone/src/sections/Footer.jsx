import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
import { copyrightSign } from "../assets/icons"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 
      flex-wrap max-lg:flex-col">
        <div className="flex flex-col gap-6 text-start">
          <a href="/">
            <img src={footerLogo} alt="logo" 
            width={150} height={46} />
          </a>
          <p className="mt-10 leading-7 font-montserrat 
          text-slate-gray sm:max-w-sm">
            get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center 
              rounded-full bg-white w-12 h-12">
                <img src={icon.src} alt={icon.alt}
                width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-[26px] font-bold">
                {section.title}
              </h4>
              <ul className="mt-10 flex flex-col gap-5">
                {section.links.map((item) => (
                  <li key={item.name}>
                    <a href="/" 
                    className="mt-3 text-white-400
                    font-montserrat text-base leading-[24px]
                    hover:text-slate-gray cursor-pointer">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24
      max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-start gap-2 font-montserrat
        cursor-pointer">
          <img src={copyrightSign} alt="copyright" 
          width={20} height={20} className="rounded-full m-0" />
          <p className="font-montserrat cursor-pointer">
            Copyright. All Rights Reserved
          </p>
        </div>
        <p className="font-montserrat cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </footer>
  )
}

export default Footer