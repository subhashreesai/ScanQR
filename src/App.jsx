import React from 'react';
import Navbar from './components/Navbar';

import Header from './components/Header';
import Services from './components/Services';
import SocialMedia from './components/SocialMedia';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
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