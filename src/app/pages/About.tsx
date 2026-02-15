import { Target, Users, Award, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useEffect } from 'react';

export default function About() {
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
              Hibrid Trash Solutions was founded with a simple mission: to make life easier for residents and property managers through reliable, professional valet trash services. We understand that managing waste in multi-family communities can be challenging, and we're here to provide a solution that works.
            </p>
            <p>
              Since our inception, we've grown from serving a handful of communities to becoming a trusted partner for property managers across the region. Our success is built on the foundation of excellent service, reliable performance, and a commitment to our communities.
            </p>
            <p>
              We're proud to employ dedicated porters who take pride in their work and understand the importance of keeping residential communities clean and well-maintained. Every member of our team is carefully selected, thoroughly trained, and committed to upholding the highest standards of service.
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
                  <Target className="w-8 h-8 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Excellence</h3>
                <p className="text-black">
                  We strive for excellence in every aspect of our service delivery.
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
                  Building strong relationships with the communities we serve.
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
                  Consistent, dependable service you can count on.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-[#00A651]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-2">Innovation</h3>
                <p className="text-black">
                  We continuously seek ways to improve our services and operations through technology. By staying current with industry best practices and listening to feedback, we evolve to better serve our communities.
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