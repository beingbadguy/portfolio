import { useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { MdAutoAwesome } from "react-icons/md";
type Visitor = {
  visitor: number;
};

export default function VisitorButton({ visitor }: Visitor) {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, visitor, {
      type: "spring",
      stiffness: 90,
      damping: 12,
      mass: 0.5,
      onUpdate: (latest) => {
        setDisplayCount(Math.floor(latest));
      },
    });

    return controls.stop;
  }, [visitor]);

  return (
    <div className="w-full flex items-center justify-start">
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded border-green-500 border text-green-500 hover:opacity-100 hover:text-white text-xs font-semibold tracking-wide
        hover:bg-gradient-to-br hover:from-emerald-400 hover:to-emerald-600
        shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400/50
        transition-all duration-300 ease-in-out my-4 cursor-pointer"
        aria-label={`${visitor} visitors have viewed this site`}
      >
        <MdAutoAwesome className="text-sm" />
        {displayCount.toLocaleString()} Visitors
      </button>
    </div>
  );
}
