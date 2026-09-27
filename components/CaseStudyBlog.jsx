"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function CaseStudyBlog() {
  return (
    <div className="
      flex flex-col items-center justify-center
      min-h-[80vh] text-center
      px-5 sm:px-8
      py-20
      gap-8
    ">

      {/* Clock icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-20 h-20 rounded-full bg-[rgb(85,0,85)]/10 flex items-center justify-center"
      >
        <svg
          className="w-9 h-9 text-[rgb(85,0,85)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
          />
        </svg>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="
          font-extrabold text-purple-900 leading-tight ultra-bold
          text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem]
          max-w-3xl
        "
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        Case Studies<br />
        <span className="text-[rgb(85,0,85)]">Coming Soon.</span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        className="text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] text-gray-500 max-w-xl leading-relaxed font-light"
        style={{ fontFamily: "'Nunito', sans-serif" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        We are documenting our client results in detail. Check back soon for
        full case studies with real numbers.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        <Link
          href="/clients"
          className="
            flex items-center justify-center h-[56px] px-10
            bg-[rgb(85,0,85)] text-white
            text-[1rem] font-bold rounded-[14px]
            hover:bg-[rgb(29,2,29)] transition-colors duration-300
          "
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          See Our Clients
        </Link>
        <Link
          href="/get-intouch-form"
          className="
            flex items-center justify-center h-[56px] px-10
            border-2 border-[rgb(29,2,29)] text-[rgb(29,2,29)]
            text-[1rem] font-bold rounded-[14px]
            hover:bg-[rgb(29,2,29)] hover:text-white transition-all duration-300
          "
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Start a Project
        </Link>
      </motion.div>

    </div>
  );
}

export default CaseStudyBlog;