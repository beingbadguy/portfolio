import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
// import { HiOutlineDocumentText } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "motion/react";
import { AiOutlineSpotify } from "react-icons/ai";
import { IoIosMusicalNote, IoIosPlay } from "react-icons/io";
import { useEffect } from "react";
import { IoPauseOutline } from "react-icons/io5";
import { useAudioStore } from "../store";
import ContactAction from "../components/ContactAction";

const SocialPage = () => {
  const {
    setAudio,
    playAudio,
    pauseAudio,
    isPlaying,
    duration,
    currentTime,
    isLight,
  } = useAudioStore();
  useEffect(() => {
    setAudio();
  }, [setAudio]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    if (progress == 100) {
      pauseAudio();
    }
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className={` ${
        isLight ? "text-black" : "text-white"
      } m-4 flex items-center justify-center mb-20 flex-col gap-2 md:gap-0 `}
    >
      <ContactAction />
      {/* <a
        href="https://drive.google.com/file/d/1x8k36tFh00I_x7dbITxM31Vl3JD9PtGd/view?usp=sharing"
        target="_blank"
        className="group flex items-center w-full  cursor-pointer justify-between rounded px-2 my-1 flex-row-reverse hover:bg-green-100 transition-all duration-200 py-3 text-sm md:text-[16px]"
      >
        <GoArrowRight className="hover:text-violet-600 transition-all hover:translate-x-1  duration-200 scale-110 group-hover:animate-bounce group-hover:text-violet-600" />
        <div className="flex items-center gap-1 group-hover:text-violet-600">
          <HiOutlineDocumentText size={25} />
          Resume
        </div>
      </a> */}
      <a
        href="mailto:authorisedaman@gmail.com"
        target="_blank"
        className="flex items-center w-full  cursor-pointer justify-between rounded px-2 my-1 flex-row-reverse group hover:bg-green-100 transition-all duration-200 py-3 text-sm md:text-[16px]"
      >
        <GoArrowRight className="hover:text-green-600 transition-all hover:translate-x-1  duration-200 scale-110 group-hover:animate-bounce group-hover:text-green-600" />
        <div className="flex items-center gap-1 group-hover:text-green-600">
          <MdOutlineMail size={25} />
          Email
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/aman-kumar-028a33217/"
        target="_blank"
        className="flex items-center w-full  cursor-pointer justify-between rounded px-2 my-1 flex-row-reverse group hover:bg-green-100 transition-all duration-200 py-3 text-sm md:text-[16px]"
      >
        <GoArrowRight className="hover:text-blue-600 transition-all hover:translate-x-1  duration-200 scale-110 group-hover:animate-bounce group-hover:text-blue-600" />
        <div className="flex items-center gap-1 group-hover:text-blue-600">
          <FaLinkedin size={25} />
          LinkedIn
        </div>
      </a>
      <a
        href="https://github.com/beingbadguy"
        target="_blank"
        className="flex items-center w-full  cursor-pointer justify-between rounded px-2 my-1 flex-row-reverse group hover:bg-green-100 transition-all duration-200 py-3 text-sm md:text-[16px]"
      >
        <GoArrowRight className="hover:text-gray-600 hover:translate-x-1 transition-all duration-200 scale-110 group-hover:animate-bounce group-hover:text-gray-600" />
        <div className="flex items-center gap-1 group-hover:text-gray-600">
          <LuGithub size={25} />
          Github
        </div>
      </a>

      <a
        href="https://www.instagram.com/beingbadguy"
        target="_blank"
        className="flex items-center w-full  cursor-pointer justify-between rounded px-2 my-1 flex-row-reverse group hover:bg-green-100 transition-all duration-200 py-3 text-sm md:text-[16px]"
      >
        <GoArrowRight className="hover:text-pink-600 hover:translate-x-1 transition-all duration-200 scale-110 group-hover:animate-bounce group-hover:text-pink-600" />
        <div className="flex items-center gap-1 group-hover:text-pink-600">
          <FaInstagram size={25} className="group-hover:text-pink-500" />
          Instagram
        </div>
      </a>

      {/* fun starts from here  */}
      <div className="flex items-start text-left justify-start  w-full flex-col">
        <h1 className="text-left font-semibold text-md my-2 texty flex items-center gap-1">
          Now Playing <IoIosMusicalNote className={isPlaying ? "" : ""} />
        </h1>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4">
            <div
              className={`bg-green-500 size-14 flex items-center justify-center rounded ${
                isPlaying ? " shadow-[0px_0_10px_2px_rgba(34,197,94,0.8)] " : ""
              } transition-all duration-300 `}
            >
              <AiOutlineSpotify className="size-10" />
            </div>
            <h2 className="text-left font-semibold text-sm my-2">
              <span className="text-green-600 texty"> Yeh Dooriyan</span> <br />
              <span className="text-gray-400 text-[12px] texty">
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
        {/* Progress Bar */}
        <div className="w-full h-1  mt-4 relative">
          <div
            className="h-full bg-green-500  transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Time Display */}
        {/* <p className="text-sm text-gray-400 mt-2">{Math.floor(progress)}%</p> */}
      </div>
    </motion.div>
  );
};

export default SocialPage;
