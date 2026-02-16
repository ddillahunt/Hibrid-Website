import { Target, Users, Award, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#7FB54C]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-black">
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NjYyMTY3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional team meeting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Providing exceptional valet trash services with integrity and professionalism
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-[#7FB54C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-black text-lg">
            <p>
              HIBRID Trash Solutions was founded with a clear objective: to bring reliability, structure, and transparency to valet trash in multifamily communities. Managing waste between residents, onsite teams, and ownership groups can quickly become operationally messy. Missed pickups, poor communication, and lack of documentation create unnecessary friction. HIBRID was built to solve that - not just with labor, but with systems.
            </p>
            <p>
              Technology is central to how we operate. The HIBRID GO App and client portal provide real-time service notifications, geo-tagged proof of service, timestamped photo violation reports, live route monitoring, callback requests, and streamlined bulk pickup submissions. Every service night is documented. Every pickup is verifiable. We built our platform to eliminate guesswork and add true transparency to valet trash.
            </p>
            <p>
              Our philosophy is simple: go back to living and let us worry about the trash. We combine efficient operations with technology-driven visibility so property managers gain confidence and residents gain convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="our-values" className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Innovation</h3>
                <p className="text-black">
                  We use technology to bring transparency and structure to valet trash. Through the HIBRID GO App, geo-tagged tracking, and real-time reporting, we eliminate guesswork and modernize a traditionally manual service. We continuously refine our systems based on performance data and client feedback to better serve the communities we support.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Excellence</h3>
                <p className="text-black">
                  We operate with disciplined standards and clear expectations. From porter presentation to documented proof of service, excellence is not optional - it is built into our systems, training, and daily execution.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Community Focus</h3>
                <p className="text-black">
                  We understand that we are working inside people's homes and livelihoods. We prioritize professional conduct, strong communication with onsite teams, and service that supports the overall resident experience while protecting asset value.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Reliability</h3>
                <p className="text-black">
                  Consistency drives trust. Our processes, technology, and employee-ownership model are designed to ensure service is performed, documented, and verifiable every scheduled night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#7FB54C]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center">Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 text-lg mb-6 italic">
                "I am very satisfied with their services. They are always on time, professional, and consistently provide updates when needed. They have been reliable and professional every step of the way."
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-800">Regional Property Manager</p>
                <p className="text-gray-600">GreyStar Worldwide LLC</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 text-lg mb-6 italic">
                "Hibrid is fantastic! I'd give them a 10/10. Their trash pickup is always on time and they keep our breezeways clean. Our rep is super professional and helpful. I highly recommend them."
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-800">Community Manager</p>
                <p className="text-gray-600">Aventura Dunwoody</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}