import { useState } from 'react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    propertyName: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(`Quote Request from ${formData.name} - ${formData.propertyName}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Title: ${formData.title}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Property Name: ${formData.propertyName}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client with pre-filled content
    window.location.href = `mailto:admin@hidbridsolutions.net?subject=${subject}&body=${body}`;
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        title: '',
        email: '',
        phone: '',
        propertyName: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#7FB54C]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl mb-4 text-center text-black">Request a Quote</h1>
          <p className="text-lg text-center mb-8 text-gray-700">
            Fill out the form below and we'll get back to you with a customized quote for your property.
          </p>

          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Your quote request has been submitted. We'll be in touch soon!</span>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FA03D] focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FA03D] focus:border-transparent"
                placeholder="Your job title"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FA03D] focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FA03D] focus:border-transparent"
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label htmlFor="propertyName" className="block text-sm font-semibold text-gray-700 mb-2">
                Property Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="propertyName"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FA03D] focus:border-transparent"
                placeholder="Name of your property"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6FA03D] focus:border-transparent resize-none"
                placeholder="Tell us about your property and any specific requirements..."
              />
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="bg-[#6FA03D] text-black px-12 py-4 rounded-lg hover:bg-[#5F8A33] transition-colors font-semibold text-lg shadow-lg"
              >
                Submit Quote Request
              </button>
              <p className="text-gray-600 mt-3 text-sm">
                Someone will get back with you in 24 hrs
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}