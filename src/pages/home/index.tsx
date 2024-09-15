import { useState } from "react";
import ContactForm from "../../components/contactForm";
import NavBar from "../../components/layout/nav";

export default function Home() {

    const [showContactForm, setShowContactForm] = useState<boolean | null>(false);

    return (
        <div>
            <NavBar setContactForm={setShowContactForm} />
            <div className="pt-24">
                {
                    showContactForm && <ContactForm setContactForm={setShowContactForm} />
                }
            </div>
        </div>
    )
}