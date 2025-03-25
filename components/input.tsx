import React from 'react'

interface InputProps{
    id: string
    name: string
    label: string
    type: string
    required: boolean
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
                   type,
                   placeholder,
                   value,
                   required = Boolean(),
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
                    id={id}
                    type={type}
                    minLength={3}
                    maxLength={36}
                    name={name}
                    required={Boolean(required)}
                    placeholder={placeholder}
                    {...props}
                    className="input validator block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-2
                    -outline-offset-1 outline-gray-300 active:outline-2 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
                />
                {error ? <div className="validator-hint">{errorMessage}</div>: null}
            </div>
        </div>
    )
}
export default Input
