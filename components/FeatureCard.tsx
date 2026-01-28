import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  titleAccent: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  titleAccent,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="w-48 h-48 border-2 border-gray-300 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">
        {title}
        <br />
        <span className="text-[#0d9488]">{titleAccent}</span>
      </h3>
      <p className="text-[#64748b] max-w-xs leading-relaxed">{description}</p>
    </div>
  );
}
