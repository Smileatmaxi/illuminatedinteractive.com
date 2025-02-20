import React from 'react'

interface TextAreaProps {
    id: string
    name: string
    label: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement>) => void
    error: boolean
    errorMessage: string | undefined
}

const Textarea = ({id, name, label, placeholder, onChange,value,error, errorMessage, ...props}: TextAreaProps) => {
    return (
        <div className="w-full mb-3">
            <label className="block text-lg font-semibold text-gray-4" htmlFor={id}>{label}</label>
            <div className="mt-2.5">
                <textarea
                    autoComplete="off"
                    id={id}
                    name={name}
                    onChange={onChange}
                    value={value}
                    rows={5}
                    placeholder={placeholder}
                    {...props}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1
                    -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                    focus:outline-indigo-200 resize-none">
                </textarea>
                {error ? <p className="text-red-600 italic text-sm mt-1">{errorMessage}</p>: null}
            </div>
        </div>
    )
}
export default Textarea
