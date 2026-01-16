export interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
  link: string;
}

export const speakers = {
  keynote: [      //Bucket 2
        {
      id: 1,
      name: "Mr. Tejaswi V",
      role: "DGM - Sales, Terumo India",
      image: "/speakers/tejaswi.png",
      link: "https://www.linkedin.com/in/tejaswi-v-a1508411",
    },
    {
      id: 2,
      name: "Mr. Rajshekhar Rao	",
      role: "Business Head, Stryker",
      image: "/speakers/rajshekhar.jpg",
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
      name: "Navneet S Tewatia",
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
      role: "Founder, Director & CEO, Healthy Basket Pharmacy",
      image: "/speakers/hareshh.jpg",
      link: "https://www.linkedin.com/in/hareshh",
    },
  ] as Speaker[],

  specialPerformers: [  //Bucket 4
    {
      id: 1,
      name: "Megha Choubey",
      role: "Manager Business Compliance",
      image: "/speakers/megha.png",
      link: "https://www.linkedin.com/in/megha-choubey-56a3a73a/",
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
      image: "/speakers/mihir.jpg",
      link: "https://www.linkedin.com/in/mihir-pujara-2a993528/",
    },
  ] as Speaker[],
};
