interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            selectedCategory === category
              ? "bg-orange-500 text-white"
              : "bg-white text-slate-700 border border-slate-300 hover:border-slate-400"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
