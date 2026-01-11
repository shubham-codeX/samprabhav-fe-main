import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionData {
  category: string;
  questions: FAQItem[];
}

interface FAQSectionsProps {
  sections: FAQSectionData[];
}

export default function FAQSections({ sections }: FAQSectionsProps) {
  if (sections.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 text-lg">
          No questions found. Try adjusting your search or category.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.category}>
          {/* Category Header */}
          <div
            className={`px-6 py-4 rounded-lg text-white font-bold text-lg mb-4 ${
              section.category === "Registration"
                ? "bg-[#321951]"
                : section.category === "Participation"
                ? "bg-[#B22E37]"
                : section.category === "Events & Schedule"
                ? "bg-[#313575]"
                : section.category === "Prizes & Certificates"
                ? "bg-[#F68318]"
                : section.category === "Venue & Facilities"
                ? "bg-[#633090]"
                : "bg-[#FDC005]"
            }`}
          >
            {section.category}
          </div>

          {/* Questions Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {section.questions.map((item, idx) => (
              <AccordionItem
                key={`${section.category}-${idx}`}
                value={`${section.category}-${idx}`}
                className="border border-slate-300 rounded-lg px-6 py-4 bg-white
                           transition-all duration-300 hover:no-underline
                           hover:border-[#321951] hover:bg-[#f3eaff] hover:shadow-md border-2"
              >
                <AccordionTrigger className="text-left text-[#321951] no-underline font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-4 no-underline font-medium hover:no-underline">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}
