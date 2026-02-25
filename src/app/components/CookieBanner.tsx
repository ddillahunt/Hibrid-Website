import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-white border-2 border-[#7FB54C] rounded-2xl shadow-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex p-2 bg-[#7FB54C] rounded-xl shrink-0">
            <Cookie className="size-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-[#00374F] font-bold text-lg mb-1">We Use Cookies</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use cookies to enhance your browsing experience and remember your preferences.
              By clicking "Accept", you consent to our use of cookies. Read our{" "}
              <Link to="/privacy" className="text-[#7FB54C] hover:text-[#6FA03D] underline transition-colors">
                Privacy Policy
              </Link>{" "}
              to learn more.
            </p>
          </div>
          <button onClick={handleDecline} className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
            <X className="size-5" />
          </button>
        </div>
        <div className="flex gap-3 mt-4 justify-end">
          <button
            onClick={handleDecline}
            className="px-5 py-2 text-sm font-medium text-[#00374F] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-sm font-bold text-white bg-[#7FB54C] hover:bg-[#6FA03D] rounded-lg shadow-md transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
