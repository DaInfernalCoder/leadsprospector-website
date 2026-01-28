import { Check } from "lucide-react";

interface ChecklistItemProps {
  text: string;
}

export default function ChecklistItem({ text }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3 py-2">
      <Check className="w-5 h-5 text-[#1d4ed8] mt-0.5 flex-shrink-0" />
      <span className="text-gray-800 font-medium">{text}</span>
    </div>
  );
}
