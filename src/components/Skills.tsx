import { motion } from "motion/react";
const Skills = ({
  skill,
  yes = true,
  icon,
}: {
  skill: string;
  yes?: boolean;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={`text-[12px] md:text-[13px] w-auto p-1 border-gray-300 select-none border ${
        yes ? " " : " border-gray-300 inset-0 flex items-center gap-1"
      }  hover:shadow-sm transition-all duration-300 cursor-pointer  "`}
    >
      {yes ? "" : <div className="">{icon}</div>}

      {skill}
    </motion.div>
  );
};

export default Skills;
