import { useEffect } from 'react';
import { Package, Trash2, Sofa, Bed } from 'lucide-react';


export default function BulkPickup() {
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
          src="https://images.unsplash.com/photo-1541630010955-6966d6ce9178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBmdXJuaXR1cmUlMjBjb3VjaCUyMHR2JTIwcmVtb3ZhbHxlbnwxfHx8fDE3Njg2MDM0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Bulk Pickup and Junk Out Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-4">Bulk Pickup & Junk Out</h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional removal services for large items and complete apartment cleanouts
          </p>
        </div>
      </section>

      {/* Bulk Pickup Section */}
      <section id="bulk-pickup" className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5F8ED] p-3 rounded-lg">
                  <Package className="w-8 h-8 text-[#00A651]" />
                </div>
                <h2 className="text-4xl text-black">Bulk Pickup</h2>
              </div>
              <p className="text-xl text-black mb-6">
                Need to dispose of large items that won't fit in regular trash? Our bulk pickup service is designed to handle oversized items from your apartment with ease.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 text-black font-semibold">Furniture Removal</h3>
                    <p className="text-black">Couches, sofas, recliners, chairs, and other large furniture pieces</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 text-black font-semibold">Bedroom Items</h3>
                    <p className="text-black">Beds, mattresses, box springs, dressers, and nightstands</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 text-black font-semibold">Flooring & Carpets</h3>
                    <p className="text-black">Old carpets, rugs, and flooring materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 text-black font-semibold">Appliances</h3>
                    <p className="text-black">Small appliances and other bulky household items</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#5F8A33] p-6 rounded-lg shadow-md">
                <p className="text-lg text-black">
                  <strong>How it works:</strong> Simply contact us to schedule a bulk pickup. Our team will coordinate a convenient time to remove your large items safely and efficiently.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#5F8A33] rounded-lg shadow-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1668955254766-1bb2de25cf16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBjb3VjaCUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3Njg2MDI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Furniture"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-black">Furniture</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1640003145873-712e62fe9d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMGJlZHxlbnwxfHx8fDE3Njg2MDI3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Mattresses"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-black">Mattresses</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1761933296164-38a1b6cf72e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsZWQlMjBjYXJwZXQlMjBydWd8ZW58MXx8fHwxNzY4NjAyNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Carpets"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-black">Carpets</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
                      <img
                        src="https://images.unsplash.com/photo-1765000884289-baee6a441acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZWhvbGQlMjBqdW5rJTIwaXRlbXN8ZW58MXx8fHwxNzY4NjAyNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="More Items"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-black">More Items</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Junk Out Section */}
      <section id="junk-out" className="py-20 bg-[#7FB54C] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#E5F8ED] p-3 rounded-lg">
                  <Trash2 className="w-8 h-8 text-[#00A651]" />
                </div>
                <h2 className="text-4xl">Junk Out Service</h2>
              </div>
              <p className="text-xl text-black mb-6">
                Moving out or need a complete apartment cleanout? Our junk out service handles the removal of everything in your apartment, leaving it clean and ready for the next tenant.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">Complete Removal</h3>
                    <p className="text-black/80">We remove all furniture, appliances, and personal belongings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">Fast & Efficient</h3>
                    <p className="text-black/80">Quick turnaround times to meet your move-out deadlines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">All Apartment Sizes</h3>
                    <p className="text-black/80">Services available for 1, 2, and 3-bedroom apartments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#6FA03D] text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-xl mb-1 font-semibold">Environmentally Responsible</h3>
                    <p className="text-black/80">We properly dispose and donate items when possible</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#5F8A33] p-6 rounded-lg shadow-md">
                <p className="text-lg text-black">
                  <strong>Perfect for:</strong> Move-outs, estate cleanouts, property management turnovers, or any situation requiring complete apartment clearing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 text-black">Ready to Schedule a Pickup?</h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your bulk pickup or junk out service. Our team is ready to help with all your removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#6FA03D] text-black px-8 py-4 rounded-lg hover:bg-[#5F8A33] transition-colors font-semibold text-lg shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/request-quote"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg border-2 border-[#6FA03D]"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}