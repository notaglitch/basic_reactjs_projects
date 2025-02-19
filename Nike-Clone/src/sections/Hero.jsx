import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-[24px] font-bold text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-[52px] font-bold lg:max-w-xl">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The new arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="mt-6 lg:max-w-lg info-text">Discover the best Nike shoes for your performance. Explore our latest collection.</p>
          <Button label="Shop Now" iconURL={arrowRight} />
          <div className="flex justify-start items-start flex-wrap w-full gap-16 mt-20">
            {statistics.map((statistic) => (
              <div key={statistic.label}>
                <p className="text-[20px] font-bold text-coral-red">{statistic.value}</p>
                <p className="leading-7 text-[20px] font-semibold">{statistic.label}</p>
              </div>
            ))}
          </div>

      </div>   
    </section>
  )
}

export default Hero