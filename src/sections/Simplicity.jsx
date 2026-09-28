import { motion } from "framer-motion";
import { Flower2, Sparkles } from "lucide-react";

function Simplicity() {
  return (
    <section className="simplicity">
      {/* Soft background atmosphere */}
      <div className="simplicity-glow" />

      {/* Traditional decorative elements */}
      <div className="jasmine jasmine-one">✿</div>
      <div className="jasmine jasmine-two">✿</div>
      <div className="jasmine jasmine-three">✿</div>

      <div className="simplicity-content">

        {/* Chapter */}
        <motion.div
          className="chapter-number"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          03
        </motion.div>

        {/* Kicker */}
        <motion.div
          className="section-kicker"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Flower2 size={14} />

          <span>నాలో నిలిచిపోయింది</span>

          <Flower2 size={14} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          నీ సరళత.
        </motion.h2>

        {/* Intro */}
        <div className="simplicity-intro">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            నీ గురించి నాకు ఇంకా చాలా తెలియదు.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            నీకు ఏం ఇష్టం...
            <br />
            నీ కలలు ఏంటి...
            <br />
            నీకు ఏం నచ్చుతుంది...
            <br />
            ఇవన్నీ ఇంకా తెలుసుకోవాల్సి ఉంది.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            కానీ ఒక విషయం మాత్రం
            <br />
            నా మనసులో నిలిచిపోయింది.
          </motion.p>
        </div>

        {/* Main statement */}
        <motion.div
          className="simplicity-statement"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.45,
          }}
        >
          <span className="statement-line" />

          <div className="statement-symbol">
            ✦
          </div>

          <strong>
            నీ సరళత.
          </strong>

          <span className="statement-line" />
        </motion.div>

        {/* Poem */}
        <motion.div
          className="simplicity-poem"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
        >
          <p>
            అందం కళ్లను ఆకట్టుకుంటుంది...
          </p>

          <p>
            కానీ సరళత
            <br />
            మనసులో నిలిచిపోతుంది.
          </p>

          <div className="poem-space" />

          <p>
            నీ నవ్వులోనో,
          </p>

          <p>
            నీ మాటల్లోనో,
          </p>

          <p>
            నీ సహజత్వంలోనో...
          </p>

          <p className="poem-highlight">
            ఏదో చాలా నిజమైనది అనిపించింది.
          </p>
        </motion.div>

        {/* Village inspired closing */}
        <motion.div
          className="simplicity-closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            duration: 1,
          }}
        >
          <div className="closing-line" />

          <p>
            బహుశా అందుకేనేమో...
            <br />
            నీలో ఉన్న ఆ సహజత్వం
            <br />
            నాకు ఇంతగా నచ్చింది.
          </p>

          <div className="closing-star">
            ✦
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Simplicity;