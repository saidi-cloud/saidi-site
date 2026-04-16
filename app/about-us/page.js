'use client'

import { motion } from 'framer-motion'

export default function AboutUsPage() {
  return (
    <motion.div
      className="space-y-12 bg-black text-white min-h-screen px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#4487c5] mb-6">About SAIDI</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          SAIDI (Singapore Advanced Infrastructure for Distributed Intelligence) is a cloud GPU infrastructure provider dedicated to
          supporting high-performance computing needs across industries. Our mission is to deliver scalable, secure, and cost-effective
          GPU compute infrastructure as a service.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-[#4487c5] mb-10 text-center">For the past five years:</h2>
        <div className="relative">
          {/* Timeline items wrapper for correct line height */}
          <div className="relative">
            {/* Vertical timeline line */}
            <motion.div
              className="absolute left-1/2 top-0 w-1 h-full bg-[#e35275] opacity-60 z-0 transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring' }}
              style={{ originY: 0 }}
            />

            {/* Timeline items */}
            <div className="flex flex-col gap-16 relative z-10">
              {/* Early Days */}
              <motion.div
                className="flex flex-col md:flex-row items-center md:items-start md:justify-start gap-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center md:items-end md:w-1/2">
                  <div className="w-5 h-5 bg-[#e35275] rounded-sm border-4 border-[#112d42] shadow-lg animate-pulse mb-2" />
                  <span className="text-xl md:text-2xl font-bold text-white text-center md:text-right">In its early days</span>
                  <span className="text-[#4487c5] font-semibold mb-2 text-lg text-center md:text-right">Exceptional insight</span>
                </div>
                <div className="bg-gradient-to-r from-[#0a2233] to-[#112d42] rounded-xl p-6 shadow-lg w-full md:w-1/2">
                  <ul className="text-gray-300 text-base space-y-1">
                    <li>Recognized demand in AI, ML, data analytics, and graphics rendering.</li>
                    <li>Shifted focus from traditional CPU to GPU infrastructure.</li>
                  </ul>
                </div>
              </motion.div>

              {/* Attract Investment */}
              <motion.div
                className="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-end gap-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center md:items-start md:w-1/2">
                  <div className="w-5 h-5 bg-[#e35275] rounded-sm border-4 border-[#112d42] shadow-lg animate-pulse mb-2" />
                  <span className="text-xl md:text-2xl font-bold text-white text-center md:text-left">From the outset</span>
                  <span className="text-[#4487c5] font-semibold mb-2 text-lg text-center md:text-left">Attract investment</span>
                </div>
                <div className="bg-gradient-to-l from-[#0a2233] to-[#112d42] rounded-xl p-6 shadow-lg w-full md:w-1/2">
                  <ul className="text-gray-300 text-base space-y-1">
                    <li>Attracted global private equity for growth.</li>
                    <li>Invested in cutting-edge GPU hardware and software.</li>
                  </ul>
                </div>
              </motion.div>

              {/* Cutting Edge */}
              <motion.div
                className="flex flex-col md:flex-row items-center md:items-start md:justify-start gap-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center md:items-end md:w-1/2">
                  <div className="w-5 h-5 bg-[#e35275] rounded-sm border-4 border-[#112d42] shadow-lg animate-pulse mb-2" />
                  <span className="text-xl md:text-2xl font-bold text-white text-center md:text-right">Over the years</span>
                  <span className="text-[#4487c5] font-semibold mb-2 text-lg text-center md:text-right">Be on the cutting edge of technology</span>
                </div>
                <div className="bg-gradient-to-r from-[#0a2233] to-[#112d42] rounded-xl p-6 shadow-lg w-full md:w-1/2">
                  <ul className="text-gray-300 text-base space-y-1">
                    <li>SAIDI Cloud has strategic partnerships with leading technology providers.</li>
                    <li>Ensured low-latency, high availability, and data integrity.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="mt-10 text-center text-white text-lg font-semibold max-w-3xl mx-auto">
            SAIDI Cloud has been steadily building its foundation to become the go-to provider of cloud-based GPU compute resources in Southeast Asia.
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-[#e35275] mb-2">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To empower organizations and researchers by providing access to powerful, on-demand GPU computing resources. We aim to simplify
            infrastructure and accelerate innovation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#e35275] mb-2">Why We Exist</h2>
          <p className="text-gray-300 leading-relaxed">
            As AI/ML and data-intensive applications become essential, traditional compute models fall short. SAIDI bridges this gap by offering a
            robust GPU cloud platform for experimentation, production, and scale — without vendor lock-in.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#e35275] mb-2">Our Team</h2>
          <p className="text-gray-300 leading-relaxed">
            We are a team of engineers, researchers, and infrastructure experts passionate about democratizing access to GPU computing.
          </p>
        </div>
      </section>
    </motion.div>
  )
}
