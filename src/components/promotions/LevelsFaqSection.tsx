
import React, { useState } from "react";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const LevelsFaqSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      question: "How does VB Levels work?",
      answer: "VB Levels is our rewards program where you earn XP by completing missions and placing bets. As you level up, you unlock exclusive rewards and bonuses. Each level has different rewards - the higher your level, the better the rewards!"
    },
    {
      question: "How do I earn XP?",
      answer: "You earn XP by completing daily and weekly missions, placing bets, making deposits, and participating in special promotions. Daily missions refresh every 24 hours, while weekly missions reset every Monday at midnight."
    },
    {
      question: "When do rewards expire?",
      answer: "Most rewards expire 7 days after being claimed, but this can vary depending on the reward type. Free bets typically expire after 7 days, while odds boosts might expire after 24 hours. Always check the specific terms for each reward."
    },
    {
      question: "What happens when I reach a new level?",
      answer: "When you reach a new level, you'll receive a special milestone reward and unlock additional rewards in the rewards section. Your progress carries over to the next level and you'll have access to better rewards and bonuses."
    }
  ];

  return (
    <div className="px-5 pb-4">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full bg-purple-900/20 rounded-lg border border-purple-800/50"
      >
        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
          <div className="flex items-center">
            <Info className="h-5 w-5 text-purple-400 mr-2" />
            <span className="font-medium text-white">VB Levels Info & FAQs</span>
          </div>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-purple-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-purple-400" />
          )}
        </CollapsibleTrigger>
        
        <CollapsibleContent className="px-4 pb-4 pt-0 space-y-2">
          <p className="text-sm text-white/80 mb-3">
            Find answers to common questions about the VB Levels program below.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-purple-800/50">
                <AccordionTrigger className="text-sm py-3 hover:no-underline hover:text-purple-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/70 px-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
