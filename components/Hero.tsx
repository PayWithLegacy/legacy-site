"use client";

import BulletPoint from "@/components/BulletPoint";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const gradientVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue/85 overflow-hidden">
      {/* Animated background elements */}

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              variants={titleVariants}
            >
              Payments Made{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white"
                variants={gradientVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                Simple
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-white/90 leading-relaxed"
              variants={itemVariants}
              whileHover={{
                color: "rgba(255, 255, 255, 1)",
                transition: { duration: 0.3 },
              }}
            >
              Transform your business with our secure, fast, and reliable
              payment processing platform. We specialize in merchant boarding
              with streamlined underwriting processes, helping businesses get
              approved for both high-risk and low-risk payment processing
              solutions.
            </motion.p>

            {/* Bullet points */}
            <motion.div
              className="hidden lg:block mx-auto max-w-lg lg:max-w-none"
              variants={itemVariants}
            >
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 justify-items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <BulletPoint text="24/7 Customer Support" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <BulletPoint text="Fast Approvals" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <BulletPoint text="High-Risk & Low-Risk Solutions" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <BulletPoint text="Streamlined Underwriting" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
