export interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
  link: string;
}

export const speakers = {
  /* ================== TOP ROLES ================== */

  chiefGuest: [
    {
      id: 1,
      name: "Mr. Satish Khanna",
      role: "Founder of Fullife Healthcare Pvt. Ltd., Investor & Former Group President, Lupin Ltd.",
      image: "/speakers/satish.png",
      link: "https://www.linkedin.com/in/satish-khanna-599b78",
    },
  ] as Speaker[],

  guestOfHonor: [
    {
      id: 1,
      name: "Mr. Gagann Atreja",
      role: "President - Operations, Eris Lifesciences",
      image: "/speakers/gagan.png",
      link: "https://www.linkedin.com/in/gagann-atreja-774ba22a",
    },
  ] as Speaker[],

  chairPerson: [
    {
      id: 1,
      name: "Dr. Vijay Charlu",
      role: "President - India Business, CORONA Remedies",
      image: "/speakers/vijay.jpg",
      link: "https://www.linkedin.com/in/vijaycharlu?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqzPu2bkGSHiDVgXTNzylkw%3D%3D",
    },
  ] as Speaker[],

  keynote: [      //Bucket 2
        {
      id: 1,
      name: "Mr. Aditya Kumar Khanna",
      role: "Executive Vice President & Head of Global Alliances, Commercial, Marketing & PMO - Biologics, Dr. Reddy's Laboratories Ltd.",
      image: "/speakers/aditya.png",
      link: "https://www.linkedin.com/in/khannaaditya",
    },
    {
      id: 2,
      name: "Mr. Rajshekhar Rao	",
      role: "Business Head, Stryker",
      image: "/speakers/rajshekhar1.jpg",
      link: "https://www.linkedin.com/in/rajshekhar-rao-b31405b5/",
    },
  ] as Speaker[],

  workshop: [   //Bucket 1

        {
      id: 1,
      name: "Mr. Varun Arora",
      role: "Principal Consultant, Agilisium Consulting",
      image: "/speakers/varun.png",
      link: "https://www.linkedin.com/in/varun-arora-pmp%C2%AE-cbap-b0047925/",
    },
    {
      id: 2,
      name: "Mr. Navneet S Tewatia",
      role: "Lead Consultant - Policy & Advocacy, Medicines Patent Pool",
      image: "/speakers/navneet.png",
      link: "https://www.linkedin.com/in/navneet-s-tewatia-492b116/",
    },
  ] as Speaker[],

  judgesMentors: [  //Bucket 3
    {
      id: 1,
      name: "Dr. Someshwar Komuravelly",
      role: "Co-Founder and CDO at OrciMed Life Sciences",
      image: "/speakers/someshwar.png",
      link: "https://www.linkedin.com/in/dr-someshwar-komuravelly-a20ab71b8/",
    },
    {
      id: 2,
      name: "Mr. Hareshh Ratwani",
      role: "SBU Head - Emerging Pharma Markets/ROW, Esmero Research Pvt. Ltd.",
      image: "/speakers/haresh.png",
      link: "https://www.linkedin.com/in/hareshh",
    },
  ] as Speaker[],

  specialPerformers: [  //Bucket 4
    {
      id: 1,
      name: "Mrs. Megha Choubey",
      role: "Manager Business Compliance, Abbott",
      image: "/speakers/megha1.png",
      link: "https://www.linkedin.com/in/megha-choubey-56a3a73a/",
    },
    {
      id: 2,
      name: "Mr. Tejaswi V",
      role: "DGM - Sales, Terumo India",
      image: "/speakers/tejaswi.png",
      link: "https://www.linkedin.com/in/tejaswi-v-a1508411",
    },

  ] as Speaker[],

  industryExperts: [  //Bucket 5
    {
      id: 1,
      name: "Mr. Himanshu Sehgal",
      role: "Director-Project Delivery, Octavus Consulting",
      image: "/speakers/himanshu.png",
      link: "https://www.linkedin.com/in/himanshusehgalpharmaci/",
    },
    {
      id: 2,
      name: "Mr. Abhisek Hiteshi Arora",
      role: "Project Leader, BCG",
      image: "/speakers/abhisek.png",
      link: "https://www.linkedin.com/in/link2abhiarora/",
    },
    {
      id: 3,
      name: "Mr. Mihir Pujara",
      role: "Associate Director, AdametNext",
      image: "/speakers/mihir2.jpg",
      link: "https://www.linkedin.com/in/mihir-pujara-2a993528/",
    },
  ] as Speaker[],
};
