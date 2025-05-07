import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Veuillez entrer votre nom";
    if (!formData.email.trim()) {
      errors.email = "Veuillez entrer votre email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "L'adresse email n'est pas valide";
    }
    if (!formData.phone.trim()) errors.phone = "Veuillez entrer votre téléphone";
    if (!formData.subject.trim()) errors.subject = "Veuillez entrer un sujet";
    if (!formData.message.trim()) errors.message = "Veuillez entrer un message";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        // Simulation d'envoi du formulaire
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("Form data:", formData);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Réinitialiser le succès après 5 secondes
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        setSubmitError("Une erreur s'est produite. Veuillez réessayer.");
        console.error("Submit error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="py-16 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/public/contact-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 105, 255, 0.5)' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Single white card container */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {/* Title inside the white card */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">ME CONTACTER</h1>
            <p className="text-lg text-gray-600">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <div className="w-60 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Formulaire de contact</h2>
              <div className="w-full h-1 bg-blue-500 mb-6"></div>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-6 rounded">
                  <p>Votre message a été envoyé avec succès !</p>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-6 rounded">
                  <p>{submitError}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom" 
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.name ? 'border-red-500' : ''}`}
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre adresse email" 
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.email ? 'border-red-500' : ''}`}
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                
                <div className="mb-4">
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Votre numéro de téléphone" 
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.phone ? 'border-red-500' : ''}`}
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>
                
                <div className="mb-4">
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet" 
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.subject ? 'border-red-500' : ''}`}
                  />
                  {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                </div>
                
                <div className="mb-6">
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message" 
                    rows="6" 
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : "Envoyer"}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Mes coordonnées</h2>
              <div className="w-full h-1 bg-blue-500 mb-6"></div>
              
              <p className="flex items-start mb-4">
                <span className="mr-3 mt-1">📍</span>
                <span>40 Rue Laure Diebold, 69009 Lyon, France</span>
              </p>
              
              <p className="flex items-center mb-6">
                <span className="mr-3">📞</span>
                <span>06 20 30 40 50</span>
              </p>
              
              {/* Google Map */}
              <div className="w-full h-64 border rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271660344693!2d4.795034615594937!3d45.77606557910575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xd2d39381feb39232!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1647955624857!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;