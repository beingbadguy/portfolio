import { BiUser } from "react-icons/bi";
import { FiCornerRightDown } from "react-icons/fi";
import { LuArrowRightLeft } from "react-icons/lu";
import { motion } from "framer-motion"; // fixed import
import { useEffect, useState } from "react";

const ContactAction = () => {
  const [breakpoint, setBreakpoint] = useState("md");
  const [hydrated, setHydrated] = useState(false); // 👈 to wait for actual breakpoint

  useEffect(() => {
    const calcBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 480) setBreakpoint("xs");
      else if (width < 640) setBreakpoint("sm");
      else if (width < 768) setBreakpoint("md");
      else if (width < 1024) setBreakpoint("lg");
      else setBreakpoint("xl");
    };

    calcBreakpoint(); // 👈 first run
    setHydrated(true); // 👈 we're now hydrated and good to go

    window.addEventListener("resize", calcBreakpoint);
    return () => window.removeEventListener("resize", calcBreakpoint);
  }, []);

  const getInitialLeft = () => {
    switch (breakpoint) {
      case "xs":
        return { rotate: 0, x: -40 };
      case "sm":
        return { rotate: 0, x: -50 };
      case "md":
        return { rotate: 0, x: -100 };
      case "lg":
        return { rotate: 0, x: -100 };
      case "xl":
        return { rotate: 0, x: -100 };
      default:
        return { rotate: 0, x: -100 };
    }
  };

  const getInitialRight = () => {
    switch (breakpoint) {
      case "xs":
        return { rotate: 0, x: 40 };
      case "sm":
        return { rotate: 0, x: 50 };
      case "md":
        return { rotate: 0, x: 100 };
      case "lg":
        return { rotate: 0, x: 100 };
      case "xl":
        return { rotate: 0, x: 100 };
      default:
        return { rotate: 0, x: 100 };
    }
  };

  // 👇 Prevent rendering until breakpoint is ready
  if (!hydrated) return null;

  return (
    <div className="flex items-center justify-center flex-col">
      <div className=" text-2xl sm:text-3xl md:text-2xl text-center">
        Let&apos;s Work Together
      </div>

      <div className="flex items-center justify-center gap-2 my-4 md:my-2">
        <motion.div
          initial={getInitialLeft()}
          whileInView={{
            rotate: -12,
            x: 0,
            transition: { duration: 1 },
          }}
          className="shadow-xl"
        >
          <img
            src="./passport.jpg"
            alt="pic"
            className="rounded-md size-16 sm:size-20"
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 6 }}
        >
          <LuArrowRightLeft />
        </motion.span>

        <motion.div
          initial={getInitialRight()}
          whileInView={{
            rotate: 12,
            x: 0,
            transition: { duration: 1 },
          }}
          className="rounded-md bg-gray-100 border-gray-300 border shadow-xl size-16 sm:size-20 flex items-center justify-end flex-col"
        >
          <BiUser className="text-black text-[70px]" />
        </motion.div>
      </div>

      <div className="text-[10px] text-center flex items-center justify-center gap-1 flex-wrap my-3">
        I&apos;ll help you get the website that you&apos;ve been dreaming for.
        Just send me a message
        <FiCornerRightDown className="animate-bounce" />
      </div>
    </div>
  );
};

export default ContactAction;
