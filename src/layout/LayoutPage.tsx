import { useEffect, useState } from "react";
import { FaCircle, FaRegFolderClosed } from "react-icons/fa6";
import { ImConnection } from "react-icons/im";
import { RiHome6Line } from "react-icons/ri";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";
import TextScramble from "../components/TextScramble";
import { useAudioStore } from "../store";
import TimeClock from "../components/TimeClock";
import { useLenisScroll } from "../components/useLenisScroll";
import GreetingsMotion from "../components/GreetingsMotion";

const LayoutPage = () => {
  useLenisScroll();

  const { isLight, setTheme, getTheme } = useAudioStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  // const [currentLanguage, setCurrentLanguage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [dotIndex, setDotIndex] = useState<number>(0);

  useEffect(() => {
    if (pathname === "/") {
      setDotIndex(0);
    } else if (pathname === "/projects") {
      setDotIndex(1);
    } else if (pathname === "/education") {
      setDotIndex(2);
    } else if (pathname === "/work") {
      setDotIndex(3);
    } else if (pathname === "/socials") {
      setDotIndex(4);
    } else {
      setDotIndex(0);
    }
  }, [pathname]);

  const clickSound = () => {
    const audio = new Audio("bubble-pop.mp3");
    audio.volume = 0.3;
    audio.play();
  };
  const themeChange = () => {
    // const audio = new Audio("swoosh-5.mp3");
    const audio = new Audio("whistle.mp3");
    // audio.volume = 0.4;
    audio.play();
  };

  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "你好",
    "Hallo",
    "こんにちは",
    "Ciao",
    "Здравствуйте",
    "مرحبا",
    "Olá",
    "안녕하세요",
    "नमस्ते",
  ];

  useEffect(() => getTheme(), []);

  useEffect(() => {
    setLoading(true);
    const interval = setTimeout(() => setLoading(false), 5200);
    return () => clearTimeout(interval);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentLanguage((prev) => {
  //       if (prev < greetings.length - 1) {
  //         return prev + 1;
  //       } else {
  //         clearInterval(interval); // STOP once done
  //         return prev;
  //       }
  //     });
  //   }, 150);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    document.body.style.background = isLight ? "#f0fdf4" : "#0f0b00";
    document.body.style.backgroundImage = `url("https://www.transparenttextures.com/patterns/brilliant.png")`;
  }, [isLight]);

  const getPathName = () => {
    const name = pathname.replace("/", "");
    return name ? name.charAt(0).toUpperCase() + name.slice(1) : "";
  };

  const navigationItems = [
    { icon: <RiHome6Line size={25} />, route: "/" },
    { icon: <FaRegFolderClosed size={20} />, route: "/projects" },
    { icon: <MdOutlineSchool size={25} />, route: "/education" },
    { icon: <MdOutlineWorkOutline size={23} />, route: "/work" },
    { icon: <ImConnection size={22} />, route: "/socials" },
  ];

  const getAnimationProps = () => {
    switch (dotIndex) {
      case 0:
        return { x: 53 * dotIndex };
      case 1:
        return { x: 53 * dotIndex + 1 };
      case 2:
        return { x: 53 * dotIndex + 2 };
      case 3:
        return { x: 53 * dotIndex + 5 };
      case 4:
        return { x: 53 * dotIndex + 7 };
      // Add more cases as needed for each greeting
      default:
        return { x: 53 * dotIndex }; // Default animation
    }
  };

  return (
    <div>
      {/* Carpet Reveal Animation Circle */}
      {isAnimating && (
        <motion.div
          initial={{ scale: 0, x: "100%", y: "100%" }}
          animate={{ scale: 40 }}
          transition={{ duration: 0.8, ease: "linear" }}
          className={`fixed bottom-0 right-0 w-20 h-20 ${
            isLight ? "bg-black" : "bg-green-50"
          } rounded-full z-[999] pointer-events-none`}
          onAnimationComplete={() => {
            setTheme();
            setIsAnimating(false);
          }}
        />
      )}

      {loading ? (
        // <div
        //   className={`${
        //     isLight ? "text-black " : "text-white"
        //   } flex items-center justify-center h-screen font-bold flex-col max-h-[90vh] overflow-hidden min-h-[90vh]`}
        // >
        //   <motion.div
        //     animate={
        //       currentLanguage === greetings.length - 1
        //         ? { scale: [1, 10], opacity: [1, 0] }
        //         : {}
        //     }
        //     transition={{
        //       duration: 0.5,
        //       repeat: Infinity,
        //       repeatType: "reverse",
        //     }}
        //     className="texty text-xl"
        //   >
        //     {greetings[currentLanguage]}
        //   </motion.div>
        // </div>
        <GreetingsMotion greetings={greetings} isLight={isLight} />
      ) : (
        <div className="flex items-center justify-center flex-col text-lg sm:mx-20 md:mx-32 lg:mx-60 xl:mx-92">
          {/* Top Nav */}
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
                    className={`${
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
                  themeChange();
                  setIsAnimating(true);
                }}
              />

              <div
                className={`${
                  isLight ? "text-gray-800" : "text-white"
                } flex items-center gap-2`}
              >
                <TimeClock /> IST
              </div>
            </div>
          </nav>

          <hr
            className={`w-full border ${
              isLight ? "border-green-300" : "border-white"
            }`}
          />

          {/* Main Outlet */}
          <div className="w-full">
            <Outlet />
          </div>

          {/* Bottom Nav */}
          <nav
            className={`fixed bottom-0 py-3 pb-4 flex items-center gap-8 backdrop-blur-lg w-full justify-center bg-transparent rounded-md bg-clip-padding backdrop-filter bg-opacity-10 ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            <div className="relative flex items-center gap-8">
              {navigationItems.map((item, i) => {
                const isActive = pathname === item.route;
                return (
                  <div className="relative  " key={i}>
                    <div
                      className={`hover:-translate-y-1 transition-all ease-in-out cursor-pointer duration-300 ${
                        isActive && isLight
                          ? "text-green-500 md:text-black"
                          : ""
                      }`}
                      onClick={() => {
                        if (!isActive) clickSound();
                        navigate(item.route);
                        if (item.route === "/") {
                          setDotIndex(0);
                        } else if (item.route === "/projects") {
                          setDotIndex(1);
                        } else if (item.route === "/education") {
                          setDotIndex(2);
                        } else if (item.route === "/work") {
                          setDotIndex(3);
                        } else if (item.route === "/socials") {
                          setDotIndex(4);
                        } else {
                          setDotIndex(0);
                        }
                      }}
                    >
                      {item.icon}
                    </div>
                    {/* <div
                      className={`${
                        isActive ? "block" : "hidden"
                      } size-1 absolute bg-green-500 rounded-full -bottom-2 left-[40%]`}
                    /> */}
                  </div>
                );
              })}
              <motion.div
                initial={false}
                animate={getAnimationProps()}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 24,
                }}
                className={` size-1 top-7 left-[11px] absolute bg-green-500 rounded-full  z-[9999]`}
              />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default LayoutPage;
