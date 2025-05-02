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

      <Work
        name="DecorTwist"
        live="https://decortwist.com/"
        skills={[
          "Shopify",
          "Shiprocket",
          "Wati",
          "Google Docs",
          "Google Sheets",
          "MS Word",
          "MS Excel",
          "MS Powerpoint",
        ]}
        description="As a business analyst in a startup, I analyzed data, created Excel reports, managed customer feedback, and communicated insights with clients and teams. I also prepared presentations and reports in PowerPoint and Word to drive improvements."
        post="Business Analyst"
        from="May 2022"
        to="September 2022"
      />

      <Work
        name="Aimil ltd."
        live="https://www.aimil.com/"
        skills={[
          "VibXpert ||",
          "VibXpert |||",
          "PRUFTECNIK App",
          "Vibration Analysis",
          "Alignment Analysis",
          "MS Word",
          "MS Excel",
          "MS Powerpoint",
        ]}
        description="I collected and analyzed vibration and alignment data using VibXpert II, VibXpert III, and the PRUFTECNIK App. I conducted vibration and alignment assessments, and created detailed reports using MS Word, Excel, and PowerPoint to optimize machine performance."
        post="Service Engineer"
        from="July 2021"
        to="May 2022"
      />
    </motion.div>
  );
};

export default WorkPage;
