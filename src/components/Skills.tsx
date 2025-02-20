import { motion } from "motion/react";
const Skills = ({ skill, yes = true }: { skill: string; yes?: boolean }) => {
  return (
    <motion.div
      initial={
        !yes
          ? {
              y:  - 20, // Random drop height from -200 to -500px
              rotateX: Math.random() * 120 - 60, // Random rotationX from -60 to 60 degrees
              rotateZ: Math.random() * 40 - 20, // Random rotationZ from -20 to 20 degrees
              opacity: 0, // Start invisibles
            }
          : {}
      }
      animate={!yes ? { y: 0, rotateX: 0, rotateZ: 0, opacity: 1 } : {}}
      transition={
        !yes
          ? {
              type: "spring",
              stiffness: 50, // Controls the speed of the bounce
              damping: 4, // Controls the smoothness
              mass: 0.8, // Adjusts the weight of the animation
            }
          : {}
      }
      className={` w-auto p-1 text-sm select-none border ${
        yes ? "texty tracking-widest" : " border-green-500 "
      } rounded `}
    >
      {skill}
    </motion.div>
  );
};

export default Skills;
