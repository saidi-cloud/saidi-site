"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DocumentsPage() {
  return (
    <motion.div
      className="space-y-12 bg-black text-white min-h-screen px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-center">
        <h1 className="text-4xl font-bold text-[#4487c5] mb-4">Documents</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Browse our key policies and reference materials.
        </p>
      </section>

      <ul className="space-y-6 max-w-3xl mx-auto text-left text-lg text-gray-200">
        <li>
          <Link
            href="/documents/terms"
            className="text-[#e35275] hover:underline"
          >
            Terms of Service
          </Link>
        </li>
        <li>
          <Link
            href="/documents/privacy"
            className="text-[#e35275] hover:underline"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/documents/gpu-pricing"
            className="text-[#e35275] hover:underline"
          >
            GPU Pricing Schedule
          </Link>
        </li>
        <li>
          <Link
            href="/documents/cloud-infrastructure"
            className="text-[#e35275] hover:underline"
          >
            SAIDI Cloud Infrastructure
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}
