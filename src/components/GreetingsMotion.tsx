import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GreetingsMotion = ({
  greetings,
  isLight = false,
}: {
  greetings: string[];
  isLight?: boolean;
}) => {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  console.log(currentLanguage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval); // STOP once done
          return prev;
        }
      });
    }, 400);

    return () => clearInterval(interval);
  }, [greetings.length]);

  const isLast = currentLanguage === greetings.length - 1;

  return (
    <div
      className={`${
        isLight ? "text-black" : "text-white"
      } flex items-center justify-center h-screen font-bold flex-col max-h-[90vh] overflow-hidden min-h-[90vh]`}
    >
      <motion.div
        key={greetings[currentLanguage]}
        initial={{ opacity: 1, scale: 1 }}
        //   initial={false}
        animate={
          isLast
            ? { scale: [1, 10], opacity: [1, 0] }
            : {
                opacity: 1,
              }
        }
        transition={
          isLast
            ? {
                duration: 0.5, // slow boom!
                delay: 0.1, // wait before scaling
                ease: "easeInOut",
              }
            : {
                duration: 0.5,
              }
        }
        className="texty text-xl"
      >
        {greetings[currentLanguage]}
      </motion.div>
    </div>
  );
};

export default GreetingsMotion;
