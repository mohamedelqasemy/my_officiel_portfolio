import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen bg-dark-300 py-20 px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-light-100">
          Contact <span className="text-primary">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-light-100">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="text-light-300">Email</p>
                  <p className="text-light-100">melqasemy2003@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="text-light-300">Phone</p>
                  <p className="text-light-100">+212 689-885591</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-4" />
                <div>
                  <p className="text-light-300">Location</p>
                  <p className="text-light-100">Agadir,Morocco</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-6" action='#contact'>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-dark-200 text-light-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ring-1 ring-primary/20"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-dark-200 text-light-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ring-1 ring-primary/20"
              />
            </div>
            <div>
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full bg-dark-200 text-light-100 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ring-1 ring-primary/20"
              ></textarea>
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-light-100 font-medium py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;