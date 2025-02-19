const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 
    rounded-full border ${borderColor || 'border-coral-red'} 
    ${backgroundColor || 'bg-coral-red'} px-6 py-3 font-montserrat text-base
    leading-none ${textColor || 'text-white'}
    ${fullWidth ? 'w-full' : ''}
    hover:opacity-90 transition-opacity`}>
        {label}

        {iconURL && <img src={iconURL} alt="arrow right icon" 
        className="ml-2 rounded-full w-4 h-4"/>}
    </button>
  )
}

export default Button