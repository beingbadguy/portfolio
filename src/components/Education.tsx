import React from "react";
import { motion } from "motion/react";
interface educationPropType {
  imgUrl: string;
  title: string;
  stream: string;
  period: string;
}
const Education = (prop: educationPropType) => {
  return (
    <motion.div
      animate={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="flex items-start justify-between mt-4 text-sm md:text-md w-full"
    >
      <div className="flex items-center gap-6 ">
        <div className="bg-white">
          <img src={prop.imgUrl} alt="" className="h-12 w-12 rounded-[100%]" />
        </div>
        <div className=" w-[140px] sm:w-[100%]">
          <p className="font-bold">{prop.title}</p>
          <p>{prop.stream}</p>
        </div>
      </div>

      <div className="text-neutral-400">
        <p>{prop.period}</p>
      </div>
    </motion.div>
  );
};

export default Education;
