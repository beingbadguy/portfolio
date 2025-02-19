import { motion } from "motion/react";
import Education from "../components/Education";

const EducationPage = () => {
  return (
    <motion.div
      className=" m-4 flex flex-col items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
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
    </motion.div>
  );
};

export default EducationPage;
