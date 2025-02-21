import { useEffect, useState } from "react";
import { FaCircle, FaRegFolderClosed } from "react-icons/fa6";
import { ImConnection } from "react-icons/im";
import { RiHome6Line } from "react-icons/ri";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineSchool } from "react-icons/md";
import { motion } from "motion/react";
import TextScramble from "../components/TextScramble";

const LayoutPage = () => {
  const [date, setDate] = useState<string>("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [currentLanguage, setCurrentLanguage] = useState<number>(0);

  const clickSound = () => {
    const audio = new Audio("btn.mp3");
    audio.volume = 0.1;
    audio.play();
  };

  const greetings = [
    "Hello", // English
    "Hola", // Spanish
    "Bonjour", // French
    "Hallo", // German
    "你好", // Chinese
    "こんにちは", // Japanese
    "Ciao", // Italian
    "Здравствуйте", // Russian
    "مرحبا", // Arabic
    "Olá", // Portuguese
    "안녕하세요", // Korean
    "नमस्ते", // Hindi
  ];
  // console.log(greetings.length); 12
  // console.log(currentLanguage);

  useEffect(() => {
    setLoading(true);
    const interval = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return greetings.length - 1;
        }
      });
    }, 320);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeChanger = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timeChanger);
  });
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen font-bold flex-col">
          <motion.div
            animate={
              currentLanguage === 11 ? { scale: [1, 10], opacity: [1, 0] } : {}
            }
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="texty text-xl"
          >
            {greetings[currentLanguage]}
          </motion.div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col text-lg sm:mx-20 md:mx-32 lg:mx-60 xl:mx-92   ">
          <nav className="flex items-center justify-between p-4 w-full mt-2  text-sm md:text-lg">
            <div className="flex items-center gap-1 flex-wrap">
              {/* <p
                className="  hover:text-green-500 cursor-pointer transition-all duration-200"
                onClick={() => {
                  navigate("/");
                }}
              >
                Aman Kumar
              </p> */}
              <TextScramble text="Aman Kumar" />
              <span
                className={` ${pathname == "/" ? "hidden" : ""} text-gray-300`}
              >
                /
              </span>
              <div className="hover:text-green-600 cursor-pointer transition-all duration-200">
                {" "}
                {pathname.replace("/", "").charAt(0).toUpperCase() +
                  pathname.slice(2)}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCircle className="animate-pulse text-green-400" />
              <p>{date} IST</p>
            </div>
          </nav>
          <hr className="w-full border border-green-300" />
          <div className="w-full">
            <Outlet />
          </div>
          <nav className=" fixed bottom-0 py-6  flex items-center gap-8  text-blacks  backdrop-blur-lg w-full justify-center  ">
            <div className="bg-green-300" />
            <div className="relative">
              <RiHome6Line
                size={27}
                className={`${
                  pathname == "/" ? " text-green-500 md:text-black" : ""
                } hover:-translate-y-1 hover:text-green-500 transition-all ease-in-out cursor-pointer duration-300`}
                onClick={() => {
                  if (pathname != "/") {
                    clickSound();
                  }
                  navigate("/");
                }}
              />
              <div
                className={`${
                  pathname == "/" ? "block " : "hidden"
                } size-1 absolute bg-green-500 rounded-full -bottom-2 left-[40%]`}
              />
            </div>
            <div className="relative">
              <FaRegFolderClosed
                size={24}
                className={`${
                  pathname == "/projects" ? " text-green-500 md:text-black" : ""
                } hover:-translate-y-1 hover:text-green-500 transition-all ease-in-out cursor-pointer duration-300`}
                onClick={() => {
                  if (pathname != "/projects") {
                    clickSound();
                  }

                  navigate("/projects");
                }}
              />{" "}
              <div
                className={`${
                  pathname == "/projects" ? "block" : "hidden"
                } size-1 absolute bg-green-500 rounded-full -bottom-2 left-[40%]`}
              />
            </div>

            <div className="relative">
              <MdOutlineSchool
                size={30}
                className={`${
                  pathname == "/education"
                    ? " text-green-500 md:text-black"
                    : ""
                } hover:-translate-y-1 hover:text-green-500 transition-all ease-in-out cursor-pointer duration-300`}
                onClick={() => {
                  if (pathname != "/education") {
                    clickSound();
                  }

                  navigate("/education");
                }}
              />{" "}
              <div
                className={`${
                  pathname == "/education" ? "block" : "hidden"
                } size-1 absolute bg-green-500 rounded-full -bottom-2 left-[40%]`}
              />
            </div>

            {/* <div className="relative">
          <RiBriefcase2Line
            size={25}
            className="hover:-translate-y-1 hover:text-blue-500 transition-all ease-in-out cursor-pointer duration-300"
            onClick={() => {
              navigate("/work");
            }}
          />{" "}
          <div
            className={`${
              pathname == "/work" ? "block" : "hidden"
            } size-1 absolute bg-blue-500 rounded-full -bottom-2 left-[40%]`}
          />
        </div> */}
            {/* <div className="relative">
          <RiBallPenLine
            size={25}
            className="hover:-translate-y-1 hover:text-blue-500 transition-all ease-in-out cursor-pointer duration-300"
            onClick={() => {
              navigate("/blogs");
            }}
          />{" "}
          <div
            className={`${
              pathname == "/blogs" ? "block" : "hidden"
            } size-1 absolute bg-blue-500 rounded-full -bottom-2 left-[40%]`}
          />
        </div> */}
            <div className="relative">
              <ImConnection
                size={25}
                className={`${
                  pathname == "/socials" ? " text-green-500 md:text-black" : ""
                } hover:-translate-y-1 hover:text-green-500 transition-all ease-in-out cursor-pointer duration-300`}
                onClick={() => {
                  if (pathname != "/socials") {
                    clickSound();
                  }
                  navigate("/socials");
                }}
              />{" "}
              <div
                className={`${
                  pathname == "/socials" ? "block" : "hidden"
                } size-1 absolute bg-green-500 rounded-full -bottom-2 left-[43%]`}
              />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default LayoutPage;
