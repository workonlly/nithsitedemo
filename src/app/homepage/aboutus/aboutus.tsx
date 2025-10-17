"use client";
import React from "react";
import { motion } from "framer-motion";

const data = [
  { n: "3.4 Cr", d: "Highest Package" },
  { n: "1.2 Cr", d: "Average Package" },
  { n: "500+", d: "Companies" },
  { n: "1500+", d: "Internships" },
  { n: "95%", d: "Placement Rate" },
  { n: "2000+", d: "Students Placed" },
];

const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Aboutus() {
  return (
    <section className="relative py-15 px-6  overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-[#631012]/20 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left side - About Us content */}
          <motion.div
            className="md:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl font-bold text-[#631012] mb-6 inline-block relative"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              }}
            >
              About Us
              <motion.span
                className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#631012]"
                whileInView={{
                  width: "100%",
                  transition: { duration: 0.8, delay: 0.3 },
                }}
              />
            </motion.h2>

            <p className="text-gray-700 leading-relaxed text-md">
              National Institute of Technology Hamirpur is one of the thirty-one NITs of the country, which came into existence on 7th August 1986 as Regional Engineering College, a joint and cooperative enterprise of the Govt. of India and Govt. of Himachal Pradesh. At the time of inception, Institute had only two departments i.e., Civil and Electrical Engineering having an intake of 30 students in each.
            </p>
          </motion.div>

          {/* Right side - Stats with animation */}
          <motion.div
            className="md:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {data.map((p, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:-translate-y-2"
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                <motion.div
                  className="text-3xl font-bold text-[#631012] mb-2"
                  whileInView={{
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    transition: { duration: 0.5, delay: index * 0.15 },
                  }}
                >
                  {p.n}
                </motion.div>
                <div className="text-lg font-medium text-gray-800">{p.d}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
