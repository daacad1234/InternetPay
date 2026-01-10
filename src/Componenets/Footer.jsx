import { Link } from "react-router-dom";
import {
  Wifi,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

function Footer() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300">
      <div className="px-4 sm:px-6 md:px-10 lg:px-50 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="text-blue-500" />
              <h2 className="text-white text-xl font-semibold">
                InternetPay
              </h2>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Your convenient solution for managing and paying internet bills online.
              Fast, secure, and hassle-free.
            </p>

            <div className="flex gap-4 text-gray-400">
              <Facebook size={18} className="hover:text-white cursor-pointer" />
              <Twitter size={18} className="hover:text-white cursor-pointer" />
              <Instagram size={18} className="hover:text-white cursor-pointer" />
              <Linkedin size={18} className="hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/login" className="hover:text-white">Login</Link></li>
              <li><Link to="/register" className="hover:text-white">Register</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/report" className="hover:text-white">Report an Issue</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>

            <div className="flex gap-3 mb-4 text-sm">
              <Mail className="text-blue-500" size={18} />
              <span>support@internetpay.com</span>
            </div>

            <div className="flex gap-3 mb-4 text-sm">
              <Phone className="text-blue-500" size={18} />
              <span>1-800-INTERNET</span>
            </div>

            <div className="flex gap-3 text-sm">
              <MapPin className="text-blue-500" size={18} />
              <span>
                123 Tech Street <br />
                Silicon Valley, CA 94000
              </span>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-800 my-10"></div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between text-sm">
          <p>© 2026 InternetPay. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy PolicyiSolicy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Footer;
