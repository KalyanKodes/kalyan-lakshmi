import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScrollProgress({ enabled }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress((scrollTop / documentHeight) * 100);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div className="scroll-progress">
      <motion.div
        className="scroll-progress-bar"
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          duration: 0.15,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default ScrollProgress;