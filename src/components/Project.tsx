import { FaRegFolderClosed } from "react-icons/fa6";
import Skills from "./Skills";
import { LuGithub } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "motion/react";

interface propType {
  name: string;
  description: string;
  skills: string[];
  live: string;
  github: string;
}
const Project = (prop: propType) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2">
        <FaRegFolderClosed className="text-gray-500" />
        <a
          href={prop.live}
          target="_blank"
          className="font-semibold border-b text-sm cursor-pointer"
        >
          {prop.name}
        </a>
      </div>
      <h1 className="text-[12px] md:text-[14px] my-2 text-gray-500 selection:bg-yellow-500 selection:text-white">
        {prop.description}
      </h1>
      <div className="flex gap-2 flex-wrap">
        {prop.skills?.map((s, index) => (
          <Skills key={index} skill={s} yes={true} />
        ))}
      </div>
      <div className="flex items-center gap-4 my-4">
        <a href={prop.live} target="_blank">
          <FiExternalLink className=" text-gray-500 cursor-pointer hover:scale-110 transition-all duration-200 size-5 hover:text-green-500" />
        </a>
        <a href={prop.github} target="_blank">
          <LuGithub className=" text-gray-500 cursor-pointer hover:scale-110 transition-all duration-200 hover:text-green-500" />
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
