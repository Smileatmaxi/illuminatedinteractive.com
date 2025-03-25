import {Body, Container, Head, Heading, Hr, Html, Img, Preview, Section, Text,} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    ticketNumber: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://illuminatedinteractive.com';

export const EmailTemplateAdmin: React.FC<Readonly<EmailTemplateProps>> = ({
                                                                               firstName,
                                                                               lastName,
                                                                               email,
                                                                               subject,
                                                                               message,
                                                                               ticketNumber,
                                                                           }) => (
    <Html>
        <Head/>
        <Body style={main}>
            <Preview>IlluminatedInteractive Request Received</Preview>
            <Container style={container}>
                <Section style={coverSection}>
                    <Section style={imageSection}>
                        <Img src={`${baseUrl}/ui/IlluminatedInteractive-email-header.png`}
                             alt="IlluminatedInteractive's Logo"
                             width="600"
                             height="200"
                        />
                    </Section>
                    <Section style={upperSection}>
                        <Heading style={h1}>Ticket: {ticketNumber}</Heading>
                        <Text style={mainText}>First Name: {firstName}</Text>
                        <Text style={mainText}>Last Name: {lastName}</Text>
                        <Text style={mainText}>Email: {email}</Text>
                        <Text style={mainText}>Subject: {subject}</Text>
                        <Text style={mainText}>Message: {message}</Text>
                    </Section>
                    <Hr/>
                </Section>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: '#fff',
    color: '#212121',
};

const container = {
    padding: '20px',
    margin: '0 auto',
    backgroundColor: '#eee',
};

const h1 = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
};

const text = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    margin: '24px 0',
};

const imageSection = {
    backgroundColor: '#252f3d',
    display: 'flex',
    padding: '20px 0',
    alignItems: 'center',
    justifyContent: 'center',
};

const coverSection = {backgroundColor: '#fff'};
const upperSection = {padding: '25px 35px'};
const mainText = {...text, marginBottom: '14px'};