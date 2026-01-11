export interface Speaker {
  id: number;
  name: string;
  role: string;
  topic: string;
  image: string;
  icon: string;
}

export const speakers = {
  keynote: [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Cultural Anthropologist",
      topic: "The Evolution of Indian Cultural Heritage",
      image: "/speakers/cultural-anthropologist-woman.jpg",
      icon: "mic",
    },
    {
      id: 2,
      name: "Ravi Krishnan",
      role: "Innovation Leader",
      topic: "Technology Meets Tradition: Future of Arts",
      image: "/speakers/innovation-leader-man.jpg",
      icon: "mic",
    },
  ] as Speaker[],
  workshop: [
    {
      id: 3,
      name: "Anjali Mehta",
      role: "Photography Expert",
      topic: "Visual Storytelling Masterclass",
      image: "/speakers/photography-expert-woman.jpg",
      icon: "building",
    },
    {
      id: 4,
      name: "Vikram Patel",
      role: "Film Director",
      topic: "Cinematic Techniques Workshop",
      image: "/speakers/film-director-man.jpg",
      icon: "building",
    },
    {
      id: 5,
      name: "Neha Kapoor",
      role: "Fashion Designer",
      topic: "Sustainable Fashion & Design Thinking",
      image: "/speakers/fashion-designer-woman.jpg",
      icon: "building",
    },
  ] as Speaker[],
  judgesMentors: [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Cultural Anthropologist",
      topic: "The Evolution of Indian Cultural Heritage",
      image: "/speakers/cultural-anthropologist-woman.jpg",
      icon: "mic",
    },
    {
      id: 2,
      name: "Ravi Krishnan",
      role: "Innovation Leader",
      topic: "Technology Meets Tradition: Future of Arts",
      image: "/speakers/innovation-leader-man.jpg",
      icon: "mic",
    },
  ] as Speaker[],
  specialPerformers: [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Cultural Anthropologist",
      topic: "The Evolution of Indian Cultural Heritage",
      image: "/speakers/cultural-anthropologist-woman.jpg",
      icon: "mic",
    },
    {
      id: 2,
      name: "Ravi Krishnan",
      role: "Innovation Leader",
      topic: "Technology Meets Tradition: Future of Arts",
      image: "/speakers/innovation-leader-man.jpg",
      icon: "mic",
    },
  ] as Speaker[],
  industryExperts: [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Cultural Anthropologist",
      topic: "The Evolution of Indian Cultural Heritage",
      image: "/speakers/cultural-anthropologist-woman.jpg",
      icon: "mic",
    },
    {
      id: 2,
      name: "Ravi Krishnan",
      role: "Innovation Leader",
      topic: "Technology Meets Tradition: Future of Arts",
      image: "/speakers/innovation-leader-man.jpg",
      icon: "mic",
    },
  ] as Speaker[],
};
