import Image from "next/image";

export default function FooterPage() {
  return (
    <footer className="bg-[#3b2c7f] text-white">
      <div className="max-w-7xl mx-auto px-0 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Column - About + Logo + Social */}
        <div className="space-y-1 md:col-span-2 -mt-5 px-4">

          {/* Logo + Title */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Samprav Logo"
              width={180}
              height={180}
              className="object-contain"
            />

            <h2 className="text-2xl font-bold text-yellow-400">
              Samprabhav – Union of Magnates
            </h2>
          </div>

          <p className="text-gray-200 text-sm leading-relaxed max-w-l">
            A national-level pharmaceutical colloquium organized by the students of the
            Department of Pharmaceutical Management (DOPM) as part of its longstanding
            annual tradition. The colloquium serves as a dynamic platform that brings
            together leading pharmaceutical professionals from across the country to
            engage in meaningful dialogue, exchange perspectives, and foster new
            professional collaborations.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.instagram.com/dopm_niper_m?igsh=MWJuNWVkdmNuc25qag%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/insta.png"
                alt="Instagram"
                width={28}
                height={28}
                className="hover:scale-110 transition"
              />
            </a>

            <a
              href="https://www.linkedin.com/school/dopm-niper-sasnagar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={28}
                height={28}
                className="hover:scale-110 transition"
              />
            </a>

            <a
              href="https://www.facebook.com/81mg.niper?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/fb.png"
                alt="Facebook"
                width={28}
                height={28}
                className="hover:scale-110 transition"
              />
            </a>
          </div>
        </div>

        {/* Right Column - Contact */}
        <div className="md:text-left text-sm space-y-10 md:pt-0 pt-8 px-4">
          <h3 className="text-yellow-400 font-semibold mb-4 text-base">
            Contact Us
            <p className="text-gray-200 text-xs">
              [ Mon - Fri: 09:00 - 18:00 ]
            </p>
          </h3>

          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-2">
              <span>📧</span>
              <span>reg.samprabhav2026@gmail.com</span>
            </li>

            <li className="flex items-start gap-2">
              <span>📞</span>
              <span>Mehak Kanojia: +91 8700408317</span>
            </li>

            <li className="flex items-start gap-2">
              <span>📞</span>
              <span>Nikhil Sharma: +91 8492864618</span>
            </li>

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

      {/* Bottom */}
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
