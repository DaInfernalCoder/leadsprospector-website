import { Check } from "lucide-react";

interface ChecklistItemProps {
  text: string;
}

export default function ChecklistItem({ text }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3 py-2">
      <Check className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" />
      <span className="text-[#1a1a2e] font-medium">{text}</span>
    </div>
  );
}
