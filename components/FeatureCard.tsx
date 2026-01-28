"use client";

import { motion } from "framer-motion";
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
    <motion.div
      className="flex flex-col items-center text-center px-4 py-6"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="w-48 h-48 border-2 border-gray-300 rounded-lg flex items-center justify-center mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-2">
        {title}
        <br />
        <span className="text-[#0d9488]">{titleAccent}</span>
      </h3>
      <p className="text-[#64748b] max-w-xs leading-relaxed">{description}</p>
    </motion.div>
  );
}
