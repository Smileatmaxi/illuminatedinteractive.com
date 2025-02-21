'use client'
import React, {useState} from 'react'
import Input from "@/app/components/input";
import Textarea from "@/app/components/textarea";
import {validate} from "@/app/utilities/validate";
import {toast} from "sonner";
import {redirect} from "next/navigation";
//Exporting this React component
export default function Contact() {

    //setting defaults
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        email: '',
        message: '',
    })

    const [validationErrors , setErrors] = useState<{
        firstName?: string;
        lastName?: string;
        email?: string;
        subject?: string;
        message?: string;
    }>({})

    //handling the submit so when submitted something happens
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate(values)
        const isError = Object.keys(validationErrors).length
        if(isError && isError > 0) {
            setErrors(validationErrors)
            toast.error('An error occured. Please check your inputs.')
            return false;
        } else {
            toast.success('Your message has been sent.')
            console.log(values);
            return redirect("/redirect?url=contact-success");

        }

    }

    //handling the changes on the form inputs
    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues((prev) => ({...prev, [e.target.name]: e.target.value }))
    }

    //basic HTML and Tailwind
    return (
    <div className="h-screen rounded-3xl mx-auto pt-14">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-400 sm:text-5xl">CONTACT US</h2>
            <p className="mt-2 text-lg/8 text-gray-500">If you have any questions regarding our company or our games feel free to write us.</p>
        </div>
        <div className="px-3">
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 flex flex-col items-center" onSubmit={handleSubmit}>
                <Input
                    error={!!validationErrors.firstName}
                    errorMessage={validationErrors.firstName}
                    value={values.firstName}
                    onChange={onChange}
                    id="fistName"
                    label="First Name*"
                    placeholder="Your First Name"
                    name="firstName">
                </Input>
                <Input
                    error={!!validationErrors.lastName}
                    errorMessage={validationErrors.lastName}
                    value={values.lastName}
                    onChange={onChange}
                    id="lastName"
                    label="Last Name*"
                    placeholder="Your Last Name"
                    name="lastName">
                </Input>
                <Input
                    error={!!validationErrors.email}
                    errorMessage={validationErrors.email}
                    value={values.email}
                    onChange={onChange}
                    id="email"
                    label="E-Mail*"
                    placeholder="Your E-Mail"
                    name="email">
                </Input>
                <Input
                    error={!!validationErrors.subject}
                    errorMessage={validationErrors.subject}
                    value={values.subject}
                    onChange={onChange}
                    id="subject"
                    label="Subject*"
                    placeholder="What's your Message about?"
                    name="subject">
                </Input>
                <Textarea
                    error={!!validationErrors.message}
                    errorMessage={validationErrors.message}
                    value={values.message}
                    onChange={onChange}
                    id="message"
                    name="message"
                    label="Message*"
                    placeholder="What's on your mind?">
                </Textarea>
                <div className="mt-2.5">
                    <button className="btn btn-accent w-full py-2 mt-2 text-lg text-black bg-accent rounded-md active:bg-success outline-none disabled:bg-opacity-50"
                            disabled={false}
                            type="submit">Send My Message
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}

