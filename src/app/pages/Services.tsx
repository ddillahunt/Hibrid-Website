import { Trash2, Building2, CalendarCheck, Recycle, Smartphone, Truck, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useEffect } from 'react';

export default function Services() {
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
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1755567818043-a86c648900de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMHJlc2lkZW50aWFsfGVufDF8fHx8MTc2NjIzMzY0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Apartment building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl">
            Comprehensive valet trash solutions for your community
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="main-services" className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#E5F8ED] w-16 h-16 rounded-lg flex items-center justify-center">
                  <Trash2 className="w-8 h-8 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-black">Door-to-Door Collection</h3>
                <p className="text-black mb-4">
                  Our professional porters collect trash directly from your door, making waste disposal effortless for residents.
                </p>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Regular pickup schedule (5 nights per week)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Door-to-door collection service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Professional, uniformed porters</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#E5F8ED] w-16 h-16 rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-black">Property Management Benefits</h3>
                <p className="text-black mb-4">
                  Our service helps property managers maintain clean, attractive communities.
                </p>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Improved property cleanliness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Enhanced resident satisfaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Organized dumpster areas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#E5F8ED] w-16 h-16 rounded-lg flex items-center justify-center">
                  <CalendarCheck className="w-8 h-8 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-black">Flexible Service Options</h3>
                <p className="text-black mb-4">
                  We offer customizable service plans to meet your community's unique needs.
                </p>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Customizable pickup schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Holiday coverage available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Special event services</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#E5F8ED] w-16 h-16 rounded-lg flex items-center justify-center">
                  <Recycle className="w-8 h-8 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-black">Recycling Services</h3>
                <p className="text-black mb-4">
                  In addition to regular trash pickup, we offer optional recycling collection services. Help your community go green with convenient recycling pickup. We ensure recyclables are properly separated and disposed of at designated recycling facilities.
                </p>
                <ul className="space-y-2 text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Optional recycling pickup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Proper waste separation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A651] mt-1">•</span>
                    <span>Environmental sustainability</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#E5F8ED] w-12 h-12 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-black">HIBRID GO App</h3>
                <p className="text-black">
                  Download our customer app to receive service updates and communicate with our team.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#E5F8ED] w-12 h-12 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-black">Porter App</h3>
                <p className="text-black">
                  Our porters use a dedicated app for efficient route management and service tracking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#E5F8ED] w-12 h-12 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2 text-black">Team Management</h3>
                <p className="text-black">
                  Our team is managed through a centralized system to ensure consistent and efficient service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Apps Section */}
      <section id="technology-apps" className="py-20 bg-[#7FB54C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-center text-black">Technology & Apps</h2>
          
          <div className="bg-white text-black rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl mb-4 text-black">HIBRID GO APP</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-[#00A651] mb-2">Features:</h4>
                <ul className="space-y-1 text-black">
                  <li>• Service updates and notifications</li>
                  <li>• Communication with our team</li>
                  <li>• Track service history</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#00A651] mb-2">Download:</h4>
                <div className="flex flex-col sm:flex-row gap-3 mt-2 items-center">
                  <a 
                    href="https://apps.apple.com/us/app/hibrid-go/id6738056612" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img 
                      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                      alt="Download on the App Store" 
                      className="h-10"
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
                      className="h-[58px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-black rounded-lg shadow-md p-8">
            <h3 className="text-2xl mb-4 text-black">Porter App</h3>
            <div className="space-y-3 text-black">
              <p>
                <strong>Features:</strong> Efficient route management, service tracking, and communication with the team.
              </p>
              <p>
                <strong>Access:</strong> Only available to our porters.
              </p>
            </div>
          </div>

          <div className="bg-white text-black rounded-lg shadow-md p-8">
            <h3 className="text-2xl mb-4 text-black">Team Management System</h3>
            <div className="space-y-3 text-black">
              <p>
                <strong>Features:</strong> Centralized management, scheduling, and performance tracking.
              </p>
              <p>
                <strong>Access:</strong> Only available to our management team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Note for Cold Weather */}
      <section id="special-note" className="py-20 bg-[#7FB54C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-center text-black">Special Note</h2>
          
          <div className="bg-white text-black rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl mb-4 text-black">Bulk Pickup</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-[#00A651] mb-2">Description:</h4>
                <ul className="space-y-1 text-black">
                  <li>• Involves larger items</li>
                  <li>• Complete clean up of an apartment</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#00A651] mb-2">Contact:</h4>
                <ul className="space-y-1 text-black">
                  <li>• Call our customer service</li>
                  <li>• Schedule a pickup</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white text-black rounded-lg shadow-md p-8">
            <h3 className="text-2xl mb-4 text-black">Cold Weather Guidelines</h3>
            <div className="space-y-3 text-black">
              <p>
                <strong>Placement Time:</strong> Please have trash placed by 4:00 PM
              </p>
              <p>
                <strong>Collection Time:</strong> Starting at 5:00 PM
              </p>
              <p>
                <strong>Bag Requirements:</strong> All trash must be in tied, secure bags (max 40 lbs per bag)
              </p>
              <p>
                <strong>Placement Location:</strong> Place bag in trash can directly outside your apartment door
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}