import { useEffect } from 'react';
import { Building2, Smartphone, Monitor } from 'lucide-react';
const dashboardImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop";
const resiApp1 = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop";
const resiApp2 = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop";

export default function PropertyManagement() {
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
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmQ8ZW58MXx8fHwxNzM3MDM2NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Property Management Dashboard"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Property Management</h1>
          <p className="text-xl md:text-2xl mb-8">
            Powerful tools for residents and property managers
          </p>
        </div>
      </section>

      {/* Residential App Section */}
      <section id="residential-app" className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5F8ED] p-3 rounded-lg">
                  <Smartphone className="w-8 h-8 text-[#00A651]" />
                </div>
                <h2 className="text-4xl text-black">HIBRID GO App</h2>
              </div>
              <p className="text-xl text-black mb-6">
                Download our mobile app to manage your trash pickup service with ease. Get notifications, track pickups, and communicate directly with our team.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 text-black">Real-Time Notifications</h3>
                    <p className="text-black">Get alerts when pickup is scheduled and completed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 text-black">Service Requests</h3>
                    <p className="text-black">Request additional pickups or special services instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 text-black">Direct Communication</h3>
                    <p className="text-black">Message our team with questions or concerns</p>
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
                  alt="Porter App Login"
                  className="w-[30%] aspect-[9/19] object-cover rounded-lg shadow-xl"
                />
                <img
                  src={resiApp2}
                  alt="Porter App Dashboard"
                  className="w-[30%] aspect-[9/19] object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onsite Client Portal Section */}
      <section id="onsite-portal" className="py-20 bg-[#7FB54C] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={dashboardImage}
                alt="Hibrid Property Dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5F8ED] p-3 rounded-lg">
                  <Monitor className="w-8 h-8 text-[#00A651]" />
                </div>
                <h2 className="text-4xl">Onsite Client Portal</h2>
              </div>
              <p className="text-xl text-black mb-6">
                A comprehensive management dashboard designed specifically for property managers. Monitor services, track performance, and manage billing all in one place.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1">Service Monitoring</h3>
                    <p className="text-black/80">Real-time tracking of all pickups and service activities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1">Performance Reports</h3>
                    <p className="text-black/80">Detailed analytics and performance metrics for your property</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1">Resident Management</h3>
                    <p className="text-black/80">Manage resident information and service preferences</p>
                  </div>
                </div>
              </div>

              <a
                href="http://hibrid-admin-portal-2026.s3-website-us-east-1.amazonaws.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#6FA03D] text-black px-8 py-4 rounded-lg hover:bg-[#5F8A33] transition-colors font-semibold text-lg shadow-lg"
              >
                Access Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12 text-black">Why Choose Our Platform?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#E5F8ED] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-2xl mb-3 text-black">Easy to Use</h3>
              <p className="text-gray-600">
                Intuitive interfaces designed for both residents and property managers. No technical expertise required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#E5F8ED] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-2xl mb-3 text-black">Always Connected</h3>
              <p className="text-gray-600">
                Access your account from anywhere, anytime. Mobile apps and web portal keep you in control.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-[#E5F8ED] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-2xl mb-3 text-black">Comprehensive Tools</h3>
              <p className="text-gray-600">
                Everything you need in one place. From service tracking to performance analytics, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}