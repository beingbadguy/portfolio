import { motion } from "motion/react";
import { useAudioStore } from "../store";
interface educationPropType {
  imgUrl: string;
  title: string;
  stream: string;
  period: string;
}
const Education = (prop: educationPropType) => {
  const { isLight } = useAudioStore();
  return (
    <motion.div
      animate={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className={`flex items-start justify-between mt-4 text-[10px] sm:text-[12px] md:text-md w-full cursor-pointer p-2  ${
        isLight
          ? " hover:text-black hover:bg-green-200 "
          : "hover:text-black hover:bg-white "
      } group rounded transition-all duration-200  
`}
    >
      <div className="flex items-center gap-6  w-full">
        <div className="">
          <img
            src={prop.imgUrl}
            alt=""
            className="size-14 md:size-12 rounded-[100%] object-contain"
          />
        </div>

        <div className="flex items-start justify-between w-full flex-col md:flex-row">
          <div
            className={
              " w-[100%]" +
              " " +
              (isLight ? "text-black" : "text-white group-hover:text-black")
            }
          >
            <p className="font-bold">{prop.title}</p>
            <p>{prop.stream}</p>
          </div>

          <div className="text-neutral-400 group-hover:text-green-700 md:text-right">
            <p className="whitespace-nowrap">{prop.period}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
