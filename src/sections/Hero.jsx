import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

function Hero({ onBegin }) {
  return (
    <section className="hero">
      {/* Decorative background */}
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="hero-mandala">
        <div className="mandala-ring ring-1" />
        <div className="mandala-ring ring-2" />
        <div className="mandala-ring ring-3" />
      </div>

      {/* Main content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        {/* Top label */}
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Sparkles size={14} />

          <span>ఒక చిన్న కథ</span>

          <Sparkles size={14} />
        </motion.div>

        {/* Date */}
        <motion.p
          className="hero-date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          12 • 10 • 2026
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          ఒక అందమైన
          <span>ఆరంభం</span>
        </motion.h1>

        {/* Main message */}
        <motion.div
          className="hero-message"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 1,
          }}
        >
          <p>నువ్వు ఈ పేజీని చూస్తున్నావంటే...</p>

          <p>
            ఈ రోజు ఏదో చాలా
            <br />
            అందమైన విషయం జరిగింది.
          </p>
        </motion.div>

        {/* Decorative divider */}
        <div className="hero-divider">
          <span />
          <span className="divider-star">✦</span>
          <span />
        </div>

        {/* Start button */}
        <motion.button
          className="hero-button"
          onClick={onBegin}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Heart size={17} fill="currentColor" />

          <span>మన కథలోకి రా</span>
        </motion.button>

        {/* Bottom hint */}
        <motion.p
          className="hero-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
          }}
        >
          నెమ్మదిగా కిందికి సాగు...
        </motion.p>
      </motion.div>

      {/* Side decorative text */}
      <div className="hero-side-text">
        <span>క</span>
        <span>ల్యా</span>
        <span>ణ్</span>

        <span className="side-x">×</span>

        <span>ల</span>
        <span>క్ష్మీ</span>
      </div>
    </section>
  );
}

export default Hero;