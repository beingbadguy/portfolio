import { FaLinkedin } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineDocumentText } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "motion/react";
import { AiOutlineSpotify } from "react-icons/ai";
import { IoIosPlay } from "react-icons/io";
import { useEffect } from "react";
import { IoPauseOutline } from "react-icons/io5";
import { useAudioStore } from "../store";

const SocialPage = () => {
  const { setAudio, playAudio, pauseAudio, isPlaying } = useAudioStore();
  useEffect(() => {
    setAudio();
  }, []);

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

      {/* fun starts from here  */}
      <div className="flex items-start text-left justify-start  w-full flex-col">
        <h1 className="text-left font-semibold text-md my-2">Now Playing</h1>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <div className="bg-green-500 size-14 flex items-center justify-center rounded">
              <AiOutlineSpotify className="size-10" />
            </div>
            <h2 className="text-left font-semibold text-sm my-2">
              <span className="text-green-600"> Yeh Dooriyan</span> <br />
              <span className="text-gray-400 text-[12px]">
                {" "}
                Pritam, Mohit Chauhan
              </span>
            </h2>
          </div>

          <button className="text-left font-semibold text-sm my-2">
            {isPlaying ? (
              <IoPauseOutline
                size={25}
                className="cursor-pointer"
                onClick={pauseAudio}
              />
            ) : (
              <IoIosPlay
                size={25}
                className="cursor-pointer"
                onClick={playAudio}
              />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialPage;
