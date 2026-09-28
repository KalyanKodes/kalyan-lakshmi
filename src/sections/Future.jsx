import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

function Future() {
  return (
    <section className="future">
      <div className="future-glow future-glow-one" />
      <div className="future-glow future-glow-two" />

      <div className="future-content">
        <motion.div
          className="chapter-number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          04
        </motion.div>

        <motion.div
          className="section-kicker"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles size={14} />
          <span>ఒక ఆలోచన</span>
          <Sparkles size={14} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          రేపటి గురించి...
        </motion.h2>

        <motion.div
          className="future-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          <p>
            మన గురించి
            <br />
            ఇప్పుడే చాలా పెద్ద మాటలు చెప్పాలని లేదు.
          </p>

          <p>
            ఎందుకంటే మన కథ
            <br />
            ఇప్పుడే మొదలైంది.
          </p>
        </motion.div>

        <motion.div
          className="future-highlight"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 1 }}
        >
          <div className="future-heart">
            <Heart size={20} fill="currentColor" />
          </div>

          <p>
            కానీ...
            <br />
            ఒక ఆలోచన మాత్రం
            <br />
            నాకు చాలా ఆనందంగా ఉంది.
          </p>
        </motion.div>

        <motion.div
          className="future-statement"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <span className="future-line" />

          <p>
            నీతో నా మిగిలిన జీవితాన్ని
            <br />
            పంచుకోవాలనే ఆలోచన
            <br />
            <strong>నాకు చాలా ఆనందంగా ఉంది.</strong>
          </p>

          <span className="future-line" />
        </motion.div>

        <motion.div
          className="future-poem"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p>ఒకే ఇంటి కిటికీ దగ్గర</p>
          <p>రెండు జీవితాల ఉదయాలు...</p>

          <div className="future-poem-space" />

          <p>చిన్న చిన్న మాటలు,</p>
          <p>తెలియని నవ్వులు,</p>
          <p>కలిసి ఎదురుచూసే రేపులు...</p>

          <p className="future-poem-highlight">
            ఇవన్నీ ఊహించుకోవడం
            <br />
            నాకు చాలా అందంగా అనిపిస్తోంది.
          </p>
        </motion.div>

        <motion.div
          className="future-closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.35, duration: 1 }}
        >
          <span>✦</span>

          <p>
            బహుశా...
            <br />
            ప్రేమ అనేది
            <br />
            ఇలాగే నెమ్మదిగా మొదలవుతుందేమో.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Future;