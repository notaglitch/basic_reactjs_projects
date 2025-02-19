import { useState, useEffect } from 'react';
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="padding-x py-6 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={100} height={22} />
        </a>
        
        <ul className="flex-1 flex justify-center items-center gap-12 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} 
              className="font-montserrat leading-normal text-base text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={hamburger}
           alt="hamburger"
            width={25}
            height={25} />
        </div>

        {isMenuOpen && (
          <div className="fixed top-[72px] right-0 left-0 bg-white min-h-screen
          padding-x py-8 z-50 lg:hidden">
            <ul className="flex flex-col gap-8 items-center">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)} 
                    className="font-montserrat text-lg leading-normal text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Nav