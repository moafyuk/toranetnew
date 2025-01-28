import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message, captchaToken, company, telephone } = body;

        if (!name || !email || !message) {
            throw new Error('Name, email, and message are required fields.');
        }

        if (!captchaToken) {
            throw new Error('Captcha token is required.');
        }

        // Verify the recaptcha token
        const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
        const recaptchaRes = await fetch(verificationURL, { method: 'POST' });
        const recaptchaData = await recaptchaRes.json();

        if (!recaptchaData.success) {
            console.error('reCAPTCHA verification failed:', recaptchaData);
            throw new Error('reCAPTCHA verification failed. Please try again.');
        }

        // If recaptcha passed
        const params = {
            Destination: { 
                ToAddresses: ['sales@toranet.net'],
                BccAddresses: ['support@toranet.net', 'statlow+torasense@gmail.com'],
            },
            Message: {
                Body: { 
                    Text: { 
                        Data: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nTelephone: ${telephone}\nMessage: ${message}` 
                    } 
                },
                Subject: { Data: 'ToraSense Website Contact' },
            },
            Source: process.env.AWS_SES_VERIFIED_EMAIL,
        };

        const command = new SendEmailCommand(params);
        const response = await sesClient.send(command);

        return NextResponse.json({ success: true, message: 'Email sent successfully', response });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
