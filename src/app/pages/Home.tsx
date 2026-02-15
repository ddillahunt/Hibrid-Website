import { Link } from 'react-router-dom';
import { Smartphone, Eye, Monitor, MapPin } from 'lucide-react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const basePath = import.meta.env.BASE_URL;
const tnaaLogo = `${basePath}assets/partners/tnaa.svg`;
const taaLogo = `${basePath}assets/partners/taa.svg`;
const faaLogo = `${basePath}assets/partners/faa.svg`;
const aaaLogo = `${basePath}assets/partners/aaa.svg`;
const amaLogo = `${basePath}assets/partners/ama.svg`;
const aancLogo = `${basePath}assets/partners/aanc.svg`;
const scaaLogo = `${basePath}assets/partners/scaa.svg`;
const naaLogo = `${basePath}assets/partners/naa.svg`;
const chattahoocheeLogo = `${basePath}assets/partners/chattahoochee.svg`;
const atlantaLogo = `${basePath}assets/partners/atlanta.svg`;

export default function Home() {
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

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const partnerLogos = [
    { src: tnaaLogo, alt: 'Tennessee Apartment Association' },
    { src: taaLogo, alt: 'TAA' },
    { src: faaLogo, alt: 'Florida Apartment Association' },
    { src: aaaLogo, alt: 'Alabama Apartment Association' },
    { src: amaLogo, alt: 'AMA' },
    { src: aancLogo, alt: 'AANC' },
    { src: scaaLogo, alt: 'South Carolina Apartment Association' },
    { src: naaLogo, alt: 'National Apartment Association' },
    { src: chattahoocheeLogo, alt: 'Chattahoochee' },
    { src: atlantaLogo, alt: 'Atlanta' },
  ];

  return (
    <div className="bg-[#7FB54C]">
      {/* Request a Quote Banner */}
      <div className="bg-[#6FA03D] py-3 text-center">
        <p className="text-black text-lg">
          Need a quote for your property?{' '}
          <Link 
            to="/request-quote" 
            className="font-bold underline hover:text-white transition-colors"
          >
            Request a Quote
          </Link>
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-black">
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1638637867034-e530ad821056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBjb21wbGV4JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2MjM0NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Multi-family apartment complex"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl mb-6">Technology Enabled Doorstep Trash & Waste Removal</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Doorstep Trash removal for a multifamily community of all types including, senior living, student housing, condominiums and BTR.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg transition-colors border border-black"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#7FB54C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-4 text-black">How It Works</h2>
          <p className="text-xl text-center text-black mb-16 max-w-3xl mx-auto">
            Our platform makes managing valet trash services simple and efficient for everyone
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center flex flex-col">
              <div className="bg-[#6FA03D] text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-2xl mb-4 text-black">Residents</h3>
              <p className="text-black mb-4 flex-grow">
                Download the HIBRID GO App and create your account. You'll receive notifications when pick starts and be able to request real time "return request if trash is ever miss – Say good bye to missed PICK UPS!
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center flex flex-col">
              <div className="bg-[#6FA03D] text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-2xl mb-4 text-black">Property Managers</h3>
              <p className="text-black mb-4 flex-grow">
                Easy access to nightly violation reports, geo tagged proof of service and request bulk junk removal in one place.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center flex flex-col">
              <div className="bg-[#6FA03D] text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-2xl mb-4 text-black">Seamless Service</h3>
              <p className="text-black mb-4 flex-grow">
                Our porters collect trash from each door and manage disposal. Everyone stays informed through automated notifications and real-time updates.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-[#7FB54C] p-8 rounded-lg shadow-md inline-block">
              <h3 className="text-2xl mb-4 text-black">Ready to Get Started?</h3>
              <p className="text-lg text-black mb-6 max-w-2xl">
                Download our apps, access the portal, or contact us to experience hassle-free valet trash service management for your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/property-management#residential-app"
                  className="inline-block bg-[#6FA03D] text-black px-8 py-3 rounded-lg hover:bg-[#5F8A33] transition-colors font-semibold"
                >
                  HIBRID GO App
                </Link>
                <Link
                  to="/property-management#onsite-portal"
                  className="inline-block bg-[#6FA03D] text-black px-8 py-3 rounded-lg hover:bg-[#5F8A33] transition-colors font-semibold"
                >
                  Property Portal
                </Link>
                <Link
                  to="/resident"
                  className="inline-block bg-[#6FA03D] text-black px-8 py-3 rounded-lg hover:bg-[#5F8A33] transition-colors font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#7FB54C]" id="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Choose HIBRID</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              OUR tech brings transparency and proof to valet trash go back to living and let us worry about the trash
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-xl mb-2">Technology</h3>
              <p className="text-black">
                Smart phone widget - Residents are notified and can request call backs when we are onsite
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-xl mb-2">Transparency</h3>
              <p className="text-black">
                No more wonder when service will begin tenants receive real time updates when service starts and before ending
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-xl mb-2">Easy Access</h3>
              <p className="text-black">
                Dashboard for onsite Property mangers. Geotagged proof of service violation reports and easy bulk pick up request
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-[#7FB54C]" id="our-partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Partners</h2>
          </div>

          <Slider {...carouselSettings}>
            {partnerLogos.map((logo, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md flex items-center justify-center h-40">
                  <img src={logo.src} alt={logo.alt} className="max-w-[80%] max-h-[120px] h-auto object-contain" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-started" className="py-20 bg-[#7FB54C] text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Contact Us</h2>
          <p className="text-xl mb-8">
            Have questions? Contact us today to learn how Hibrid Trash Solutions can simplify waste management for your property.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-[#6FA03D] text-black px-8 py-3 rounded-lg hover:bg-[#5F8A33] transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}