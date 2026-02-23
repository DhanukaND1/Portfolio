import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { send } from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
   const [isSending, setIsSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
    e.preventDefault();
    if(isSending)return;

    setIsSending(true);

    // Send email using EmailJS
    send(
      "service_f5gjayi",     // replace with your EmailJS service ID
      "template_i1o5wqm",    // replace with your EmailJS template ID
      {
        from_name: form.name,
        message: form.message,
        from_email: form.email,
        to_name: "Dhanuka",
      },
      "qUbLHKy0rrJuerkOn"      // replace with your EmailJS public key
    )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-center",
          style: {
            borderRadius: "8px",
            background: "#1f2937",
            color: "#fff",
            padding: "12px 18px",
            fontSize: "15px",
            fontFamily: 'Inter, sans-serif',

          },
        });
        setForm({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch((err) => {
         toast.error("Failed to send message. Please try again.", {
          position: "top-center",
          style: {
            borderRadius: "8px",
            background: "#b91c1c",
            color: "#fff",
            padding: "12px 18px",
            fontSize: "15px",
            fontFamily: 'Inter, sans-serif',
          },
        });
        console.error(err);
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
       <Toaster />

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Have a project in mind or want to say hi? Fill out the form below or reach me through my socials.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="contact-form"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="input-group">
          <FaCommentDots className="input-icon" />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="form-textarea"
            rows="5"
          />
        </div>

        <motion.button
          type="submit"
          className={`form-button ${isSending ? "sending" : ""}`}
          disabled={isSending}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            cursor: isSending ? "not-allowed" : "pointer",
          }}
          whileHover={!isSending ? { scale: 1.05 } : {}}
          whileTap={!isSending ? { scale: 0.95 } : {}}
        >
          {isSending ? "Sending..." : "Send Message"} {!isSending && <FiSend />}
        </motion.button>
      </motion.form>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <p>danukanadiranga678.com</p>
        </div>
        <div className="info-card">
          <FaUser className="info-icon" />
          <p>+94 77 816 4288</p>
        </div>
        {/* Add social links here */}
      </motion.div>
    </section>
  );
};

export default Contact;
