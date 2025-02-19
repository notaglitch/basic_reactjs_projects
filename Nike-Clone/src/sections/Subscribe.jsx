import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between 
    items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] font-palanquin lg:max-w-md font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & News
      </h3>
      <div className="lg:max-w-[40%] flex flex-1 w-full items-center 
      justify-end max-sm:flex-col gap-5 max-sm:w-full 
      sm:border sm:border-slate-gray rounded-full">
          <input type="text" placeholder="subscribe@nike.com"
          className="input rounded-full px-6 py-3 border border-slate-gray max-sm:w-full" />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth />
          </div>
      </div>
    </section>
  )
}

export default Subscribe