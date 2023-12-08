import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjTwo } from '../InfoSection/Data';
import Services from '../Services';
import Footer from '../Footer';
import ContactForm from '../ContactForm';
import { useState } from 'react';

export default () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            <Navbar toggle={toggle} />
            <HeroSection />
            {/* <InfoSection {...homeObjTwo} /> */}
            <InfoSection {...homeObjTwo} />
            <Services />
            <ContactForm />
            <Footer />
        </>
    );
};