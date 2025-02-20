import { IoIosArrowRoundForward } from "react-icons/io";
import { RiMailLine } from "react-icons/ri";
import { SiMaildotru } from "react-icons/si";
import Skills from "../components/Skills";
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <div className="m-4 mb-20 ">
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
        viewport={{ once: true }} // Ensures animation runs only once
        className=" selection:bg-yellow-500 selection:text-white text-md"
      >
        Hey, I'm Aman a{" "}
        <span className="bg-green-500 text-white ">full stack developer</span>{" "}
        passionate about building real-world projects. I love creating seamless
        user experiences, whether it’s an e-commerce platform, social media app,
        or a high-performance web app. When I’m not coding, I’m either playing
        football, exploring new tech, or refining my skills.
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
          className="flex gap-2 my-5 flex-wrap "
        >
          <Skills skill={"JavaScript"} yes={false} />
          <Skills skill={"TypeScript"} yes={false} />
          <Skills skill={"React"} yes={false} />
          <Skills skill={"Node.js"} yes={false} />
          <Skills skill={"Express.js"} yes={false} />
          <Skills skill={"HTML"} yes={false} />
          <Skills skill={"CSS"} yes={false} />
          <Skills skill={"Tailwind"} yes={false} />
          <Skills skill={"Framer Motion"} yes={false} />
          <Skills skill={"Zustand"} yes={false} />
          <Skills skill={"Socket.io"} yes={false} />
          <Skills skill={"Firebase"} yes={false} />
          <Skills skill={"React Query"} yes={false} />
          <Skills skill={"Python"} yes={false} />
          <Skills skill={"Git/Github"} yes={false} />
          <Skills skill={"C++"} yes={false} />
          <Skills skill={"C"} yes={false} />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
