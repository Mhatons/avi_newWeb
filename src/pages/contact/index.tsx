import ContactForm from "../../components/contactForm";
import NavBar from "../../components/layout/nav";

export default function Contact() {

    return (
        <div>
            <NavBar />
            <div className="pt-24 pb-8">
                <ContactForm />
            </div>
        </div>
    )
}