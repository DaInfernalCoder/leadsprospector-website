"use client";

import { motion } from "framer-motion";

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
    <motion.div
      className="text-center py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        <motion.span
          className="text-[#0d9488] inline-block"
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
              },
            },
          }}
        >
          {number}.
        </motion.span>{" "}
        {title}
      </h3>
      <p className="text-[#64748b] max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
