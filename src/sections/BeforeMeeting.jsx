import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function BeforeMeeting() {
  return (
    <section className="before-meeting">
      {/* Background decoration */}
      <div className="before-glow" />

      <div className="chapter-number">01</div>

      <motion.div
        className="before-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1 }}
      >
        {/* Chapter heading */}
        <div className="section-kicker">
          <Sparkles size={14} />
          <span>ఒక చిన్న అనుభూతి</span>
          <Sparkles size={14} />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.9 }}
        >
          నిజం చెప్పాలంటే...
        </motion.h2>

        {/* Main paragraphs */}
        <div className="before-text">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            నిన్ను కలవకముందే
            <br />
            నీ గురించి నాకు ఒక చిన్న అనుభూతి కలిగింది.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            నీ ఫోటో చూసినప్పుడు...
            <br />
            ఎందుకో తెలియదు.
            <br />
            మనసులో ఏదో ఒక చోట
            <br />
            <span className="highlight-text">
              నువ్వు ప్రత్యేకంగా అనిపించావు.
            </span>
          </motion.p>
        </div>

        {/* Divider */}
        <div className="chapter-divider">
          <span />
          <i>✦</i>
          <span />
        </div>

        {/* Main poem */}
        <motion.div
          className="before-poem"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <p>ఇది ప్రేమో...</p>

          <p>ఆకర్షణో...</p>

          <p>లేక ఏదో తెలియని అనుభూతో...</p>

          <p className="poem-gap">నాకు ఇంకా తెలియదు.</p>

          <p>కానీ నిన్ను చూసినప్పుడు</p>

          <p>మనసులో ఏదో ఒక చోట</p>

          <p className="gold-poem">
            పూర్తయినట్టుగా అనిపించింది.
          </p>
        </motion.div>

        {/* Closing thought */}
        <motion.div
          className="before-closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="small-star">✦</div>

          <p>
            బహుశా...
            <br />
            కొన్ని అనుభూతులకు
            <br />
            కారణాలు ఉండవు.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default BeforeMeeting;