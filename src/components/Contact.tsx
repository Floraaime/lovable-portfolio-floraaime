
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Vamos conversar?</h2>
          <p className="text-lg text-gray-600">
            Me chama no e-mail, bater papo no LinkedIn ou mandar mensagem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-portfolio-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-portfolio-purple" size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">Email</h3>
            <a href="mailto:floraimedesign@gmail.com" className="text-portfolio-purple hover:underline">
              floraimedesign@gmail.com
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-portfolio-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Linkedin className="text-portfolio-purple" size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">LinkedIn</h3>
            <a href="https://linkedin.com/in/floraime" className="text-portfolio-purple hover:underline">
              /in/floraime
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-portfolio-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-portfolio-purple" size={24} />
            </div>
            <h3 className="text-lg font-medium mb-2">Phone</h3>
            <a href="tel:+5583988581286" className="text-portfolio-purple hover:underline">
              55 83 98858-1286
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
