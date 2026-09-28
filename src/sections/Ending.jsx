import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

function Ending() {
  return (
    <section className="ending">
      <div className="ending-glow" />

      <div className="ending-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="ending-heart"
        >
          <Heart size={22} fill="currentColor" />
        </motion.div>

        <motion.div
          className="ending-kicker"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Sparkles size={13} />
          <span>మన కథ</span>
          <Sparkles size={13} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 1 }}
        >
          లక్ష్మీ...
        </motion.h2>

        <motion.div
          className="ending-message"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65, duration: 1 }}
        >
          <p>
            ఈ రోజు ఒక పరిచయం మొదలైంది.
          </p>

          <p>
            అది ఎక్కడికి తీసుకెళ్తుందో
            <br />
            మనకు ఇంకా తెలియదు.
          </p>

          <p>
            కానీ ఆ ప్రయాణం
            <br />
            <span>నీతో మొదలవుతుందని</span>
            <br />
            ఆలోచించడం నాకు చాలా ఇష్టం.
          </p>
        </motion.div>

        <motion.div
          className="ending-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span />
          <i>✦</i>
          <span />
        </motion.div>

        <motion.div
          className="ending-names"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <strong>కల్యాణ్</strong>
          <span>×</span>
          <strong>లక్ష్మీ</strong>
        </motion.div>

        <motion.p
          className="ending-signature"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          — కల్యాణ్
        </motion.p>

        <motion.p
          className="ending-footnote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          కొన్ని కథలకు ముగింపు ఉండదు...
          <br />
          అవి అక్కడి నుంచే మొదలవుతాయి.
        </motion.p>
      </div>
    </section>
  );
}

export default Ending;