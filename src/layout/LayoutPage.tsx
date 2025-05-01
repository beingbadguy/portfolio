import { useEffect, useState } from "react";
import { FaCircle, FaRegFolderClosed } from "react-icons/fa6";
import { ImConnection } from "react-icons/im";
import { RiHome6Line } from "react-icons/ri";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineSchool } from "react-icons/md";
import { motion } from "motion/react";
import TextScramble from "../components/TextScramble";
import { useAudioStore } from "../store";

const LayoutPage = () => {
  const [date, setDate] = useState<string>("");
  const { isLight, setTheme, getTheme } = useAudioStore();
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
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "你好",
    "こんにちは",
    "Ciao",
    "Здравствуйте",
    "مرحبا",
    "Olá",
    "안녕하세요",
    "नमस्ते",
  ];

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    setLoading(true);
    const interval = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) =>
        prev < greetings.length - 1 ? prev + 1 : greetings.length - 1
      );
    }, 320);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeChanger = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timeChanger);
  }, []);

  useEffect(() => {
    document.body.style.background = isLight ? "#f0fdf4" : "#000000";
    document.body.style.backgroundImage = isLight
      ? `url("https://www.transparenttextures.com/patterns/brilliant.png")`
      : "none";
  }, [isLight]);

  const getPathName = () => {
    const name = pathname.replace("/", "");
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : "";
  };

  return (
    <div>
      {loading ? (
        <div
          className={` ${
            isLight ? "text-black " : "text-white"
          } flex items-center justify-center h-screen font-bold flex-col`}
        >
          <motion.div
            animate={
              currentLanguage === greetings.length - 1
                ? { scale: [1, 10], opacity: [1, 0] }
                : {}
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
        <div
          className={`flex items-center justify-center flex-col text-lg sm:mx-20 md:mx-32 lg:mx-60 xl:mx-92`}
        >
          <nav className="flex items-center justify-between p-4 w-full mt-2 text-sm md:text-lg">
            <div className="flex items-center gap-1 flex-wrap">
              <TextScramble text="Aman Kumar" />
              {pathname !== "/" && (
                <>
                  <span
                    className={`${isLight ? "text-gray-400" : "text-white"}`}
                  >
                    /
                  </span>
                  <div
                    className={` ${
                      isLight ? "text-black" : "text-white"
                    } hover:text-green-600 cursor-pointer transition-all duration-200`}
                  >
                    {getPathName()}
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center gap-4">
              <FaCircle
                className={`${
                  isLight ? "text-green-400" : "text-white"
                } animate-pulse cursor-pointer`}
                onClick={() => {
                  setTheme();
                  clickSound();
                }}
              />
              <p className={`${isLight ? "text-gray-800" : "text-white"}`}>
                {date} IST
              </p>
            </div>
          </nav>

          <hr
            className={`w-full border ${
              isLight ? "border-green-300" : "border-white"
            }`}
          />

          <div className="w-full">
            <Outlet />
          </div>

          <nav
            className={`fixed bottom-0 py-3 pb-4 flex items-center gap-8 backdrop-blur-lg w-full justify-center ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            {[
              { icon: <RiHome6Line size={25} />, route: "/" },
              { icon: <FaRegFolderClosed size={20} />, route: "/projects" },
              { icon: <MdOutlineSchool size={25} />, route: "/education" },
              { icon: <ImConnection size={22} />, route: "/socials" },
            ].map((item, i) => {
              const isActive = pathname === item.route;
              return (
                <div className="relative" key={i}>
                  <div
                    className={`hover:-translate-y-1 transition-all ease-in-out cursor-pointer duration-300 ${
                      isActive && isLight ? "text-green-500 md:text-black" : ""
                    }`}
                    onClick={() => {
                      if (!isActive) clickSound();
                      navigate(item.route);
                    }}
                  >
                    {item.icon}
                  </div>
                  <div
                    className={`${
                      isActive ? "block" : "hidden"
                    } size-1 absolute bg-green-500 rounded-full -bottom-2 left-[40%]`}
                  />
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
};

export default LayoutPage;
