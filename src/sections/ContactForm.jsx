import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowRight, Check, Heart, Phone, Send } from "lucide-react";

function ContactForm({ onBack }) {
    const [status, setStatus] = useState("idle");


    const isValidIndianMobile = (phone) => {
        const cleaned = phone.replace(/\D/g, "");

        if (cleaned.length === 12 && cleaned.startsWith("91")) {
            return /^[6-9]\d{9}$/.test(cleaned.slice(2));
        }

        return /^[6-9]\d{9}$/.test(cleaned);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (status === "sending") {
            return;
        }


        const form = event.currentTarget;

        const phone = form.phone.value.trim();

        if (!isValidIndianMobile(phone)) {
            setStatus("invalid-phone");
            return;
        }

        if (!import.meta.env.VITE_ENABLE_CONTACT_FORM) {
            return;
        }

        setStatus("sending");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setStatus("success");
            form.reset();
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <section className="contact-form-section">
                <div className="contact-glow" />

                <motion.div
                    className="contact-content contact-success"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="contact-success-icon">
                        <Check size={25} />
                    </div>

                    <h2>చేరింది.</h2>

                    <p>
                        నీ సందేశం నాకు చేరింది.
                        <br />
                        సరైన సమయంలో నీకు కాల్ చేస్తాను.
                    </p>

                    <div className="contact-success-heart">
                        <Heart size={17} fill="currentColor" />
                    </div>

                    <p className="contact-success-small">
                        మన కథలో మరో చిన్న అడుగు...
                    </p>

                    <button
                        className="contact-back"
                        type="button"
                        onClick={onBack}
                    >
                        <ArrowRight size={15} />
                        <span>తిరిగి వెళ్దాం</span>
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="contact-form-section">
            <div className="contact-glow" />

            <motion.div
                className="contact-content"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1 }}
            >
                <div className="chapter-number">06</div>

                <div className="contact-icon">
                    <Heart size={20} fill="currentColor" />
                </div>

                <h2>మాట్లాడుకుందామా?</h2>

                <p className="contact-intro">
                    నీకు సౌకర్యంగా ఉంటే...
                    <br />
                    మనం ఇంకొంచెం మాట్లాడుకోవచ్చు.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">నీ పేరు</label>

                        {/* <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="నీ పేరు"
                            autoComplete="name"
                            required
                            disabled={status === "sending"}
                        /> */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">మొబైల్ నంబర్</label>

                        <div className="input-with-icon">
                            <Phone size={16} />

                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                pattern="[6-9][0-9]{9}"
                                maxLength="13"
                                placeholder="మొబైల్ నంబర్"
                                autoComplete="tel"
                                inputMode="tel"
                                required
                                disabled={status === "sending"}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="preferred_time">
                            ఎప్పుడు మాట్లాడటం నీకు సౌకర్యంగా ఉంటుంది?
                        </label>

                        <select
                            id="preferred_time"
                            name="preferred_time"
                            defaultValue=""
                            required
                            disabled={status === "sending"}
                        >
                            <option value="" disabled>
                                ఒక సమయం ఎంచుకో
                            </option>

                            <option value="ఉదయం">
                                ఉదయం
                            </option>

                            <option value="మధ్యాహ్నం">
                                మధ్యాహ్నం
                            </option>

                            <option value="సాయంత్రం">
                                సాయంత్రం
                            </option>

                            <option value="రాత్రి">
                                రాత్రి
                            </option>
                        </select>
                    </div>

                    {status === "invalid-phone" && (
                        <motion.p
                            className="contact-error"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            దయచేసి సరైన మొబైల్ నంబర్ ఇవ్వు.
                            <br />
                            ఉదాహరణ: 9876543210
                        </motion.p>
                    )}

                    {status === "error" && (
                        <motion.p
                            className="contact-error"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            సందేశం పంపించడంలో సమస్య వచ్చింది.
                            <br />
                            దయచేసి మరొకసారి ప్రయత్నించు.
                        </motion.p>
                    )}

                    <motion.button
                        type="submit"
                        className="contact-submit"
                        disabled={status === "sending"}
                        whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                        whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                    >
                        {status === "sending" ? (
                            <>
                                <span className="contact-spinner" />
                                <span>పంపిస్తున్నాను...</span>
                            </>
                        ) : (
                            <>
                                <Send size={16} />
                                <span>నా నంబర్ పంపించు</span>
                            </>
                        )}
                    </motion.button>
                </form>

                <p className="contact-note">
                    నీకు సౌకర్యంగా అనిపిస్తే మాత్రమే పంపించు.
                    <br />
                    ఎలాంటి ఒత్తిడి లేదు.
                </p>

                <button
                    className="contact-back"
                    type="button"
                    onClick={onBack}
                >
                    <ArrowRight size={15} />
                    <span>ముందు భాగానికి తిరిగి వెళ్దాం</span>
                </button>
            </motion.div>
        </section>
    );
}

export default ContactForm;