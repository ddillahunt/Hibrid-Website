import { useState } from 'react';
import { Mail, Phone, Clock, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    message: '',
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Contact Form:', formData);
    toast.success('Message sent successfully! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyName: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#7FB54C]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-black">
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1732395805034-e0bf859665e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjByZXByZXNlbnRhdGl2ZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzY2MjM5NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Customer service representative"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch to learn how we can serve your community
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section id="get-in-touch" className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl mb-8 text-black">Get In Touch</h2>
              <p className="text-black text-lg mb-8">
                We'd love to hear from you! Whether you're a property manager interested in our services or a tenant with questions, our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#E5F8ED] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#00A651]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-black">Phone</h3>
                    <a href="tel:8002947343" className="text-black hover:text-[#00A651]">
                      (800) 294-7343
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#E5F8ED] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#00A651]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-black">Email</h3>
                    <a href="mailto:admin@hibridsolutions.net" className="text-black hover:text-[#00A651]">
                      admin@hibridsolutions.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#E5F8ED] w-12 h-12 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#00A651]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl mb-1 text-black">Business Hours</h3>
                    <p className="text-black">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-black">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-black">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-[#5F8A33] rounded-lg">
                <h3 className="text-xl mb-3 text-black">Service Areas</h3>
                <p className="text-black">
                  HIBRID is a national organization specializing in valet trash, bulk removal, recycling programs, and pressure washing services for multifamily communities across the Mid-Atlantic and Sunbelt regions.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-gray-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="propertyName" className="block mb-2 text-gray-700">
                      Property Name
                    </label>
                    <input
                      type="text"
                      id="propertyName"
                      name="propertyName"
                      value={formData.propertyName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                      placeholder="If applicable"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                      placeholder="Tell us about your needs or ask any questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#5F8A33] hover:bg-[#4A6B28] text-black py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#7FB54C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-[#5F8A33] p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}>
                <h3 className="text-xl text-black">Do you have a Mobile App for Residents?</h3>
                <ChevronDown className={`w-6 h-6 text-black transition-transform duration-300 ${openFaqIndex === 0 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === 0 ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-black mb-4">
                  Yes! Please download our HIBRID GO App:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <a 
                    href="https://apps.apple.com/us/app/hibrid-go/id6738056612" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img 
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                      alt="Download on the App Store" 
                      className="h-12"
                    />
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.hibridgo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img 
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                      alt="Get it on Google Play" 
                      className="h-[70px]"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#5F8A33] p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}>
                <h3 className="text-xl text-black">Having Issues Creating HIBRID GO Account?</h3>
                <ChevronDown className={`w-6 h-6 text-black transition-transform duration-300 ${openFaqIndex === 1 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === 1 ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-black mb-3">
                  You don't need to create a HIBRID GO account. Simply follow these steps:
                </p>
                <ol className="list-decimal list-inside text-black space-y-2 mb-3">
                  <li>Download the HIBRID GO app from the App Store or Google Play</li>
                  <li>Open the app</li>
                  <li>Enter your property name or search for your property</li>
                  <li>Enter your unit number</li>
                  <li>Start using the app immediately</li>
                </ol>
                <p className="text-black">
                  If you're experiencing any issues with the app, please contact our support team at <a href="mailto:admin@hibridsolutions.net" className="underline hover:text-white">admin@hibridsolutions.net</a> for assistance.
                </p>
              </div>
            </div>

            <div className="bg-[#5F8A33] p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}>
                <h3 className="text-xl text-black">What days of the week does my community get trash picked up?</h3>
                <ChevronDown className={`w-6 h-6 text-black transition-transform duration-300 ${openFaqIndex === 2 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === 2 ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-black">
                  Most communities operate on a Sunday-Thursday schedule. However, to see your community's specific schedule, please log into the HIBRID GO app where you'll find detailed pickup information tailored to your property.
                </p>
              </div>
            </div>

            <div className="bg-[#5F8A33] p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}>
                <h3 className="text-xl text-black">How do I request a real time "Call back" in HIBRID GO App?</h3>
                <ChevronDown className={`w-6 h-6 text-black transition-transform duration-300 ${openFaqIndex === 3 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === 3 ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-black mb-3">
                  To request a real-time call back through the HIBRID GO App:
                </p>
                <ol className="list-decimal list-inside text-black space-y-2">
                  <li>Open the HIBRID GO app and log in to your account</li>
                  <li>Click the door icon</li>
                  <li>Add Photo of missed trash</li>
                  <li>HIBRID team member returns to get your trash</li>
                </ol>
              </div>
            </div>

            <div className="bg-[#5F8A33] p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}>
                <h3 className="text-xl text-black">How Do I Contact HIBRID?</h3>
                <ChevronDown className={`w-6 h-6 text-black transition-transform duration-300 ${openFaqIndex === 4 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === 4 ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-black mb-3">
                  You can contact HIBRID through multiple channels:
                </p>
                <ul className="list-disc list-inside text-black space-y-2">
                  <li>Directly through the HIBRID GO app's support section</li>
                  <li>Call us at <a href="tel:8002947343" className="underline hover:text-white">(800) 294-7343</a></li>
                  <li>Business Hours: Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Email us at <a href="mailto:admin@hibridsolutions.net" className="underline hover:text-white">admin@hibridsolutions.net</a></li>
                </ul>
              </div>
            </div>

            <div className="bg-[#5F8A33] p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 5 ? null : 5)}>
                <h3 className="text-xl text-black">How big of a trash bag can I use and what's too heavy?</h3>
                <ChevronDown className={`w-6 h-6 text-black transition-transform duration-300 ${openFaqIndex === 5 ? 'rotate-180' : ''}`} />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === 5 ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-black">
                  Our waste containers will hold a standard 13 gallon kitchen bag only. The bag must be able to hold all trash including liquids without tearing or leaking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}