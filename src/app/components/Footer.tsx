import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#7FB54C] text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-black mb-4">Hibrid Trash Solutions</h3>
            <p className="text-sm">
              Professional valet trash pickup services for multifamily communities nationwide.
            </p>
          </div>

          <div>
            <h4 className="text-black mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-black transition-colors" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors" onClick={handleLinkClick}>Services</Link></li>
              <li><Link to="/property-management" className="hover:text-black transition-colors" onClick={handleLinkClick}>Property Management</Link></li>
              <li><Link to="/about" className="hover:text-black transition-colors" onClick={handleLinkClick}>About Us</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors" onClick={handleLinkClick}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black mb-4">For Porters</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/become-porter" className="hover:text-black transition-colors" onClick={handleLinkClick}>Become a Porter</Link></li>
              <li><Link to="/privacy" className="hover:text-black transition-colors" onClick={handleLinkClick}>Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(800) 294-7343</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>admin@hibridsolutions.net</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/20 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Hibrid Trash Solutions. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Powered by <span className="text-black">GDI Digital Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}