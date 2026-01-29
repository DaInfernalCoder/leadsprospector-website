"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={() => setIsExpanded(true)}
      >
        {/* Logo Section */}
        <div className="p-6 pb-4 border-b border-gray-100">
          <Link
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-16 w-full flex items-center justify-center">
              <Image
                src={logoSrc}
                alt={`${companyName} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
          <p className="text-sm text-[#64748b] mt-4 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Screenshot Section */}
        <div className="relative w-full h-48 bg-gray-50 overflow-hidden group">
          <Image
            src={screenshotSrc}
            alt={`${companyName} email results`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
            <span className="text-white text-sm font-semibold">
              Click to expand
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* The Result */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">
              The Result
            </h3>
            <p className="text-2xl font-bold text-gray-900 mb-1">
              {result.headline}
            </p>
            <p className="text-sm text-[#64748b]">{result.subtext}</p>
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
                  className="text-sm text-gray-700 flex items-start"
                >
                  <span className="text-[#0d9488] mr-2">•</span>
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
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Previous cost per call:</span>
                <span className="font-semibold text-gray-900">
                  {costEfficiency.previousCost}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">
                  Marchbridge cost per call:
                </span>
                <span className="font-semibold text-[#0d9488]">
                  {costEfficiency.newCost}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-sm font-semibold text-gray-900">
                  Cost reduction:
                </span>
                <span className="text-lg font-bold text-[#0d9488]">
                  {costEfficiency.reduction}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setIsExpanded(false)}
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                {/* Logo Section */}
                <div className="p-8 pb-6 border-b border-gray-100">
                  <Link
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative h-20 w-full flex items-center justify-center">
                      <Image
                        src={logoSrc}
                        alt={`${companyName} logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </Link>
                  <p className="text-base text-[#64748b] mt-6 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Expanded Screenshot */}
                <div className="relative w-full h-96 bg-gray-50">
                  <Image
                    src={screenshotSrc}
                    alt={`${companyName} email results`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* The Result */}
                  <div className="mb-8">
                    <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">
                      The Result
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 mb-2">
                      {result.headline}
                    </p>
                    <p className="text-base text-[#64748b]">{result.subtext}</p>
                  </div>

                  {/* The Process */}
                  <div className="mb-8">
                    <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-4">
                      The Process
                    </h3>
                    <ul className="space-y-3">
                      {process.map((step, index) => (
                        <li
                          key={index}
                          className="text-base text-gray-700 flex items-start"
                        >
                          <span className="text-[#0d9488] mr-3 text-xl">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cost Efficiency */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-4">
                      Cost Efficiency
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-base">
                        <span className="text-gray-600">
                          Previous cost per call:
                        </span>
                        <span className="font-semibold text-gray-900">
                          {costEfficiency.previousCost}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-base">
                        <span className="text-gray-600">
                          Marchbridge cost per call:
                        </span>
                        <span className="font-semibold text-[#0d9488]">
                          {costEfficiency.newCost}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                        <span className="text-base font-semibold text-gray-900">
                          Cost reduction:
                        </span>
                        <span className="text-2xl font-bold text-[#0d9488]">
                          {costEfficiency.reduction}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
