export const validate = ({
    firstName,
    lastName,
    email,
    subject,
    message
}: {
    firstName: string
    lastName: string
    email: string
    subject: string
    message: string
}) => {
    const validationErrors: {firstName?: string; lastName?: string; email?: string; subject?: string; message?: string;} = {}

    // Validation
    if (firstName.length <= 1) validationErrors.firstName = 'First name is required!';
    if (lastName.length <= 1) validationErrors.lastName = 'Last name is required!';
    if (
        email.length <= 1 ||
        !email.includes('@') ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
        validationErrors.email = 'A Valid E-Mail is required!';
    }
    if (subject.length <= 0) validationErrors.subject = 'Subject is required!';
    if (message.length <= 0) validationErrors.message = 'Message is required!';

    return validationErrors;

    }