// ContactForm.jsx
import React, { FormEvent, useState } from 'react';
import Button from '../common/button';
import Input from '../common/input';
import TextArea from '../common/textarea';
import emailjs from 'emailjs-com';
import { CheckIcon, CloseIcon, Spinner } from '../../assets/svg';

export default function ContactForm() {
    const [promt, setPromt] = useState<boolean | null>(false)
    const [isLoading, setIsLoading] = useState<boolean | null>(false)
    const [err, setErr] = useState<string | null>("")
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        product: '',
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
        setIsLoading(true)

        const emailPayload = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            address: formData.address,
            product: formData.product
        };
        // initial email sending to the admin
        emailjs.send(
            'service_lurufoo',
            'template_sexf70q',
            emailPayload,
            'yUx6glCLOOWwArpF0'
        ).then((response) => {
            console.log("email successfully sent", response.status, response.text);
            setPromt(true);
            setIsLoading(false);

            // Send automated response back to the user
            const autoReplyEmailPayload = {
                to_name: `${formData.firstName} ${formData.lastName}`,
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
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        product: '',
                        address: '',
                        message: '',
                    });
                })
                .catch((error) => {
                    console.error('Failed to send auto-reply:', error);
                    setErr(error)
                });
        }).catch((error) => {
            console.error('Failed to send email:', error);
            setErr(error)
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen sm:w-[80%] m-auto relative">
            <div className="bg-light_color p-8 max-sm:pt-24  sm:rounded-lg shadow-lg w-full relative">
                <h2 className="text-2xl font-bold mb-6 text-primary_color">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className=' sm:grid grid-cols-2 gap-x-6 '>
                        <Input
                            label="First name"
                            name="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            required
                            value={formData.firstName} // Pass value here
                            onChange={handleChange}
                        />
                        <Input
                            label="Last name"
                            name="lastName"
                            type="text"
                            placeholder="Enter your last name"
                            required
                            value={formData.lastName} // Pass value here
                            onChange={handleChange}
                        />
                        <Input
                            label="Contact number"
                            name="phone"
                            type="number"
                            placeholder="Enter your contact number"
                            required
                            value={formData.phone} // Pass value here
                            onChange={handleChange}
                        />
                        <Input
                            label="Product"
                            name="product"
                            type="text"
                            placeholder="Enter your product"
                            value={formData.product} // Pass value here
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
                            label="Address"
                            name="address"
                            type="text"
                            placeholder="Enter address"
                            value={formData.address} // Pass value here
                            onChange={handleChange}
                        />
                    </div>
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
                        buttonText={isLoading ? <Spinner /> : "send message"}
                    />
                    <span className=' text-center w-full text-red-500'>{err}</span>
                </form>
            </div>
            {
                promt && (
                    <div className='fixed w-full top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-[#000000a8]'>
                        <div className='bg-white w-96 rounded-2xl relative flex items-center justify-center pb-8 pt-10 px-4'>
                            <div className='flex items-start gap-3'>
                                <div>
                                    <CheckIcon />
                                </div>
                                <div className=' font-serif text-right text-[18px] text-primary_color font-semibold'>
                                    Your message has been sent successfully! do expect a quick feedback from us
                                </div>
                            </div>
                            <div onClick={() => setPromt(false)} className='absolute top-3 right-3 cursor-pointer'>
                                <CloseIcon />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
