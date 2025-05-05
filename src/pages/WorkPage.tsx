import { motion } from "framer-motion";
import Work from "../components/Work";

const workExperience = [
  {
    name: "ParivartanX",
    live: "https://www.parivartanx.com/",
    skills: [
      "NextJS",
      "ReactJS",
      "TailwindCSS",
      "Zustand",
      "Axios",
      "ShadCN UI",
    ],
    description:
      "I am responsible for developing scalable UIs, integrating APIs, managing global state, and handling authentication for seamless user experiences.",
    post: "Frontend Developer (Freelancer)",
    from: "April 2025",
    to: "Present",
  },
  {
    name: "DecorTwist",
    live: "https://decortwist.com/",
    skills: [
      "Shopify",
      "Shiprocket",
      "Wati",
      "Google Docs",
      "Google Sheets",
      "MS Word",
      "MS Excel",
      "MS Powerpoint",
    ],
    description:
      "As a business analyst in a startup, I analyzed data, created Excel reports, managed customer feedback, and communicated insights with clients and teams. I also prepared presentations and reports in PowerPoint and Word to drive improvements.",
    post: "Business Analyst",
    from: "May 2022",
    to: "September 2022",
  },
  {
    name: "Aimil ltd.",
    live: "https://www.aimil.com/",
    skills: [
      "VibXpert ||",
      "VibXpert |||",
      "PRUFTECNIK App",
      "Vibration Analysis",
      "Alignment Analysis",
      "MS Word",
      "MS Excel",
      "MS Powerpoint",
    ],
    description:
      "I collected and analyzed vibration and alignment data using VibXpert II, VibXpert III, and the PRUFTECNIK App. I conducted vibration and alignment assessments, and created detailed reports using MS Word, Excel, and PowerPoint to optimize machine performance.",
    post: "Service Engineer",
    from: "July 2021",
    to: "May 2022",
  },
];

const WorkPage = () => {
  return (
    <motion.div className="m-8 mb-20 flex flex-col gap-5">
      {workExperience.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, filter: "blur(1px)" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.6,
              delay: index * 0.2, // Staggered ripple effect
            },
          }}
          viewport={{ once: true }}
        >
          <Work {...job} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WorkPage;
