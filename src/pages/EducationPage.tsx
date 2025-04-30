import { motion } from "motion/react";
import Education from "../components/Education";
import { useAudioStore } from "../store";

const EducationPage = () => {
  const { isLight } = useAudioStore();
  const text = `Those who are committed to nothing, are distracted by everything.`;

  const letters = text.split(" ");

  return (
    <motion.div
      className="m-4 flex flex-col items-center justify-between"
      initial={{ opacity: 0, y: -20, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Education
        imgUrl={"/bits-removebg-preview.png"}
        title="BITS Ghaziabad"
        stream="Computer Science Engineering"
        period="2022 - Appearing"
      />
      <Education
        imgUrl={"/gbpit-removebg-preview.png"}
        title="GB Pant Institute of Technology, Delhi"
        stream="Mechanical Engineering"
        period="2018 - 2021"
      />
      <Education
        imgUrl={"/rsbv-removebg-preview.png"}
        title="RSBV Surajmal Vihar, Delhi"
        stream="Science, Maths, English"
        period="2013 - 2018"
      />
      <div
        className={` ${
          isLight ? "text-black" : "text-white"
        } w-full mt-10 relative select-none p-4 text-sm`}
      >
        <span className="text-6xl tracking-[-24px] transform rotate-180 inline-block ml-2">
          ,,
        </span>
        <div className="-mt-13 ml-7 font-semibold flex gap-2 flex-wrap">
          {letters.map((letter, index) => (
            <motion.h1
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
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
              {letter}
            </motion.h1>
          ))}
        </div>

        <p className="ml-5 mt-3 texty bg-green-100 w-[120px] text-green-700">
          {" "}
          - Bhagwat Geeta
        </p>
      </div>
    </motion.div>
  );
};

export default EducationPage;
