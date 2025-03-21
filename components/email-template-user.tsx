import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    ticketNumber: string;
}

export const EmailTemplateUser: React.FC<Readonly<EmailTemplateProps>> = ({firstName, ticketNumber}) => (
    <Html>
        <Head/>
        <Body style={main}>
            <Preview>IlluminatedInteractive Request Received</Preview>
            <Container style={container}>
                <Section style={coverSection}>
                    <Section style={imageSection}>
                    </Section>
                    <Section style={upperSection}>
                        <Heading style={h1}>Thanks for Reaching Out!</Heading>
                        <Text style={mainText}>
                            Hey {firstName},<br/>
                            Thank you for contacting our support team! We truly appreciate you taking the time to reach
                            out. Our team is busy working to get you the help you need, and we promise we&apos;re on it!
                            <br/>
                        </Text>
                        <h3>Your Ticket Number: {ticketNumber}</h3>
                        <Text style={mainText}>
                            Just a little note: if you happen to send us multiple support requests, it might push your
                            ticket back in line. So, please try to keep it to one message at a time.
                            <br/>
                            Your patience means the world to us.
                            <br/>
                            <br/>
                            Thanks,<br/>
                            IlluminatedInteractive Team
                        </Text>
                    </Section>
                    <Hr/>
                    <Section style={lowerSection}>
                        <Text style={cautionText}>
                            This is an automated message. Please do not respond to this email. we will get in contact
                            with you!
                        </Text>
                    </Section>
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

const lowerSection = {padding: '25px 35px'};

const mainText = {...text, marginBottom: '14px'};

const cautionText = {...text, margin: '0px'};