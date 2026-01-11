export default function FooterPage() {
  return (
    <footer className="bg-[#3b2c7f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column - About + Social */}
        <div className="space-y-4 md:col-span-2">
          <h2 className="text-2xl font-bold text-yellow-400">
            Samprabhav – Union of Magnates
          </h2>

          <p className="text-gray-200 text-sm leading-relaxed">
            A national-level pharmaceutical colloquium organized by the students of the
            Department of Pharmaceutical Management (DOPM) as part of its longstanding
            annual tradition. The colloquium serves as a dynamic platform that brings
            together leading pharmaceutical professionals from across the country to
            engage in meaningful dialogue, exchange perspectives, and foster new
            professional collaborations.
          </p>
        </div>

        {/* Right Column - Contact */}
        <div className="md:text-left text-sm">
          <h3 className="text-yellow-400 font-semibold mb-4 text-base">
            Contact Us <p className="text-gray-200 text-xs">[ Mon - Fri: 09:00 - 18:00 ]</p>
          </h3>

          <ul className="space-y-3 text-gray-200">
            {/* Email */}
            <li className="flex items-start gap-2">
              <span>📧</span>
              <span>reg.samprabhav2026@gmail.com</span>
            </li>

            {/* Phone Numbers (each on new line) */}
            <li className="flex items-start gap-2">
              <span>📞</span>
              <span>
                Mehak Kanojia: +91 8700408317
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span>📞</span>
              <span>
                Nikhil Sharma: +91 8492864618
              </span>
            </li>

            {/* Location */}
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>
                Department of Pharmaceutical Management,<br />
                NIPER-Mohali, Sector-67,<br />
                S.A.S. Nagar (Mohali)-160062,<br />
                Punjab, India
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-[#5c4e9f] text-gray-400 text-sm text-center py-4">
        © 2026 SAMPRABHAV. All rights reserved.
        <span className="ml-4">
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
