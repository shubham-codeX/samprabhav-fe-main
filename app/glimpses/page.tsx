import Image from "next/image";

export default function Glimpses() {
  const images = [
    {
      id: 1,
      src: "/Glimpses/two-women-in-traditional-indian-attire-with-colorf.jpg",
      alt: "Traditional performance with women in scarves",
    },
    {
      id: 2,
      src: "/Glimpses/black-and-white-monument-tower-with-crowd-gathered.jpg",
      alt: "Monument with gathering crowd",
    },
    {
      id: 3,
      src: "/Glimpses/orange-brown-stringed-musical-instruments-sitars.jpg",
      alt: "Traditional stringed instruments",
    },
    {
      id: 4,
      src: "/Glimpses/two-women-in-traditional-indian-dress-with-ornamen.jpg",
      alt: "Women in traditional dress with jewelry",
    },
    {
      id: 5,
      src: "/Glimpses/colorful-grid-collage-of-event-posters-and-artwork.jpg",
      alt: "Event posters collage",
    },
    {
      id: 6,
      src: "/Glimpses/red-lit-crowd-of-people-cheering-at-concert.jpg",
      alt: "Crowd cheering at event",
    },
    {
      id: 7,
      src: "/Glimpses/green-stage-lights-performance-lighting.jpg",
      alt: "Stage lights",
    },
    {
      id: 8,
      src: "/Glimpses/palm-trees-and-blue-sky-tropical-scene.jpg",
      alt: "Tropical palm trees",
    },
    {
      id: 9,
      src: "/Glimpses/two-women-in-traditional-indian-attire-with-colorf.jpg",
      alt: "Traditional performance with women in scarves",
    },
    {
      id: 10,
      src: "/Glimpses/black-and-white-monument-tower-with-crowd-gathered.jpg",
      alt: "Monument with gathering crowd",
    },
    {
      id: 11,
      src: "/Glimpses/orange-brown-stringed-musical-instruments-sitars.jpg",
      alt: "Traditional stringed instruments",
    },
    {
      id: 12,
      src: "/Glimpses/two-women-in-traditional-indian-dress-with-ornamen.jpg",
      alt: "Women in traditional dress with jewelry",
    },
    {
      id: 13,
      src: "/Glimpses/colorful-grid-collage-of-event-posters-and-artwork.jpg",
      alt: "Event posters collage",
    },
    {
      id: 14,
      src: "/Glimpses/red-lit-crowd-of-people-cheering-at-concert.jpg",
      alt: "Crowd cheering at event",
    },
    {
      id: 15,
      src: "/Glimpses/green-stage-lights-performance-lighting.jpg",
      alt: "Stage lights",
    },
    {
      id: 16,
      src: "/Glimpses/palm-trees-and-blue-sky-tropical-scene.jpg",
      alt: "Tropical palm trees",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-purple-50 to-blue-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 pt-8">
            Glimpses of SAMPRABHAV
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Relive the memorable moments, vibrant performances, and
            unforgettable experiences from SAMPRABHAV
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-4/5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
