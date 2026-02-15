import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
const logo = `${import.meta.env.BASE_URL}assets/hibrid-logo.png`;

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

  const handleSectionScroll = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll
      window.location.href = `/Hibrid-Website/#${sectionId}`;
    } else {
      // Already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
    // Close dropdown after selection
    setHomeDropdownOpen(false);
    setHomeDropdownLocked(false);
  };

  const handleServicesScroll = (sectionId: string) => {
    if (location.pathname !== '/services') {
      // Navigate to services first, then scroll
      window.location.href = `/Hibrid-Website/services#${sectionId}`;
    } else {
      // Already on services, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
    // Close dropdown after selection
    setServicesDropdownOpen(false);
    setServicesDropdownLocked(false);
  };

  const handlePorterScroll = (sectionId: string) => {
    if (location.pathname !== '/become-porter') {
      // Navigate to become-porter first, then scroll
      window.location.href = `/Hibrid-Website/become-porter#${sectionId}`;
    } else {
      // Already on become-porter, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
    // Close dropdown after selection
    setPorterDropdownOpen(false);
    setPorterDropdownLocked(false);
  };

  const handleAboutScroll = (sectionId: string) => {
    if (location.pathname !== '/about') {
      // Navigate to about first, then scroll
      window.location.href = `/Hibrid-Website/about#${sectionId}`;
    } else {
      // Already on about, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
    // Close dropdown after selection
    setAboutDropdownOpen(false);
    setAboutDropdownLocked(false);
  };

  const handleContactScroll = (sectionId: string) => {
    if (location.pathname !== '/contact') {
      // Navigate to contact first, then scroll
      window.location.href = `/Hibrid-Website/contact#${sectionId}`;
    } else {
      // Already on contact, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
    // Close dropdown after selection
    setContactDropdownOpen(false);
    setContactDropdownLocked(false);
  };

  const handlePropertyScroll = (sectionId: string) => {
    if (location.pathname !== '/property-management') {
      // Navigate to property-management first, then scroll
      window.location.href = `/Hibrid-Website/property-management#${sectionId}`;
    } else {
      // Already on property-management, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
    // Close dropdown after selection
    setPropertyDropdownOpen(false);
    setPropertyDropdownLocked(false);
  };

  const handleResidentScroll = (sectionId: string) => {
    if (location.pathname !== '/resident') {
      // Navigate to resident first, then scroll
      window.location.href = `/Hibrid-Website/resident#${sectionId}`;
    } else {
      // Already on resident, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
    // Close dropdown after selection
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
                          ? 'text-black bg-[#5F8A33]'
                          : 'text-black bg-[#6FA03D] hover:bg-[#5F8A33]'
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
                            onClick={() => handleSectionScroll(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-black hover:bg-[#6FA03D] hover:text-white transition-colors"
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
                          ? 'text-black bg-[#5F8A33]'
                          : 'text-black bg-[#6FA03D] hover:bg-[#5F8A33]'
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
                            onClick={() => handleServicesScroll(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-black hover:bg-[#6FA03D] hover:text-white transition-colors"
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
                      onClick={() => window.scrollTo(0, 0)}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-black bg-[#5F8A33]'
                          : 'text-black bg-[#6FA03D] hover:bg-[#5F8A33]'
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
                            onClick={() => handlePorterScroll(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-black hover:bg-[#6FA03D] hover:text-white transition-colors"
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
                          ? 'text-black bg-[#5F8A33]'
                          : 'text-black bg-[#6FA03D] hover:bg-[#5F8A33]'
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
                            onClick={() => handleAboutScroll(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-black hover:bg-[#6FA03D] hover:text-white transition-colors"
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
                      onClick={() => window.scrollTo(0, 0)}
                      className={`px-3 py-2 rounded-md transition-colors ${
                        isActive(link.path)
                          ? 'text-black bg-[#5F8A33]'
                          : 'text-black bg-[#6FA03D] hover:bg-[#5F8A33]'
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
                            onClick={() => handleContactScroll(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-black hover:bg-[#6FA03D] hover:text-white transition-colors"
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
                          ? 'text-black bg-[#5F8A33]'
                          : 'text-black bg-[#6FA03D] hover:bg-[#5F8A33]'
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
                                window.scrollTo(0, 0);
                                setPropertyDropdownOpen(false);
                                setPropertyDropdownLocked(false);
                              }}
                              className="block w-full text-left px-4 py-2 text-black font-medium hover:bg-[#6FA03D] hover:text-white transition-colors"
                            >
                              {dropdownLink.label}
                            </Link>
                          ) : (
                            <button
                              key={dropdownLink.id}
                              onClick={() => handlePropertyScroll(dropdownLink.id)}
                              className="block w-full text-left px-4 py-2 text-black hover:bg-[#6FA03D] hover:text-white transition-colors"
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
                          ? 'text-black bg-[#5F8A33]'
                          : 'text-black bg-[#6FA03D] hover:bg-[#5F8A33]'
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
                            onClick={() => handleResidentScroll(dropdownLink.id)}
                            className="block w-full text-left px-4 py-2 text-black hover:bg-[#6FA03D] hover:text-white transition-colors"
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
                      ? 'text-black bg-[#5F8A33]'
                      : 'text-black bg-[#6FA03D] hover:bg-[#5F8A33]'
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
            className="md:hidden p-2 rounded-md text-white hover:text-white hover:bg-gray-800"
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
                          ? 'bg-[#008F46] text-black'
                          : 'text-black hover:bg-[#008F46]'
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
                              handleSectionScroll(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-black hover:bg-[#008F46] rounded-md"
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
                          ? 'bg-[#008F46] text-black'
                          : 'text-black hover:bg-[#008F46]'
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
                              handleServicesScroll(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-black hover:bg-[#008F46] rounded-md"
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
                          ? 'bg-[#008F46] text-black'
                          : 'text-black hover:bg-[#008F46]'
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
                              handlePorterScroll(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-black hover:bg-[#008F46] rounded-md"
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
                          ? 'bg-[#008F46] text-black'
                          : 'text-black hover:bg-[#008F46]'
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
                              handleAboutScroll(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-black hover:bg-[#008F46] rounded-md"
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
                          ? 'bg-[#008F46] text-black'
                          : 'text-black hover:bg-[#008F46]'
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
                              handleContactScroll(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-black hover:bg-[#008F46] rounded-md"
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
                          ? 'bg-[#008F46] text-black'
                          : 'text-black hover:bg-[#008F46]'
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
                                window.scrollTo(0, 0);
                                setMobilePropertyOpen(false);
                                setIsOpen(false);
                              }}
                              className="block w-full text-left px-3 py-2 text-sm text-black hover:text-black hover:bg-[#008F46] rounded-md"
                            >
                              {dropdownLink.label}
                            </Link>
                          ) : (
                            <button
                              key={dropdownLink.id}
                              onClick={() => {
                                handlePropertyScroll(dropdownLink.id);
                                setIsOpen(false);
                              }}
                              className="block w-full text-left px-3 py-2 text-sm text-black hover:text-black hover:bg-[#008F46] rounded-md"
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
                          ? 'bg-[#008F46] text-black'
                          : 'text-black hover:bg-[#008F46]'
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
                              handleResidentScroll(dropdownLink.id);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-black hover:bg-[#008F46] rounded-md"
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
                      ? 'bg-[#008F46] text-black'
                      : 'text-black hover:bg-[#008F46]'
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