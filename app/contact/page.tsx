'use client'

import React, {useState} from 'react'
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import {validate} from "@/app/utilities/validate";
import {toast} from "sonner";
import {redirect} from "next/navigation";

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
            <div className="mx-auto grid w-full max-w-7xl px-4 py-20 md:px-8 md:py-40 text-center">
                <h1 className="text-4xl font-semibold tracking-tight text-balance text-gray-400 sm:text-5xl pb-10">CONTACT
                    US</h1>
                <p className="mt-2 text-lg/8 text-gray-500">
                    If you have any questions regarding us or our games feel free to write us an Email, You will receive
                    an automated E-Mail notification with a Ticket number.
                    make sure to keep it. We will get in contact with you as soon as possible!
                </p>
            </div>
            <div>
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
                            className="relative btn btn-accent w-full py-2 mt-2 text-lg text-black bg-accent rounded-md active:bg-success outline-none disabled:bg-opacity-50"
                            type="submit"
                            disabled={loading}
                        >
                            {loading && (
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <span className="loading loading-dots loading-xl"></span>
                                </span>
                            )}
                            <span className={loading ? "invisible" : "visible"}>
                                Send My Message
                            </span>
                        </button>
                    </div>
                </form>
                <div className="flex flex-col items-center space-x-4 mt-10">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24"
                         fill="red"
                         className="bi bi-exclamation-triangle-fill flex items-center justify-center text-gray-500"
                         viewBox="0 0 16 16">
                        <path
                            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                    <p className="mt-2 text-l text-red-600">
                        When you send us a mail make sure to also check your Junk/Spam inbox!
                    </p>
                </div>
            </div>
        </div>
    )
}


