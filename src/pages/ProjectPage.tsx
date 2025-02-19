import React from "react";
import Project from "../components/Project";
import { motion } from "motion/react";

const ProjectPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="m-4 mb-20 flex flex-col gap-5 "
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
        description="JerseyNation is an e-commerce platform for jersey enthusiasts, offering a seamless shopping experience with secure authentication, real-time inventory updates, and order tracking. It features an intuitive UI, fast-loading pages, and automated email notifications. With a mobile-friendly design, it provides a professional marketplace for sports apparel."
        github="https://github.com/beingbadguy/JerseyNation"
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
        description="Bulletin is a blogging platform where users can create, edit, delete, and explore blogs easily. It offers account registration, email verification, password recovery, and a powerful search feature. With a clean design, it ensures a smooth and engaging experience for writers and readers."
        github="https://github.com/beingbadguy/JerseyNation"
      />{" "}
      <Project
        name="JobConnect"
        live="https://job-connect-taupe.vercel.app/"
        skills={["React.js", "TailwindCSS", "Firebase", "ContextAPI"]}
        description="JobConnect is a job networking platform where users can create accounts, search for jobs, and apply easily. Employers can post job listings, review applications, and connect with candidates. With resume uploads and real-time notifications, it simplifies job searching and hiring.
"
        github="https://github.com/beingbadguy/JobConnect"
      />
      <Project
        name="EstateNation"
        live="https://estate-nation.vercel.app/"
        skills={["React.js", "TailwindCSS", "Firebase", "ContextAPI"]}
        description="EstateNation is a real estate platform that helps users buy, sell, and explore properties effortlessly. It offers advanced search filters, real-time property listings, and secure user authentication. With a modern UI and responsive design, EstateNation ensures a smooth and efficient property browsing experience."
        github="https://github.com/beingbadguy/EstateNation"
      />{" "}
    </motion.div>
  );
};

export default ProjectPage;
