interface SponsorCardFlexibleProps {
  title: string;
  width?: string; // Tailwind width class, e.g., "w-xl", "w-md", "w-sm"
}

export function SponsorCardFlexible({ title, width = "w-md" }: SponsorCardFlexibleProps) {
  return (
    <div className={`relative w-full bg-white border-2 border-pink-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}>
      {/* Logo Placeholder */}
      <div className="pt-20 px-6 pb-6">
        <div className="bg-gradient-to-b from-gray-100 to-gray-50 rounded-2xl h-32 flex items-center justify-center text-gray-400">
          LOGO
        </div>
      </div>

      {/* Title */}
      <div className="px-6 py-4 border-t border-gray-200">
        <p className="text-xl italic text-gray-700">{title}</p>
      </div>
    </div>
  );
}