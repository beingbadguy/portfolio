import { IoIosArrowRoundForward } from "react-icons/io";
import { RiFirebaseFill, RiMailLine, RiNextjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiMaildotru,
  SiReactquery,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import Skills from "../components/Skills";
import { motion } from "motion/react";
import { DiJavascript1, DiReact } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub, FaNodeJs, FaPython } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useAudioStore } from "../store";
import { useEffect } from "react";
import { WiStars } from "react-icons/wi";

const HomePage = () => {
  const { isLight } = useAudioStore();

  const skillset = [
    { skill: "NextJS", icon: <RiNextjsFill size={15} /> },
    { skill: "JavaScript", icon: <DiJavascript1 size={15} /> },
    { skill: "TypeScript", icon: <BiLogoTypescript size={15} /> },
    { skill: "ReactJS", icon: <DiReact size={15} /> },
    { skill: "Node.js", icon: <FaNodeJs size={15} /> },
    { skill: "Express.js", icon: <SiExpress size={15} /> },
    { skill: "TailwindCSS", icon: <SiTailwindcss size={15} /> },
    { skill: "Framer Motion", icon: <TbBrandFramerMotion size={15} /> },
    { skill: "Zustand", icon: null },
    { skill: "Socket.IO", icon: <SiSocketdotio size={15} /> },
    { skill: "Firebase", icon: <RiFirebaseFill size={15} /> },
    { skill: "C", icon: null },
    { skill: "TanStack Query", icon: <SiReactquery size={15} /> },
    { skill: "C++", icon: null },
    { skill: "Python", icon: <FaPython size={15} /> },
    { skill: "Git/Github", icon: <FaGithub size={15} /> },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="m-4 mb-20 text-sm md:text-[16px] ">
      <div className="relative ">
        {/* <div className="size-2 -left-2 bg-green-500  absolute border" /> */}
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          drag="x"
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.5}
          dragTransition={{
            bounceStiffness: 300,
            bounceDamping: 15,
          }}
          dragMomentum={true}
          whileDrag={{ scale: 1.2 }}
          src="/passport.jpg"
          alt=""
          className="h-20 my-2 rounded z-[99999]"
        />
        {/* <div></div> */}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`selection:bg-yellow-500  ${
          isLight ? "text-black" : "text-white"
        } selection:text-white text-sm md:text-[16px]`}
      >
        Hey, I'm Aman, a{" "}
        <span
          className={`bg-green-500  ${isLight ? "text-white" : "text-white"} `}
        >
          full stack developer
        </span>{" "}
        with experience in building scalable web applications. I specialize in
        developing e-commerce platforms, social media apps, and high-performance
        web apps. Always eager to learn and improve, I am passionate about
        delivering seamless user experiences and solving real-world problems.
      </motion.h1>

      <div className="my-2 flex items-center lg:gap-10 mt-5 flex-wrap">
        <div
          className={` ${
            isLight ? "text-black" : "text-white"
          } flex items-center`}
        >
          {/* <IoIosArrowRoundForward size={30} /> */}
          <p>By the way, I'm open to projects and work.</p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <IoIosArrowRoundForward
            size={30}
            className="animate-pulse text-green-600"
          />
          <a href="mailto:authorisedaman@gmail.com">
            {" "}
            <SiMaildotru
              className={`  cursor-pointer ${
                isLight ? "text-black" : "text-white"
              } hover:text-green-700  transition-all duration-200`}
            />{" "}
          </a>
          <span className={` ${isLight ? "text-black" : "text-white"}`}>/</span>
          <a href="mailto:authorisedaman@gmail.com">
            <RiMailLine
              className={`  cursor-pointer ${
                isLight ? "text-black" : "text-white"
              } hover:text-green-700  transition-all duration-200`}
            />
          </a>
        </div>
      </div>
      <div className="select-none">
        <h1
          className={`  mt-7 flex items-center gap-1 ${
            isLight ? "text-black" : "text-white"
          } `}
        >
          <WiStars className="size-6 animate-pulse" /> Skills and Technologies{" "}
        </h1>
        {/* <motion.div
          initial={{ filter: "blur(3px)", y: -20 }}
          whileInView={{ filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex gap-2 my-2 flex-wrap "
        >
          <Skills
            skill={"NextJS"}
            yes={false}
            icon={<RiNextjsFill size={15} />}
          />
          <Skills
            skill={"JavaScript"}
            yes={false}
            icon={<DiJavascript1 size={15} />}
          />
          <Skills
            skill={"TypeScript"}
            yes={false}
            icon={<BiLogoTypescript size={15} />}
          />
          <Skills skill={"ReactJS"} yes={false} icon={<DiReact size={15} />} />
          <Skills skill={"Node.js"} yes={false} icon={<FaNodeJs size={15} />} />
          <Skills
            skill={"Express.js"}
            yes={false}
            icon={<SiExpress size={15} />}
          />

          <Skills
            skill={"TailwindCSS"}
            yes={false}
            icon={<SiTailwindcss size={15} />}
          />
          <Skills
            skill={"Framer Motion"}
            yes={false}
            icon={<TbBrandFramerMotion size={15} />}
          />
          <Skills skill={"Zustand"} yes={false} />
          <Skills
            skill={"Socket.IO"}
            yes={false}
            icon={<SiSocketdotio size={15} />}
          />
          <Skills
            skill={"Firebase"}
            yes={false}
            icon={<RiFirebaseFill size={15} />}
          />
          <Skills skill={"C"} yes={false} />
          <Skills
            skill={"TanStack Query"}
            yes={false}
            icon={<SiReactquery size={15} />}
          />
          <Skills skill={"C++"} yes={false} />
          <Skills skill={"Python"} yes={false} icon={<FaPython size={15} />} />
          <Skills
            skill={"Git/Github"}
            yes={false}
            icon={<FaGithub size={15} />}
          />
        </motion.div> */}
        <motion.div className="flex gap-2 my-2 flex-wrap ">
          {skillset.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(0px)" }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.6,
                  delay: index * 0.1, // Staggered ripple effect
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Skills key={index} skill={s.skill} yes={false} icon={s.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
