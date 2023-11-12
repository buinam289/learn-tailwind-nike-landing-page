import React from 'react'

const Button = ({ label, iconUrl, isPrimary }) => {
    return (
        <button className={`flex justify-center items-center gap-2 ${isPrimary ? "bg-coral-red text-white" : "text-slay-gray"} px-7 py-4 rounded-full border border-coral-red font-montserrat text-lg leading-6`}>
            {label}
            {iconUrl && (<img src={iconUrl} alt="arrow right icon"
                width={70}
                height={70}
                className='ml-2 rounded-full w-6 h-6' />)}
        </button>
    )
}

export default Button
