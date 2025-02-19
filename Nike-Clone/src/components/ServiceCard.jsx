const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[300px] sm:min-w-[300px] 
    w-full rounded-[20px] shadow-3xl px-8 py-12">
        <div className="flex w-10 h-10 rounded-full 
        bg-coral-red items-center justify-center">
            <img src={imgURL} alt={label} width={20} height={20} />
        </div>

        <h3 className="mt-4 font-palanquin text-2xl leading-normal font-bold">
            {label}
        </h3>

        <p className="mt-3 break-words font-montserrat text-base leading-normal 
        text-slate-gray">
            {subtext}
        </p>
    </div>
  )
}

export default ServiceCard