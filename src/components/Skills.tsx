import { motion } from "motion/react";
const Skills = ({ skill, yes = true }: { skill: string; yes?: boolean }) => {
  return (
    <motion.div
      className={`text-[12px] md:text-[13px] w-auto p-1 border-gray-300 select-none border ${
        yes ? " " : " border-gray-300 inset-0"
      }     "`}
    >
      {skill}
    </motion.div>
  );
};

export default Skills;
