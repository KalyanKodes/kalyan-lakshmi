import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Heart, Phone, MessageCircle } from "lucide-react";

function KalyanExe({ onContact }) {
  const [response, setResponse] = useState(null);

  return (
    <section className="kalyan-exe">
      <div className="exe-grid" />

      <motion.div
        className="exe-window"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="exe-header">
          <div className="exe-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="exe-title">
            <Terminal size={13} />
            <span>KALYAN.EXE</span>
          </div>
        </div>

        <div className="exe-body">
          <div className="exe-line">
            <span className="exe-prompt">&gt;</span>
            <span>initializing...</span>
          </div>

          <div className="exe-line">
            <span className="exe-prompt">&gt;</span>
            <span>heart.status = "initialized"</span>
          </div>

          <div className="exe-line">
            <span className="exe-prompt">&gt;</span>
            <span>person = "లక్ష్మీ"</span>
          </div>

          <div className="exe-line">
            <span className="exe-prompt">&gt;</span>
            <span>future = "unknown"</span>
          </div>

          <div className="exe-line exe-success">
            <span className="exe-prompt">&gt;</span>
            <span>something_beautiful = true</span>
          </div>

          <div className="exe-divider" />

          <motion.div
            className="exe-question"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Heart size={18} fill="currentColor" />

            <p>
              ఒక చిన్న ప్రశ్న...
              <br />
              <strong>
                నాతో ఇంకొంచెం మాట్లాడాలని
                <br />
                నీకూ అనిపిస్తుందా?
              </strong>
            </p>
          </motion.div>

          {!response ? (
            <motion.div
              className="exe-actions"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              <button
                className="exe-button exe-button-primary"
                onClick={() => setResponse("yes")}
              >
                <Heart size={16} fill="currentColor" />
                అవును
              </button>

              <button
                className="exe-button exe-button-secondary"
                onClick={() => setResponse("talk")}
              >
                <MessageCircle size={16} />
                ముందు మాట్లాడుకుందాం
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="exe-response"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {response === "yes" ? (
                <>
                  <p>
                    <Heart size={16} fill="currentColor" />
                    అది విని చాలా సంతోషంగా ఉంది.
                  </p>

                  <span>
                    అయితే... మన కథలో ఇంకొంచెం ముందుకు వెళ్దామా?
                  </span>
                </>
              ) : (
                <>
                  <p>
                    <MessageCircle size={16} />
                    అదే నాకు కూడా కావాలి.
                  </p>

                  <span>
                    ముందుగా ఒకరినొకరం తెలుసుకుందాం.
                    <br />
                    మిగతాదంతా నెమ్మదిగా.
                  </span>
                </>
              )}

              <button
                className="exe-contact-button"
                onClick={onContact}
              >
                <Phone size={16} />
                మాట్లాడుకుందాం
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default KalyanExe;