"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  companyName: string;
  companyUrl: string;
  logoSrc: string;
  screenshotSrc: string;
  description: string;
  result: { headline: string; subtext: string };
  process: string[];
  costEfficiency: {
    previousCost: string;
    newCost: string;
    reduction: string;
  };
}

export default function CaseStudyCard({
  companyName,
  companyUrl,
  logoSrc,
  screenshotSrc,
  description,
  result,
  process,
  costEfficiency,
}: CaseStudyCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Top Section - Logo and Content */}
      <div className="flex flex-col md:flex-row border-b border-gray-200">
        {/* Left Side - Logo */}
        <div className="md:w-1/3 p-8 md:p-10 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
          <Link
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group/logo w-full"
          >
            <div className="relative h-32 md:h-40 w-full flex items-center justify-center rounded-lg overflow-hidden bg-gray-50">
              <Image
                src={logoSrc}
                alt={`${companyName} logo`}
                fill
                className="object-contain group-hover/logo:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </Link>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
          {/* Description */}
          <p className="text-base md:text-lg text-[#64748b] mb-6 leading-relaxed">
            {description}
          </p>

          {/* The Result */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">
              The Result
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {result.headline}
            </p>
            <p className="text-sm md:text-base text-[#64748b]">
              {result.subtext}
            </p>
          </div>

          {/* The Process */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">
              The Process
            </h3>
            <ul className="space-y-2">
              {process.map((step, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base text-gray-700 flex items-start"
                >
                  <span className="text-[#0d9488] mr-2 md:mr-3">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cost Efficiency */}
          <div className="mt-auto pt-6 border-t border-gray-100">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">
              Cost Efficiency
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-600">Previous cost per call:</span>
                <span className="font-semibold text-gray-900">
                  {costEfficiency.previousCost}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm md:text-base">
                <span className="text-gray-600">
                  Marchbridge cost per call:
                </span>
                <span className="font-semibold text-[#0d9488]">
                  {costEfficiency.newCost}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-sm md:text-base font-semibold text-gray-900">
                  Cost reduction:
                </span>
                <span className="text-lg md:text-xl font-bold text-[#0d9488]">
                  {costEfficiency.reduction}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Screenshot Full Width */}
      <div className="relative w-full h-96 md:h-[500px] bg-gray-50">
        <Image
          src={screenshotSrc}
          alt={`${companyName} email results`}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>
    </motion.div>
  );
}
