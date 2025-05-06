"use client";
import { useEffect } from "react";

const ClickBurst = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("header") ||
        target.closest("nav") ||
        target.closest("footer")
      ) {
        return;
      }
      const burstContainer = document.createElement("div");
      burstContainer.style.position = "absolute";
      burstContainer.style.left = `${e.pageX}px`;
      burstContainer.style.top = `${e.pageY}px`;
      burstContainer.style.pointerEvents = "none";

      for (let i = 0; i < 6; i++) {
        const dot = document.createElement("div");
        const size = 6 + Math.random() * 4; // 2–3mm range
        // const color = `hsl(${Math.floor(Math.random() * 360)}, 90%, 60%)`;
        const color = "#22c55e"; // Tailwind's green-500

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.borderRadius = "50%";
        dot.style.backgroundColor = color;
        dot.style.position = "absolute";
        dot.style.left = "0px";
        dot.style.top = "0px";

        const angle = Math.random() * 2 * Math.PI;
        const distance = 20 + Math.random() * 10;

        dot.animate(
          [
            { transform: "translate(0, 0)", opacity: 1 },
            {
              transform: `translate(${Math.cos(angle) * distance}px, ${
                Math.sin(angle) * distance
              }px)`,
              opacity: 0,
            },
          ],
          {
            duration: 500 + Math.random() * 200,
            easing: "ease-out",
          }
        );

        burstContainer.appendChild(dot);
      }

      document.body.appendChild(burstContainer);

      setTimeout(() => {
        document.body.removeChild(burstContainer);
      }, 400);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default ClickBurst;
