import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjOne, homeObjTwo } from '../InfoSection/Data';
import Services from '../Services';
import Footer from '../Footer';
import ContactForm from '../ContactForm';
import { contactForm } from '../ContactForm/Data'
import { useState } from 'react';

export default () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Services />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjOne} />
            <ContactForm />
            <Footer />
        </>
    );
};