import { FaLinkedin } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineDocumentText } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "motion/react";

const SocialPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="m-4 flex items-center justify-center mb-20 flex-col gap-4  "
    >
      <a
        href="https://drive.google.com/file/d/1Nzr-SM0lRLO7s3C0peDA5HwfsnZotrEy/view?usp=sharing"
        target="_blank"
        className="group flex items-center w-full  cursor-pointer justify-between rounded px-2 my-1 flex-row-reverse"
      >
        <GoArrowRight className="hover:text-blue-500 transition-all hover:translate-x-1  duration-200 scale-110 group-hover:animate-bounce group-hover:text-blue-500" />
        <div className="flex items-center gap-1 group-hover:text-blue-500">
          <HiOutlineDocumentText size={25} />
          Resume
        </div>
      </a>
      <a
        href="mailto:authorisedaman@gmail.com"
        target="_blank"
        className="flex items-center w-full  cursor-pointer justify-between rounded px-2 my-1 flex-row-reverse group"
      >
        <GoArrowRight className="hover:text-blue-500 transition-all hover:translate-x-1  duration-200 scale-110 group-hover:animate-bounce group-hover:text-blue-500" />
        <div className="flex items-center gap-1 group-hover:text-blue-500">
          <MdOutlineMail size={25} />
          Email
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/aman-kumar-028a33217/"
        target="_blank"
        className="flex items-center w-full  cursor-pointer justify-between rounded px-2 my-1 flex-row-reverse group"
      >
        <GoArrowRight className="hover:text-blue-500 transition-all hover:translate-x-1  duration-200 scale-110 group-hover:animate-bounce group-hover:text-blue-500" />
        <div className="flex items-center gap-1 group-hover:text-blue-500">
          <FaLinkedin size={25} />
          LinkedIn
        </div>
      </a>
      <a
        href="https://github.com/beingbadguy"
        target="_blank"
        className="flex items-center w-full  cursor-pointer justify-between rounded px-2 my-1 flex-row-reverse group"
      >
        <GoArrowRight className="hover:text-blue-500 hover:translate-x-1 transition-all duration-200 scale-110 group-hover:animate-bounce group-hover:text-blue-500" />
        <div className="flex items-center gap-1 group-hover:text-blue-500">
          <LuGithub size={25} />
          Github
        </div>
      </a>
      <div></div>
    </motion.div>
  );
};

export default SocialPage;
