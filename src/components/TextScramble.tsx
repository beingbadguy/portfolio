import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface TextScrambleProps {
  text: string;
}

const TextScramble: React.FC<TextScrambleProps> = ({ text }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const chars = "!@#$%^&*()_+1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const navigate = useNavigate();

  const scrambleText = useCallback(() => {
    let i = 0;
    const interval = setInterval(() => {
      setScrambledText((prev) =>
        prev
          .split("")
          .map((c, index) =>
            index < i
              ? text[index]
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join("")
      );
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);
  }, [text]);

  useEffect(() => {
    // scrambleText();
  }, [scrambleText]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={scrambleText} // Trigger scrambling on hover
      className="hover:text-green-500 cursor-pointer transition-all duration-200 "
      onClick={() => {
        navigate("/");
      }}
    >
      {scrambledText}
    </motion.h1>
  );
};

export default TextScramble;
