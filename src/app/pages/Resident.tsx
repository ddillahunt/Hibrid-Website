import { useState } from 'react';
import { Smartphone, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import resiApp1 from '../../assets/resi-app-1.png';
import resiApp2 from '../../assets/resi-app-2.png';

export default function Resident() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unit: '',
    requestType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Request submitted successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      unit: '',
      requestType: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#7FB54C]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-black">
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBsaXZpbmd8ZW58MXx8fHwxNzM3MDM2NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Resident services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Resident Services</h1>
          <p className="text-xl md:text-2xl mb-8">
            Everything you need for convenient valet trash service
          </p>
        </div>
      </section>

      {/* Download Our App Section */}
      <section id="download-app" className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5F8ED] p-3 rounded-lg">
                  <Smartphone className="w-8 h-8 text-[#00A651]" />
                </div>
                <h2 className="text-4xl text-black">Download the HIBRID GO App</h2>
              </div>
              <p className="text-xl text-blblackck mb-6">
                Manage valet trash with full visibility and control. HIBRID GO keeps residents and property teams aligned in real time - reducing complaints, missed pickups, and operational friction.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#7FB54C] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 text-black">Real-Time Service Updates</h3>
                    <p className="text-black">Live notifications when service begins and ends - no guessing, no confusion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#7FB54C] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 text-black">Call Back Requests</h3>
                    <p className="text-black">Residents can submit a real-time callback request while our team is onsite if a pickup is missed.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://apps.apple.com/us/app/hibrid/id6738951726"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold -mt-1">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hibrid.porter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold -mt-1">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="flex gap-3 justify-center items-start max-w-xl mx-auto">
                <img
                  src={resiApp1}
                  alt="HIBRID GO App Login"
                  className="w-[30%] aspect-[9/19] object-cover rounded-lg shadow-xl"
                />
                <img
                  src={resiApp2}
                  alt="HIBRID GO App Dashboard"
                  className="w-[30%] aspect-[9/19] object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit a Request Section */}
      <section id="submit-request" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="bg-[#E5F8ED] p-3 rounded-lg">
              <Send className="w-8 h-8 text-[#00A651]" />
            </div>
            <h2 className="text-4xl text-black">Submit a Request</h2>
          </div>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Have a special request or need assistance? Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="bg-[#E5F8ED] p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-black mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-black mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="unit" className="block text-black mb-2">
                  Unit Number *
                </label>
                <input
                  type="text"
                  id="unit"
                  name="unit"
                  required
                  value={formData.unit}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                  placeholder="Unit 101"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="requestType" className="block text-black mb-2">
                Request Type *
              </label>
              <select
                id="requestType"
                name="requestType"
                required
                value={formData.requestType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
              >
                <option value="">Select a request type</option>
                <option value="missed-pickup">Missed Pickup</option>
                <option value="additional-service">Additional Service Request</option>
                <option value="large-item">Large Item Disposal</option>
                <option value="complaint">Service Complaint</option>
                <option value="general">General Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-black mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A651] focus:border-transparent"
                placeholder="Please provide details about your request..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7FB54C] text-black px-8 py-3 rounded-lg hover:bg-[#6FA03D] transition-colors font-semibold text-lg"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* How to Use Valet Trash Section */}
      <section id="how-to-use" className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="bg-[#E5F8ED] p-3 rounded-lg">
              <CheckCircle className="w-8 h-8 text-[#00A651]" />
            </div>
            <h2 className="text-4xl text-black">How to Use Valet Trash</h2>
          </div>
          <p className="text-xl text-black mb-12 text-center max-w-3xl mx-auto">
            Follow these simple steps to make the most of your valet trash service
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#7FB54C] text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl mb-3 text-black">Bag Your Trash</h3>
              <p className="text-black">
                Place your trash in sealed plastic bags. Make sure bags are tied securely to prevent spills.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#7FB54C] text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl mb-3 text-black">Place Outside Door</h3>
              <p className="text-black">
                Set your bagged trash outside your apartment door by 4 PM on designated service days.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#7FB54C] text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl mb-3 text-black">We Collect</h3>
              <p className="text-black">
                Our porters will collect your trash starting at 5 PM and dispose of it properly.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#7FB54C] text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl mb-3 text-black">Enjoy Clean Living</h3>
              <p className="text-black">
                Relax knowing your trash has been taken care of. No need to walk to the dumpster!
              </p>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl mb-6 text-black text-center">Important Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#7FB54C] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="text-lg mb-1 text-black">Service Days</h4>
                  <p className="text-black">Check your community's schedule for designated pickup days (typically Sunday-Thursday evenings)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#7FB54C] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="text-lg mb-1 text-black">Bag Weight Limit</h4>
                  <p className="text-black">Keep bags under 40 lbs for safe handling by our porters</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#7FB54C] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="text-lg mb-1 text-black">No Hazardous Materials</h4>
                  <p className="text-black">Do not include chemicals, batteries, paint, or other hazardous waste</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#7FB54C] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="text-lg mb-1 text-black">Large Items</h4>
                  <p className="text-black">Contact us through the app for special arrangements for Bulk Pick up</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#7FB54C] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="text-lg mb-1 text-black">Secure Bags Properly</h4>
                  <p className="text-black">Tie bags tightly to prevent leaks and keep hallways clean</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#7FB54C] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                <div>
                  <h4 className="text-lg mb-1 text-black">Timely Placement</h4>
                  <p className="text-black">Place trash out by 4 PM to ensure pickup - late bags may be missed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}