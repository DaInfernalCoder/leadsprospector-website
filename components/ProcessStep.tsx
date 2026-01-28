interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export default function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="text-center py-12">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        <span className="text-[#0d9488]">{number}.</span> {title}
      </h3>
      <p className="text-[#64748b] max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
