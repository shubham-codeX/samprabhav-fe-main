import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function FooterPage() {
  return (
    <footer className="bg-[#3b2c7f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Column - About + Logo + Social */}
        <div className="sm:space-y-1 md:col-span-2 md:-mt-5">
          {/* Logo + Title */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4">
            <Image
              src="/f.png"
              alt="Samprav Logo"
              width={400}
              height={200}
              // fill
              className="object-contain w-full sm:w-40 md:w-50 lg:w-74"
            />
          </div>
          {/* Description */}
          <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-l px-2 sm:px-0 lg:mt-6 sm:mt-4 md:mt-6">
            <span className="text-md sm:text-md md:text-md font-bold text-yellow-400 text-center sm:text-left mr-2">
              Samprabhav - Union of Magnates
            </span>
            A national-level pharmaceutical colloquium organized by the students
            of the Department of Pharmaceutical Management (DOPM) as part of its
            longstanding annual tradition. The colloquium serves as a dynamic
            platform that brings together leading pharmaceutical professionals
            from across the country to engage in meaningful dialogue, exchange
            perspectives, and foster new professional collaborations.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-2">
            <a
              href="https://www.instagram.com/dopm_niper_m?igsh=MWJuNWVkdmNuc25qag%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white rounded-full p-2 flex items-center justify-center hover:scale-110 transition">
                <FaInstagram className="w-4 h-4 text-[#3b2c7f]" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/school/dopm-niper-sasnagar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white rounded-full p-2 flex items-center justify-center hover:scale-110 transition">
                <FaLinkedinIn className="w-4 h-4 text-[#3b2c7f]" />
              </div>
            </a>

            <a
              href="https://www.facebook.com/81mg.niper?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white rounded-full p-2 flex items-center justify-center hover:scale-110 transition">
                <FaFacebookF className="w-4 h-4 text-[#3b2c7f]" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column - Contact */}
        <div className="text-center md:text-left text-xs sm:text-sm space-y-6 sm:space-y-8 md:space-y-10 md:pt-0 pt-6">
          <h3 className="text-yellow-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            Contact Us
            <p className="text-gray-200 text-xs">
              [ Mon - Fri: 09:00 - 18:00 ]
            </p>
          </h3>

          <ul className="space-y-2 sm:space-y-3 text-gray-200">
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span>📧</span>
              <span className="break-all">reg.samprabhav2026@gmail.com</span>
            </li>

            <li className="flex items-start justify-center md:justify-start gap-2">
              <span>📞</span>
              <span>Mehak Kanojia: +91 8700408317</span>
            </li>

            <li className="flex items-start justify-center md:justify-start gap-2">
              <span>📞</span>
              <span>Nikhil Sharma: +91 8492864618</span>
            </li>

            <li className="flex items-start justify-center md:justify-start gap-2">
              <span>📍</span>
              <span>
                Department of Pharmaceutical Management,
                <br />
                NIPER-Mohali, Sector-67,
                <br />
                S.A.S. Nagar (Mohali)-160062,
                <br />
                Punjab, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#5c4e9f] text-gray-400 text-xs sm:text-sm text-center py-3 sm:py-4 px-4">
        © 2026 SAMPRABHAV. All rights reserved.
        <span className="block sm:inline sm:ml-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-yellow-400 transition">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-yellow-400 transition">
            Terms of Service
          </a>
        </span>
      </div>
    </footer>
  );
}