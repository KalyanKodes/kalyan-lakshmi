import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

function LoveLetter() {
  return (
    <section className="love-letter">
      <div className="love-letter-glow" />

      <div className="love-letter-content">
        <motion.div
          className="chapter-number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          05
        </motion.div>

        <motion.div
          className="section-kicker"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles size={14} />
          <span>నీ కోసం కొన్ని మాటలు</span>
          <Sparkles size={14} />
        </motion.div>

        <motion.div
          className="letter-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>లక్ష్మీ...</p>
          <h2>నీకు ఒక విషయం చెప్పాలి.</h2>
        </motion.div>

        <motion.div
          className="letter-body"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 1 }}
        >
          <p>
            జీవితంలో కొన్ని పరిచయాలు
            <br />
            మనం ప్లాన్ చేసుకోము.
          </p>

          <p>
            అవి ఎప్పుడు వస్తాయో కూడా
            <br />
            మనకు తెలియదు.
          </p>

          <p>
            కానీ వచ్చిన తర్వాత...
            <br />
            మనసులో ఒక చిన్న చోటు
            <br />
            వాటికోసం ఖాళీగా ఉందని
            <br />
            అప్పుడు మాత్రమే తెలుస్తుంది.
          </p>
        </motion.div>

        <motion.div
          className="letter-heart"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65, duration: 0.8 }}
        >
          <Heart size={25} fill="currentColor" />
        </motion.div>

        <motion.div
          className="letter-confession"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p>
            నిన్ను చూసిన తర్వాత
            <br />
            నా మనసులో కూడా
            <br />
            అలాంటి ఒక చోటు ఏర్పడింది.
          </p>

          <p>
            దానికి ఇప్పుడే
            <br />
            ఏ పేరు పెట్టాలో నాకు తెలియదు.
          </p>

          <p className="letter-highlight">
            కానీ అది నిజమైన అనుభూతి అని మాత్రం
            <br />
            నాకు అనిపిస్తోంది.
          </p>
        </motion.div>

        <motion.div
          className="letter-poem"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.05, duration: 1 }}
        >
          <p>పరిచయం చిన్నదైనా...</p>
          <p>అనుభూతి పెద్దదై ఉండొచ్చు.</p>

          <div className="letter-poem-space" />

          <p>మాటలు తక్కువైనా...</p>
          <p>మనసు చాలా చెప్పొచ్చు.</p>

          <div className="letter-poem-space" />

          <p className="letter-poem-highlight">
            బహుశా...
            <br />
            మన కథ కూడా
            <br />
            ఇలాగే మొదలవుతుందేమో.
          </p>
        </motion.div>

        <motion.div
          className="letter-closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <div className="letter-closing-line" />

          <p>
            నీకు తెలుసా లక్ష్మీ...
            <br />
            <strong>
              నిన్ను తెలుసుకోవాలనే కోరిక
              <br />
              ఇప్పుడు నాకు చాలా ఉంది.
            </strong>
          </p>

          <div className="letter-closing-star">✦</div>
        </motion.div>
      </div>
    </section>
  );
}

export default LoveLetter;