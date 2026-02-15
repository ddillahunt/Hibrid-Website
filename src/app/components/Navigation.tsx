import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
const logo = `${import.meta.env.BASE_URL}assets/hibrid-new-logo.png`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [porterDropdownOpen, setPorterDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [propertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
  const [residentDropdownOpen, setResidentDropdownOpen] = useState(false);
  const [homeDropdownLocked, setHomeDropdownLocked] = useState(false);
  const [servicesDropdownLocked, setServicesDropdownLocked] = useState(false);
  const [porterDropdownLocked, setPorterDropdownLocked] = useState(false);
  const [aboutDropdownLocked, setAboutDropdownLocked] = useState(false);
  const [contactDropdownLocked, setContactDropdownLocked] = useState(false);
  const [propertyDropdownLocked, setPropertyDropdownLocked] = useState(false);
  const [residentDropdownLocked, setResidentDropdownLocked] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePorterOpen, setMobilePorterOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [mobilePropertyOpen, setMobilePropertyOpen] = useState(false);
  const [mobileResidentOpen, setMobileResidentOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const homeDropdownLinks = [
    { id: 'why-choose', label: 'Why Choose Hibrid' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'our-partners', label: 'Our Partners' },
    { id: 'get-started', label: 'Ready to Get Started?' },
  ];

  const servicesDropdownLinks = [
    { id: 'main-services', label: 'Main Services' },
    { id: 'service-details', label: 'Service Details' },
    { id: 'special-note', label: 'Special Note' },
  ];

  const porterDropdownLinks = [
    { id: 'why-work', label: 'Why Work With Us?' },
  ];

  const aboutDropdownLinks = [
    { id: 'our-story', label: 'Our Story' },
    { id: 'our-values', label: 'Our Values' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  const contactDropdownLinks = [
    { id: 'get-in-touch', label: 'Get In Touch' },
    { id: 'faq', label: 'FAQ' },
  ];

  const propertyDropdownLinks = [
    { id: 'residential-app', label: 'HIBRID GO App' },
    { id: 'onsite-portal', label: 'Onsite Client Portal' },
    { id: 'bulk-pickup', label: 'Bulk Pickup/Junk Out', isRoute: true },
  ];

  const residentDropdownLinks = [
    { id: 'download-app', label: 'Download The HIBRID GO App' },
    { id: 'submit-request', label: 'Submit a Request' },
    { id: 'how-to-use', label: 'How to use Valet Trash' },
  ];

  const handleSectionNav = (sectionId: string) => {
    window.location.href = `/Hibrid-Website/#${sectionId}`;
    setHomeDropdownOpen(false);
    setHomeDropdownLocked(false);
  };

  const handleServicesNav = (sectionId: string) => {
    window.location.href = `/Hibrid-Website/services#${sectionId}`;
    setServicesDropdownOpen(false);
    setServicesDropdownLocked(false);
  };

  const handlePorterNav = (sectionId: string) => {
    window.location.href = `/Hibrid-Website/become-porter#${sectionId}`;
    setPorterDropdownOpen(false);
    setPorterDropdownLocked(false);
  };

  const handleAboutNav = (sectionId: string) => {
    window.location.href = `/Hibrid-Website/about#${sectionId}`;
    setAboutDropdownOpen(false);
    setAboutDropdownLocked(false);
  };

  const handleContactNav = (sectionId: string) => {
    window.location.href = `/Hibrid-Website/contact#${sectionId}`;
    setContactDropdownOpen(false);
    setContactDropdownLocked(false);
  };

  const handlePropertyNav = (sectionId: string) => {
    window.location.href = `/Hibrid-Website/property-management#${sectionId}`;
    setPropertyDropdownOpen(false);
    setPropertyDropdownLocked(false);
  };

  const handleResidentNav = (sectionId: string) => {
    window.location.href = `/Hibrid-Website/resident#${sectionId}`;
    setResidentDropdownOpen(false);
    setResidentDropdownLocked(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/property-management', label: 'Property Management' },
    { path: '/resident', label: 'Resident' },
    { path: '/become-porter', label: 'Become a Porter' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Hibrid Trash Solutions" className="h-12 scale-x-110" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              if (link.path === '/') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => {
                      setHomeDropdownOpen(true);
                      setHomeDropdownLocked(false);
                    }}
                    onMouseLeave={() => {
                      if (!homeDropdownLocked) {
                        setHomeDropdownOpen(false);
                      }
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                    
                    {homeDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-[#E5F8ED] shadow-lg rounded-md py-2 min-w-[280px] border border-gray-200 max-h-[250px] overflow-y-auto"
                        onMouseEnter={() => {
                          setHomeDropdownOpen(true);
                          setHomeDropdownLocked(false);
                        }}
                        onMouseLeave={() => {
                          if (!homeDropdownLocked) {
                            setHomeDropdownOpen(false);
                          }
                        }}
                      >
                        {homeDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => handleSectionNav(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-[#00374F] hover:bg-gray-100 hover:text-gray-600 transition-colors"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/services') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => {
                      setServicesDropdownOpen(true);
                      setServicesDropdownLocked(false);
                    }}
                    onMouseLeave={() => {
                      if (!servicesDropdownLocked) {
                        setServicesDropdownOpen(false);
                      }
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                    
                    {servicesDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-[#E5F8ED] shadow-lg rounded-md py-2 min-w-[200px] border border-gray-200 max-h-[400px] overflow-y-auto"
                        onMouseEnter={() => {
                          setServicesDropdownOpen(true);
                          setServicesDropdownLocked(false);
                        }}
                        onMouseLeave={() => {
                          if (!servicesDropdownLocked) {
                            setServicesDropdownOpen(false);
                          }
                        }}
                      >
                        {servicesDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => handleServicesNav(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-[#00374F] hover:bg-gray-100 hover:text-gray-600 transition-colors"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/become-porter') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => {
                      setPorterDropdownOpen(true);
                      setPorterDropdownLocked(false);
                    }}
                    onMouseLeave={() => {
                      if (!porterDropdownLocked) {
                        setPorterDropdownOpen(false);
                      }
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                    
                    {porterDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-[#E5F8ED] shadow-lg rounded-md py-2 min-w-[200px] border border-gray-200 max-h-[400px] overflow-y-auto"
                        onMouseEnter={() => {
                          setPorterDropdownOpen(true);
                          setPorterDropdownLocked(false);
                        }}
                        onMouseLeave={() => {
                          if (!porterDropdownLocked) {
                            setPorterDropdownOpen(false);
                          }
                        }}
                      >
                        {porterDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => handlePorterNav(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-[#00374F] hover:bg-gray-100 hover:text-gray-600 transition-colors"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/about') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => {
                      setAboutDropdownOpen(true);
                      setAboutDropdownLocked(false);
                    }}
                    onMouseLeave={() => {
                      if (!aboutDropdownLocked) {
                        setAboutDropdownOpen(false);
                      }
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                    
                    {aboutDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-[#E5F8ED] shadow-lg rounded-md py-2 min-w-[200px] border border-gray-200 max-h-[400px] overflow-y-auto"
                        onMouseEnter={() => {
                          setAboutDropdownOpen(true);
                          setAboutDropdownLocked(false);
                        }}
                        onMouseLeave={() => {
                          if (!aboutDropdownLocked) {
                            setAboutDropdownOpen(false);
                          }
                        }}
                      >
                        {aboutDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => handleAboutNav(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-[#00374F] hover:bg-gray-100 hover:text-gray-600 transition-colors"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/contact') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => {
                      setContactDropdownOpen(true);
                      setContactDropdownLocked(false);
                    }}
                    onMouseLeave={() => {
                      if (!contactDropdownLocked) {
                        setContactDropdownOpen(false);
                      }
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                    
                    {contactDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-[#E5F8ED] shadow-lg rounded-md py-2 min-w-[200px] border border-gray-200 max-h-[400px] overflow-y-auto"
                        onMouseEnter={() => {
                          setContactDropdownOpen(true);
                          setContactDropdownLocked(false);
                        }}
                        onMouseLeave={() => {
                          if (!contactDropdownLocked) {
                            setContactDropdownOpen(false);
                          }
                        }}
                      >
                        {contactDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => handleContactNav(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-[#00374F] hover:bg-gray-100 hover:text-gray-600 transition-colors"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/property-management') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => {
                      setPropertyDropdownOpen(true);
                      setPropertyDropdownLocked(false);
                    }}
                    onMouseLeave={() => {
                      if (!propertyDropdownLocked) {
                        setPropertyDropdownOpen(false);
                      }
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                    
                    {propertyDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-[#E5F8ED] shadow-lg rounded-md py-2 min-w-[200px] border border-gray-200 max-h-[400px] overflow-y-auto"
                        onMouseEnter={() => {
                          setPropertyDropdownOpen(true);
                          setPropertyDropdownLocked(false);
                        }}
                        onMouseLeave={() => {
                          if (!propertyDropdownLocked) {
                            setPropertyDropdownOpen(false);
                          }
                        }}
                      >
                        {propertyDropdownLinks.map((dropdownLink) => (
                          dropdownLink.isRoute ? (
                            <Link
                              key={dropdownLink.id}
                              to={`/${dropdownLink.id}`}
                              onClick={() => {
                                setPropertyDropdownOpen(false);
                                setPropertyDropdownLocked(false);
                              }}
                              className="block w-full text-left px-4 py-2 text-[#00374F] font-medium hover:bg-gray-100 hover:text-gray-600 transition-colors"
                            >
                              {dropdownLink.label}
                            </Link>
                          ) : (
                            <button
                              key={dropdownLink.id}
                              onClick={() => handlePropertyNav(dropdownLink.id)}
                              className="block w-full text-left px-4 py-2 text-[#00374F] hover:bg-gray-100 hover:text-gray-600 transition-colors"
                            >
                              {dropdownLink.label}
                            </button>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/resident') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => {
                      setResidentDropdownOpen(true);
                      setResidentDropdownLocked(false);
                    }}
                    onMouseLeave={() => {
                      if (!residentDropdownLocked) {
                        setResidentDropdownOpen(false);
                      }
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                    
                    {residentDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-[#E5F8ED] shadow-lg rounded-md py-2 min-w-[200px] border border-gray-200 max-h-[400px] overflow-y-auto"
                        onMouseEnter={() => {
                          setResidentDropdownOpen(true);
                          setResidentDropdownLocked(false);
                        }}
                        onMouseLeave={() => {
                          if (!residentDropdownLocked) {
                            setResidentDropdownOpen(false);
                          }
                        }}
                      >
                        {residentDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => handleResidentNav(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-[#00374F] hover:bg-gray-100 hover:text-gray-600 transition-colors"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive(link.path)
                      ? 'text-[#00374F]'
                      : 'text-[#00374F] hover:text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#00374F] hover:text-gray-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => {
              if (link.path === '/') {
                return (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md mb-1 ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileHomeOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Home dropdown items in mobile */}
                    {mobileHomeOpen && (
                      <div className="ml-4 mt-1 mb-2">
                        {homeDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => {
                              handleSectionNav(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-[#00374F] hover:text-gray-600 hover:bg-gray-100 rounded-md"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/services') {
                return (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md mb-1 ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Services dropdown items in mobile */}
                    {mobileServicesOpen && (
                      <div className="ml-4 mt-1 mb-2">
                        {servicesDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => {
                              handleServicesNav(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-[#00374F] hover:text-gray-600 hover:bg-gray-100 rounded-md"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/become-porter') {
                return (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobilePorterOpen(!mobilePorterOpen)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md mb-1 ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobilePorterOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Porter dropdown items in mobile */}
                    {mobilePorterOpen && (
                      <div className="ml-4 mt-1 mb-2">
                        {porterDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => {
                              handlePorterNav(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-[#00374F] hover:text-gray-600 hover:bg-gray-100 rounded-md"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/about') {
                return (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md mb-1 ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* About dropdown items in mobile */}
                    {mobileAboutOpen && (
                      <div className="ml-4 mt-1 mb-2">
                        {aboutDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => {
                              handleAboutNav(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-[#00374F] hover:text-gray-600 hover:bg-gray-100 rounded-md"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/contact') {
                return (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobileContactOpen(!mobileContactOpen)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md mb-1 ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileContactOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Contact dropdown items in mobile */}
                    {mobileContactOpen && (
                      <div className="ml-4 mt-1 mb-2">
                        {contactDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => {
                              handleContactNav(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-[#00374F] hover:text-gray-600 hover:bg-gray-100 rounded-md"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/property-management') {
                return (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobilePropertyOpen(!mobilePropertyOpen)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md mb-1 ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobilePropertyOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Property dropdown items in mobile */}
                    {mobilePropertyOpen && (
                      <div className="ml-4 mt-1 mb-2">
                        {propertyDropdownLinks.map((dropdownLink) => (
                          dropdownLink.isRoute ? (
                            <Link
                              key={dropdownLink.id}
                              to={`/${dropdownLink.id}`}
                              onClick={() => {
                                setMobilePropertyOpen(false);
                                setIsOpen(false);
                              }}
                              className="block w-full text-left px-3 py-2 text-sm text-[#00374F] hover:text-gray-600 hover:bg-gray-100 rounded-md"
                            >
                              {dropdownLink.label}
                            </Link>
                          ) : (
                            <button
                              key={dropdownLink.id}
                              onClick={() => {
                                handlePropertyNav(dropdownLink.id);
                                setIsOpen(false);
                              }}
                              className="block w-full text-left px-3 py-2 text-sm text-[#00374F] hover:text-gray-600 hover:bg-gray-100 rounded-md"
                            >
                              {dropdownLink.label}
                            </button>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path === '/resident') {
                return (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobileResidentOpen(!mobileResidentOpen)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md mb-1 ${
                        isActive(link.path)
                          ? 'text-[#00374F]'
                          : 'text-[#00374F] hover:text-gray-600'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileResidentOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Resident dropdown items in mobile */}
                    {mobileResidentOpen && (
                      <div className="ml-4 mt-1 mb-2">
                        {residentDropdownLinks.map((dropdownLink) => (
                          <button
                            key={dropdownLink.id}
                            onClick={() => {
                              handleResidentNav(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-[#00374F] hover:text-gray-600 hover:bg-gray-100 rounded-md"
                          >
                            {dropdownLink.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md mb-1 ${
                    isActive(link.path)
                      ? 'text-[#00374F]'
                      : 'text-[#00374F] hover:text-gray-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}