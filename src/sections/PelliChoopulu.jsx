import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

function PelliChoopulu() {
  return (
    <section className="pelli-choopulu">
      {/* Background atmosphere */}
      <div className="pelli-glow pelli-glow-one" />
      <div className="pelli-glow pelli-glow-two" />

      {/* Traditional decorative circles */}
      <div className="pelli-orbit orbit-one" />
      <div className="pelli-orbit orbit-two" />
      <div className="pelli-orbit orbit-three" />

      <div className="pelli-content">
        {/* Chapter number */}
        <motion.div
          className="chapter-number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          02
        </motion.div>

        {/* Small heading */}
        <motion.div
          className="section-kicker"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles size={14} />

          <span>ఆ రోజు వచ్చింది</span>

          <Sparkles size={14} />
        </motion.div>

        {/* Date */}
        <motion.div
          className="pelli-date"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span>12</span>

          <i>•</i>

          <span>10</span>

          <i>•</i>

          <span>2026</span>
        </motion.div>

        {/* Main title */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 1 }}
        >
          ఈ రోజు...
        </motion.h2>

        {/* First paragraph */}
        <motion.div
          className="pelli-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <p>
            ఇంతకాలం ఒక ఫోటోలో మాత్రమే చూసిన నువ్వు...
          </p>

          <p>
            ఈ రోజు
            <br />
            <span>నా ఎదురుగా కూర్చున్నావు.</span>
          </p>
        </motion.div>

        {/* Main reveal */}
        <motion.div
          className="pelli-reveal"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.75,
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <div className="reveal-line" />

          <div className="reveal-heart">
            <Heart size={22} fill="currentColor" />
          </div>

          <p>
            ఈసారి ఫోటో కాదు.
          </p>

          <strong>
            నువ్వే.
          </strong>

          <div className="reveal-line" />
        </motion.div>

        {/* Poem */}
        <motion.div
          className="pelli-poem"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p>కొన్ని క్షణాలు...</p>

          <p>మన జీవితంలోకి నెమ్మదిగా వస్తాయి.</p>

          <p>
            కానీ వెళ్లిపోయిన తర్వాత
            <br />
            వాటి అర్థం
            <br />
            చాలా కాలం మిగిలిపోతుంది.
          </p>
        </motion.div>

        {/* Closing */}
        <motion.div
          className="pelli-closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <span>✦</span>

          <p>
            బహుశా...
            <br />
            ఈ రోజు అలాంటి ఒక రోజు.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PelliChoopulu;