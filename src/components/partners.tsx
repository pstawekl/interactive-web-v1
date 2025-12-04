import { motion } from "framer-motion";

export function Partners() {
    const partners = [
        { name: "ISO 27001", type: "cert" },
        { name: "GDPR Compliant", type: "cert" },
        { name: "Trusted Partner", type: "partner" },
        { name: "Cloud Ready", type: "badge" },
    ];

    return (
        <section className="py-12 lg:py-16 w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.h3 className="text-2xl font-bold mb-6 text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    Partnerzy i certyfikaty
                </motion.h3>

                <div className="flex flex-wrap justify-center items-center gap-6">
                    {partners.map((p, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center gap-3 px-4 py-2 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.07 }}
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                {p.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                            </div>
                            <div>
                                <div className="font-semibold text-sm text-gray-900 dark:text-white">{p.name}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{p.type}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


