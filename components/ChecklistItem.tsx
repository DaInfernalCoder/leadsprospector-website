"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ChecklistItemProps {
  text: string;
}

export default function ChecklistItem({ text }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-3 py-2">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.1,
        }}
      >
        <Check className="w-5 h-5 text-[#0d9488] mt-0.5 flex-shrink-0" />
      </motion.div>
      <span className="text-[#1a1a2e] font-medium">{text}</span>
    </div>
  );
}
