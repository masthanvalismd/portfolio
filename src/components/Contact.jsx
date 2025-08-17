import { motion } from "framer-motion";
import { useState } from "react";


const Contact = () => {
const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
});
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace with your email sending API endpoint or service
    const res = await fetch("https://formspree.io/f/yourFormId", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
        alert("Thank you for your message! I'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
    } else {
        alert("Sorry, something went wrong. Please try again.");
    }
};

return (
    <section id="contact" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

        <div className="max-w-4xl mx-auto relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Let's Work Together
                </h2>
                <p className="text-xl text-gray-300">
                    Ready to bring your ideas to life? Let's discuss your next
                    project.
                </p>
            </motion.div>

            <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                onSubmit={handleSubmit}
            >
                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                            placeholder="Project Discussion"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            rows="5"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                            placeholder="Tell me about your project..."
                            required
                        />
                    </div>

                    <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                </div>
            </motion.form>
        </div>
    </section>
)
}

export default Contact