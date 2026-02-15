import { useEffect } from 'react';
import { DollarSign, Clock, Award, Heart } from 'lucide-react';
const porterImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop";

export default function BecomePorter() {
  // Handle scroll to section on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#7FB54C]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-black">
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        <img
          src={porterImage}
          alt="Person picking up trash at apartment door"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">Become a Porter</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join our team and start earning with flexible hours and competitive pay
          </p>
        </div>
      </section>

      {/* Porter App Download Section */}
      <section className="py-16 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl mb-4 text-center">Download the Porter App</h3>
          <p className="text-lg text-black mb-6 text-center max-w-2xl mx-auto">
            Communicate with your team and upload proof of service using our dedicated Porter app
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/us/app/hibrid-porter/id123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors min-w-[200px]"
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
              href="https://play.google.com/store/apps/details?id=com.hibridtrash.porter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors min-w-[200px]"
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
      </section>

      {/* Why Work With Us Section */}
      <section id="why-work" className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center">Why Work With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#E5F8ED] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-xl mb-2">Competitive Pay</h3>
              <p className="text-black">
                Earn competitive wages with opportunities for bonuses
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#E5F8ED] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-xl mb-2">Flexible Hours</h3>
              <p className="text-black">
                Evening shifts that work around your schedule
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#E5F8ED] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-xl mb-2">Growth Opportunities</h3>
              <p className="text-black">
                Advancement potential within the company
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#E5F8ED] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-xl mb-2">Great Culture</h3>
              <p className="text-black">
                Join a supportive team that values your contribution
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}