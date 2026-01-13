export interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
  icon: string;
  link: string;
}

export const speakers = {
  keynote: [      //Bucket 2
        {
      id: 1,
      name: "Mr. Tejaswi V",
      role: "DGM - Sales, Terumo India",
      image: "/speakers/photography-expert-woman.jpg",
      icon: "building",
      link: "https://www.linkedin.com/in/tejaswi-v-a1508411",
    },
    {
      id: 2,
      name: "Mr. Rajshekhar Rao	",
      role: "Business Head, Stryker",
      image: "/speakers/RajshekharRao.jpg",
      icon: "building",
      link: "https://www.linkedin.com/in/rajshekhar-rao-b31405b5/",
    },
  ] as Speaker[],

  workshop: [   //Bucket 1

        {
      id: 1,
      name: "NA1",
      role: "Cultural Anthropologist",
      image: "/speakers/cultural-anthropologist-woman.jpg",
      icon: "mic",
      link: "",
    },
    {
      id: 2,
      name: "NA2",
      role: "Innovation Leader",
      image: "/speakers/innovation-leader-man.jpg",
      icon: "mic",
      link: "",
    },
    {
      id: 3,
      name: "NA3",
      role: "Innovation Leader",
      image: "/speakers/innovation-leader-man.jpg",
      icon: "mic",
      link: "",
    },
  ] as Speaker[],

  judgesMentors: [  //Bucket 3
    {
      id: 1,
      name: "Dr. Someshwar Komuravelly",
      role: "Co-Founder and CDO at OrciMed Life Sciences",
      image: "/speakers/DrSomeshwarKomuravelly.jpg",
      icon: "mic",
      link: "https://www.linkedin.com/in/dr-someshwar-komuravelly-a20ab71b8/",
    },
    {
      id: 2,
      name: "Mr. Hareshh Ratwani",
      role: "Founder, Director & CEO, Healthy Basket Pharmacy",
      image: "/speakers/MrHareshhRatwani.jpg",
      icon: "mic",
      link: "https://www.linkedin.com/in/hareshh",
    },
  ] as Speaker[],

  specialPerformers: [  //Bucket 4
    {
      id: 1,
      name: "Megha Choubey",
      role: "Manager Business Compliance",
      image: "/speakers/MeghaChoubey.jpg",
      icon: "mic",
      link: "https://www.linkedin.com/in/megha-choubey-56a3a73a/",
    },

  ] as Speaker[],

  industryExperts: [  //Bucket 5
    {
      id: 1,
      name: "Mr. Himanshu Sehgal",
      role: "Director-Project Delivery, Octavus Consulting",
      image: "/speakers/MrHimanshuSehgal.jpg",
      icon: "mic",
      link: "https://www.linkedin.com/in/himanshusehgalpharmaci/",
    },
    {
      id: 2,
      name: "Mr. Abhisek Hiteshi Arora",
      role: "Project Leader, BCG",
      image: "/speakers/MrAbhisekHiteshiArora.jpg",
      icon: "mic",
      link: "https://www.linkedin.com/in/link2abhiarora/",
    },
  ] as Speaker[],
};
