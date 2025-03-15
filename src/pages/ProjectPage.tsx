import Project from "../components/Project";
import { motion } from "motion/react";

const ProjectPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="m-8 mb-20 flex flex-col gap-5  "
    >
      <Project
        name="JerseyNation"
        live="https://jerseynation.onrender.com/"
        skills={[
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Nodemailer",
          "TailwindCSS",
          "React Query",
          "Axios",
        ]}
        description="JerseyNation, an e-commerce platform for jersey enthusiasts, featuring secure authentication, real-time inventory updates, order tracking, intuitive UI, fast-loading pages, automated email notifications, and a mobile-friendly design. "
        github="https://github.com/beingbadguy/JerseyNation"
      />
      <Project
        name="Chatty"
        live="https://chattyapp-gy71.onrender.com/"
        skills={[
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Socket.io",
          "Zustand",
          "TailwindCSS",
          "React Query",
          "Axios",
        ]}
        description="Chatty, a photo-sharing, real-time talk app with online status, typing indicators, and secure user authentication."
        github="https://github.com/beingbadguy/chattyApp"
      />
      <Project
        name="Bulletin"
        live="https://bulletin-is7s.onrender.com/"
        skills={[
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Nodemailer",
          "TailwindCSS",
          "React Query",
          "Axios",
          "Framer-motion",
        ]}
        description="Bulletin, a blogging platform enabling users to manage and explore blogs with features like account registration, email verification, password recovery, and a powerful search function, all within a clean, engaging design. "
        github="https://github.com/beingbadguy/JerseyNation"
      />{" "}
      <Project
        name="JobConnect"
        live="https://job-connect-taupe.vercel.app/"
        skills={["React.js", "TailwindCSS", "Firebase", "ContextAPI"]}
        description="JobConnect, a job networking platform facilitating seamless interactions between job seekers and employers. Features include user accounts, job search and application capabilities, resume uploads, real-time notifications, and direct employer-candidate connections.
"
        github="https://github.com/beingbadguy/JobConnect"
      />
      <Project
        name="EstateNation"
        live="https://estate-nation.vercel.app/"
        skills={["React.js", "TailwindCSS", "Firebase", "ContextAPI"]}
        description="EstateNation, a real estate platform enabling effortless property transactions with advanced search filters, real-time listings, secure authentication, and a modern, responsive design. "
        github="https://github.com/beingbadguy/EstateNation"
      />{" "}
    </motion.div>
  );
};

export default ProjectPage;
