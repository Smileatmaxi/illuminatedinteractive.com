import {Resend} from 'resend';
import {NextRequest, NextResponse} from "next/server";
import {EmailTemplateUser} from "@/components/email-template-user";
import {EmailTemplateAdmin} from "@/components/email-template-admin";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        // Await the email template rendering
        const body = await request.json();
        console.log("body", body);
        const {firstName, lastName, email, subject, message} = body;

        //validate the inputs
        if (!firstName || !lastName || !email || !subject || !message) {
            return NextResponse.json({message: "Please check your Inputs!"}, {status: 400});
        }

        /** TODO Create a Simple TicketNumber System */
        const ticketNumber = Date.now().toString(36).toUpperCase();

        //defining user and admin Template
        const userTemplate = await EmailTemplateUser({firstName, ticketNumber});
        const adminTemplate = await EmailTemplateAdmin({firstName, lastName, email, subject, message, ticketNumber});

        //receiving UserData email gets send to Users Inbox
        const userEmailData = await resend.emails.send({
            from: 'contact@illuminatedinteractive.com',
            to: email,
            subject: 'We have received your request!',
            react: userTemplate,
        });

        //receiving AdminData email gets send to Admin Inbox
        const adminEmailData = await resend.emails.send({
            from: email,
            to: 'contact@illuminatedinteractive.com',
            subject: 'New Inquiry received!',
            react: adminTemplate,
        });

        /** TODO Fix response error */
        if (NextResponse.json(adminEmailData.data)) {
            return NextResponse.json({message: 'Emails successfully sent!'}, {status: 200});
        }
        return NextResponse.json(userEmailData);
    } catch (error) {
        console.log(error);
        return NextResponse.json(({message: "Failed to send Email!", error}), {status: 500});
    }
}