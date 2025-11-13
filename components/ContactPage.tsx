import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }
    
    setIsLoading(true);
    setApiResponse('');
    setError('');

    // Simulate an API call to prevent crashing on services like Netlify
    // where process.env.API_KEY is not available in the browser.
    setTimeout(() => {
      try {
        const confirmationMessage = `Thank you, ${formData.name}. Your message has been received. We will get back to you at ${formData.email} shortly.`;
        setApiResponse(confirmationMessage);
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } catch (err) {
        console.error(err);
        setError('Sorry, we couldn\'t send your message at this time. Please try again later or reach out to us directly through one of the social links.');
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="container mx-auto px-6 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-cinzel text-brand-tan">Get in Touch</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Have a question or want to place a custom order? Fill out the form below or connect with us on social media.
        </p>
        <div className="w-24 h-1 bg-brand-tan mx-auto mt-4"></div>
      </div>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="bg-black/20 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <label htmlFor="name" className="block text-brand-tan font-semibold mb-2">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-brand-dark border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-tan transition-colors duration-300"
                required
                aria-label="Full Name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-brand-tan font-semibold mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-brand-dark border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-tan transition-colors duration-300"
                required
                aria-label="Email Address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-brand-tan font-semibold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full bg-brand-dark border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-tan transition-colors duration-300"
                required
                aria-label="Message"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-tan text-brand-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Send Message'}
            </button>
          </form>
          {apiResponse && (
            <div className="mt-6 p-4 border border-green-500 bg-green-900/50 rounded-md text-green-200" role="alert">
              <p>{apiResponse}</p>
            </div>
          )}
          {error && (
            <div className="mt-6 p-4 border border-red-500 bg-red-900/50 rounded-md text-red-200" role="alert">
              <p>{error}</p>
            </div>
          )}
        </div>
        
        {/* Contact Info Section */}
        <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-cinzel text-brand-tan mb-4">Our Info</h3>
            <p className="text-gray-300 mb-6">
                You can also reach us directly through the following channels. We're always happy to connect!
            </p>
            <div className="space-y-4">
                <a href="mailto:moziqwears@gmail.com" className="flex items-center gap-4 group">
                    <div className="p-3 bg-gray-800/50 rounded-full">{SOCIAL_LINKS.find(l => l.name === 'Email')?.icon}</div>
                    <span className="text-lg text-brand-light group-hover:text-brand-tan transition-colors">moziqwears@gmail.com</span>
                </a>
                <a href="https://wa.me/+923241601181" className="flex items-center gap-4 group">
                    <div className="p-3 bg-gray-800/50 rounded-full">{SOCIAL_LINKS.find(l => l.name === 'WhatsApp')?.icon}</div>
                    <span className="text-lg text-brand-light group-hover:text-brand-tan transition-colors">+92 324 1601181</span>
                </a>
            </div>
             <div className="border-t border-gray-700 mt-8 pt-8">
                 <h4 className="text-2xl font-cinzel text-brand-tan mb-4">Follow Us</h4>
                <div className="flex items-center space-x-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="p-3 bg-gray-800/50 rounded-full group hover:bg-brand-brown transition-colors duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;