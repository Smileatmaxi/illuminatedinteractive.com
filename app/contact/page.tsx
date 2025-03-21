'use client'

import React, { useState } from 'react'
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import { validate } from "@/app/utilities/validate";
import { toast } from "sonner";
import { redirect } from "next/navigation";

//Exporting this React component
export default function Contact() {

    //setting defaults
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    })

    const [validationErrors, setErrors] = useState<{
        firstName?: string;
        lastName?: string;
        email?: string;
        subject?: string;
        message?: string;
    }>({})

    const [loading, setLoading] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const validationErrors = validate(data)
        const isError = Object.keys(validationErrors).length
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        if (isError && isError > 0) {
            setErrors(validationErrors)
            toast.error('An error occurred. Please check your inputs.')
            setLoading(false);
            return response.status === 400;
        } else {
            toast.success('Your message has been sent.')
            console.log(data);
            setTimeout(() => {
                return (redirect("/"));
            }, 300)
        }
        setLoading(false);
    };

    //handling changes on the form inputs
    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    //basic HTML and Tailwind
    return (
        <div className="w-full justify-center p-2 sm:p-10 items-center">
            <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-20 md:px-8 md:py-40 text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-400 sm:text-5xl">CONTACT
                    US</h1>
                <p className="mt-2 text-lg/8 text-gray-500">If you have any questions regarding us or our games feel
                    free to write us.</p>
            </div>
            <div className="px-3">
                <form action="#" method="POST" className="mx-auto max-w-xl flex flex-col items-center"
                      onSubmit={sendEmail}>
                    <Input
                        error={!!validationErrors.firstName}
                        errorMessage={validationErrors.firstName}
                        value={data.firstName}
                        onChange={onChange}
                        id="fistName"
                        label="First Name*"
                        placeholder="Your First Name"
                        name="firstName">
                    </Input>
                    <Input
                        error={!!validationErrors.lastName}
                        errorMessage={validationErrors.lastName}
                        value={data.lastName}
                        onChange={onChange}
                        id="lastName"
                        label="Last Name*"
                        placeholder="Your Last Name"
                        name="lastName">
                    </Input>
                    <Input
                        error={!!validationErrors.email}
                        errorMessage={validationErrors.email}
                        value={data.email}
                        onChange={onChange}
                        id="email"
                        label="E-Mail*"
                        placeholder="Your E-Mail"
                        name="email">
                    </Input>
                    <Input
                        error={!!validationErrors.subject}
                        errorMessage={validationErrors.subject}
                        value={data.subject}
                        onChange={onChange}
                        id="subject"
                        label="Subject*"
                        placeholder="What's your Message about?"
                        name="subject">
                    </Input>
                    <Textarea
                        error={!!validationErrors.message}
                        errorMessage={validationErrors.message}
                        value={data.message}
                        onChange={onChange}
                        id="message"
                        name="message"
                        label="Message*"
                        placeholder="What's on your mind?">
                    </Textarea>
                    <div className="mt-2.5">
                        <button
                            className="btn btn-accent w-full py-2 mt-2 text-lg text-black bg-accent rounded-md active:bg-success outline-none disabled:bg-opacity-50"
                            type="submit"
                            disabled={loading}
                        >
                            {loading && (
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <span className="loading loading-dots loading-xl">
                                    </span>
                                </span>
                            )}
                            <span className={loading ? "invisible" : "visible"}>Send My Message</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


