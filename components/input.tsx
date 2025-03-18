import React from 'react'

interface InputProps{
    id: string
    name: string
    label: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
    error: boolean
    errorMessage: string | undefined
}

const Input = ({
                   id,
                   name,
                   label,
                   placeholder,
                   value,
                   onChange,
                   error,
                   errorMessage = '',
                   ...props
}: InputProps) => {
    return (
        <div className="w-full mb-4">
            <label className="block text-lg font-semibold text-gray-4" htmlFor={id}>{label}</label>
            <div className="mt-2.5">
                <input
                    value={value}
                    autoComplete="off"
                    onChange={onChange}
                    type="text"
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    {...props}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1
                    -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
                />
                {error ? <p className="text-red-600 italic text-sm mt-1">{errorMessage}</p>: null}
            </div>
        </div>
    )
}
export default Input
