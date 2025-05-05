import { BiUser } from "react-icons/bi";
import { FiCornerRightDown } from "react-icons/fi";
import { LuArrowRightLeft } from "react-icons/lu";
import { motion } from "motion/react";

const ContactAction = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      {/* <div className="shadow-md bg-gray-50 p-2 rounded-lg text-[12px] my-2 text-gray-300 border-gray-100 border">
        @beingbadguy
      </div> */}
      <div className="text-3xl md:text-2xl text-center">
        Let&apos;s Work Together
      </div>

      <div className="flex items-center justify-center gap-2 my-4 md:my-2">
        <motion.div
          initial={{ rotate: 0, x: -100 }}
          whileInView={{
            rotate: -12,
            x: 0,
            transition: { duration: 1 },
          }}
          className="  shadow-xl"
        >
          <img
            src="./passport.jpg"
            alt="pic"
            className="rounded-md size-20  "
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
          initial={{ rotate: 0, x: 100 }}
          whileInView={{
            rotate: 12,
            x: 0,
            transition: { duration: 1 },
          }}
          className="rounded-md   bg-gray-100 border-gray-300 border shadow-xl size-20 flex items-center justify-end flex-col"
        >
          <BiUser className=" text-black text-[70px]" />
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
