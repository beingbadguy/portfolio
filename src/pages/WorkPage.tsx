import { motion } from "framer-motion";
import Work from "../components/Work";
const WorkPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="m-8 mb-20 flex flex-col gap-5  "
    >
      <Work
        name="ParivartanX"
        live="https://www.parivartanx.com/"
        skills={[
          "NextJS",
          "ReactJS",
          "TailwindCSS",
          "Zustand",
          "Axios",
          "ShadCN UI",
        ]}
        description="I am responsible for developing scalable UIs, integrating APIs, managing global state, and handling authentication for seamless user experiences. "
        post="Frontend Developer (Freelancer)"
        from="April 2025"
        to="Present"
      />
    </motion.div>
  );
};

export default WorkPage;
