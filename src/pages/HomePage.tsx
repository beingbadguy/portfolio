import { IoIosArrowRoundForward } from "react-icons/io";
import { RiFirebaseFill, RiMailLine } from "react-icons/ri";
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

const HomePage = () => {
  return (
    <div className="m-4 mb-20 text-sm md:text-[16px] ">
      <div className="">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/passport.jpg"
          alt=""
          className="h-20 my-2 rounded"
        />
        {/* <div></div> */}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="selection:bg-yellow-500 selection:text-white text-sm md:text-[16px]"
      >
        Hey, I'm Aman, a{" "}
        <span className="bg-green-500 text-white">full stack developer</span>{" "}
          with experience in building scalable web applications. I specialize in
        developing e-commerce platforms, social media apps, and high-performance
        web apps. Always eager to learn and improve, I am passionate about
        delivering seamless user experiences and solving real-world problems.
      </motion.h1>

      <div className="my-2 flex items-center lg:gap-10 mt-5 flex-wrap">
        <div className="flex items-center">
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
            <SiMaildotru className=" cursor-pointer hover:text-green-700 transition-all duration-200" />{" "}
          </a>
          /
          <a href="mailto:authorisedaman@gmail.com">
            <RiMailLine className=" cursor-pointer hover:text-green-700 transition-all duration-200" />
          </a>
        </div>
      </div>
      <div className="select-none">
        <h1 className="font-semibold mt-10">Skills and Technologies </h1>
        <motion.div
          initial={{ filter: "blur(3px)", y: -20 }}
          whileInView={{ filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex gap-2 my-2 flex-wrap "
        >
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
          <Skills skill={"React"} yes={false} icon={<DiReact size={15} />} />
          <Skills skill={"Node.js"} yes={false} icon={<FaNodeJs size={15} />} />
          <Skills
            skill={"Express.js"}
            yes={false}
            icon={<SiExpress size={15} />}
          />
          {/* <Skills skill={"HTML"} yes={false} icon={<FaHtml5 size={15} />} /> */}
          {/* <Skills skill={"CSS"} yes={false} icon={<SiCss3 size={15} />} /> */}
          <Skills
            skill={"Tailwind"}
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
            skill={"Socket.io"}
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
            skill={"React Query"}
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
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
