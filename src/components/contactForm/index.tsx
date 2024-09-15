// ContactForm.jsx
import React, { FormEvent, useState } from 'react';
import Button from '../common/button';
import Input from '../common/input';
import TextArea from '../common/textarea';
import emailjs from 'emailjs-com';
import { CloseIcon } from '../../assets/svg';

interface ContactFormProps {
    setContactForm: (value: boolean) => void;
}

export default function ContactForm({ setContactForm }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailPayload = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };
        // initial email sending to the admin
        emailjs.send(
            'service_lurufoo',
            'template_sexf70q',
            emailPayload,
            'yUx6glCLOOWwArpF0'
        ).then((response) => {
            console.log("email successfully sent", response.status, response.text);
            setContactForm(false)

            // Send automated response back to the user
            const autoReplyEmailPayload = {
                to_name: formData.name,
                to_email: formData.email,
                message: "Thank you for contacting us! We have received your message and will get back to you soon."
            };

            emailjs.send(
                'service_lurufoo',
                'template_0fmsuos',
                autoReplyEmailPayload,
                'yUx6glCLOOWwArpF0'
            )
                .then((response) => {
                    console.log('Auto-reply sent successfully!', response.status, response.text);
                })
                .catch((error) => {
                    console.error('Failed to send auto-reply:', error);
                });
        }).catch((error) => {
            console.error('Failed to send email:', error);
        });
        console.log('Form Data:', formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
                <h2 className="text-2xl font-bold mb-6 text-primary_color">Contact Us</h2>
                <div onClick={() => setContactForm(false)} className='absolute top-8 right-6 cursor-pointer'>
                    <CloseIcon />
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={formData.name} // Pass value here
                        onChange={handleChange}
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email} // Pass value here
                        onChange={handleChange}
                    />
                    <Input
                        label="Phone"
                        name="phone"
                        type="number"
                        placeholder="Enter your mobile no."
                        required
                        value={formData.phone} // Pass value here
                        onChange={handleChange}
                    />
                    <TextArea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        label='Message'
                        required
                    />
                    <Button
                        onClick={() => { }}
                        buttonText='send message' />
                </form>
            </div>
        </div>
    );
}
