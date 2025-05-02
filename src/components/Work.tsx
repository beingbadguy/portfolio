import Skills from "./Skills";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "motion/react";
import { useAudioStore } from "../store";
import { MdOutlineWorkOutline } from "react-icons/md";

interface propType {
  name: string;
  description: string;
  skills: string[];
  live: string;
  post: string;
  from: string;
  to: string;
}
const Work = (prop: propType) => {
  const { isLight } = useAudioStore();
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2">
        <MdOutlineWorkOutline
          className={`${isLight ? "text-black" : "text-white"} size-5`}
        />
        <a
          href={prop.live}
          target="_blank"
          className={` ${
            isLight ? "text-black" : "text-white"
          } font-semibold border-b text-sm cursor-pointer`}
        >
          {prop.name}
        </a>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-1 my-3 text-[12px] md:text-[14px] text-gray-400">
        <p>{prop.post}</p>
        <div className="flex items-center gap-2">
          <p>{prop.from}</p>-<p>{prop.to}</p>
        </div>
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
        <a
          href={prop.live}
          target="_blank"
          className="flex items-center gap-2 text-[12px] md:text-[14px] text-gray-500"
        >
          <FiExternalLink className="  cursor-pointer hover:scale-110 transition-all duration-200 size-4 hover:text-green-500" />
          Company Website
        </a>
      </div>
    </motion.div>
  );
};

export default Work;
