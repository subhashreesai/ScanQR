import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Services from './Components/Services';
import SocialMedia from './Components/SocialMedia';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import { ThemeProvider } from './context/ThemeContext';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Header />
        <Services />
        <SocialMedia />
        <ContactForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

     
