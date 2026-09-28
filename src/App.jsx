import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import IntroLoader from "./components/IntroLoader";
import ScrollProgress from "./components/ScrollProgress";
import MusicPlayer from "./components/MusicPlayer";

import Hero from "./sections/Hero";
import BeforeMeeting from "./sections/BeforeMeeting";
import PelliChoopulu from "./sections/PelliChoopulu";
import Simplicity from "./sections/Simplicity";
import Future from "./sections/Future";
import LoveLetter from "./sections/LoveLetter";
import KalyanExe from "./sections/KalyanExe";
import ContactForm from "./sections/ContactForm";
import Ending from "./sections/Ending";

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [started, setStarted] = useState(false);
  const [musicStartSignal, setMusicStartSignal] = useState(0);

  const exeRef = useRef(null);
  const contactRef = useRef(null);

  const handleBegin = () => {
    setMusicStartSignal((value) => value + 1);
    setStarted(true);
  };

  const handleContact = () => {
    requestAnimationFrame(() => {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleBack = () => {
    exeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="app">
      {!introComplete && (
        <IntroLoader onComplete={() => setIntroComplete(true)} />
      )}

      <ScrollProgress enabled={started} />

      <MusicPlayer
        enabled={started}
        startSignal={musicStartSignal}
      />

      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
              transition: {
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
          >
            {introComplete && <Hero onBegin={handleBegin} />}
          </motion.div>
        ) : (
          <motion.div
            key="story"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.65,
                duration: 1.2,
                ease: "easeOut",
              },
            }}
          >
            <BeforeMeeting />

            <PelliChoopulu />

            {/* <Simplicity /> */}

            {/* <Future /> */}

            {/* <LoveLetter /> */}

            <div ref={exeRef}>
              <KalyanExe onContact={handleContact} />
            </div>

            <div ref={contactRef}>
              <ContactForm onBack={handleBack} />
            </div>

            <Ending />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;