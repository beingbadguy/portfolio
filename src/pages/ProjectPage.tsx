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
        name="BASICS"
        live="https://shopbasics.vercel.app/"
        skills={[
          "Next.js",
          "MongoDB",
          "Nodemailer",
          "TailwindCSS",
          "Zustand",
          "Axios",
        ]}
        description="BASICS is a modern e-commerce platform built for a seamless shopping experience, supporting multiple product categories and a full-featured admin dashboard. It’s designed to be fast, intuitive, and scalable — perfect for growing online stores. "
        github="https://github.com/beingbadguy/BASICS"
      />
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
        name="JobConnect"
        live="https://job-connect-taupe.vercel.app/"
        skills={["React.js", "TailwindCSS", "Firebase", "ContextAPI"]}
        description="JobConnect, a job networking platform facilitating seamless interactions between job seekers and employers. Features include user accounts, job search and application capabilities, resume uploads, real-time notifications, and direct employer-candidate connections.
"
        github="https://github.com/beingbadguy/JobConnect"
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
        name="Amy"
        live="https://lenny-phi.vercel.app/"
        skills={[
          "React.js",
          "Firebase",
          "EmailJS",
          "TailwindCSS",
          "ContextAPI",
        ]}
        description="Amy is a dynamic e-commerce platform designed to provide users with a seamless online shopping experience. It offers a wide range of products with advanced features like secure user authentication, smooth checkout processes and email notifications. "
        github="https://github.com/beingbadguy/JerseyNation"
      />{" "}
      <Project
        name="Coolors Clone"
        live="https://colorshader.vercel.app/"
        skills={["React.js", "TailwindCSS", "ContextAPI", "Firebase"]}
        description="Coolors Clone is a sleek and intuitive color palette generator built with React.js, TailwindCSS, and Firebase. It allows users to effortlessly create, explore, and save stunning color combinations. With real-time updates, seamless user authentication, and a dynamic UI, this tool makes color selection and inspiration easier than ever."
        github="https://github.com/beingbadguy/coolorsClone"
      />{" "}
      <Project
        name="EstateNation"
        live="https://estate-nation.vercel.app/"
        skills={["React.js", "TailwindCSS", "Firebase", "ContextAPI"]}
        description="EstateNation, a real estate platform enabling effortless property transactions with advanced search filters, real-time listings, secure authentication, and a modern, responsive design. "
        github="https://github.com/beingbadguy/EstateNation"
      />{" "}
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
        name="Pinterest Clone"
        live="https://pinterest-frontend-xi.vercel.app/home"
        skills={[
          "React.js",
          "Typescript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Nodemailer",
          "TailwindCSS",
          "React Query",
          "Axios",
          "Framer-motion",
          "Zustand",
          "Cloudinary",
        ]}
        description="Pinterest Clone, a visual discovery platform that enables users to explore, save, and share creative ideas. With features like user authentication, image uploads, real-time notifications, personalized boards, and an intuitive search, it offers a seamless and engaging experience for discovering and organizing inspiration."
        github="https://pinterest-frontend-xi.vercel.app/home"
      />{" "}
    </motion.div>
  );
};

export default ProjectPage;
