"use client";

import { useState } from "react";
import { categories, faqData } from "@/features/Faqs/faqData";
import FAQHeader from "@/features/Faqs/FAQHeader";
import SearchBar from "@/features/Faqs/SearchBar";
import CategoryTabs from "@/features/Faqs/CategoryTabs";
import FAQSections from "@/features/Faqs/FAQSections";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter by category
  const filteredFAQ =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  // Filter by search term
  const filteredQuestions = filteredFAQ
    .map((item) => ({
      ...item,
      questions: item.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.a.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((item) => item.questions.length > 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <FAQHeader />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <FAQSections sections={filteredQuestions} />
      </div>
    </div>
  );

}
