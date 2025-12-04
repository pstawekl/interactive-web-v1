import { motion } from "framer-motion";
import ScrollDownButton from "./ui/scroll-down-button";

export function CaseStudies() {
    const studies = [
        {
            title: "Arte - sklep z papeterią",
            summary: "Budowa sklepu od zera, optymalizacja procesu zamówień i integracja płatności.",
            results: [
                { label: "Czas budowy", value: "1 miesiąc" },
                { label: "Zamówień / mies.", value: "300+" },
            ],
        },
        {
            title: "Oj Lala — rezerwacje",
            summary: "System rezerwacji online z płatnościami i kalendarzem.",
            results: [
                { label: "Wzrost rezerwacji", value: "+300%" },
                { label: "Rezerwacji / mies.", value: "100+" },
            ],
        },
        {
            title: "Rbiuro.pl — biuro rachunkowe",
            summary: "Nowy serwis z formularzami i CTA, optymalizacja SEO.",
            results: [
                { label: "Wzrost zapytań", value: "+250%" },
                { label: "Odwiedzeń strony", value: "+180%" },
            ],
        },
    ];

    return (
        <section id="caseStudies" className="relative py-16 lg:py-24 w-full">
            {/* Gradient background matching CallToAction */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-60 pointer-events-none" />
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px',
            }} />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Case studies — wyniki naszych projektów
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {studies.map((s, i) => (
                        <motion.div
                            key={i}
                            className="p-6 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                        >
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{s.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{s.summary}</p>

                            <div className="flex flex-wrap gap-2">
                                {s.results.map((r, idx) => (
                                    <div key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 rounded-full text-sm font-medium">
                                        <span className="font-semibold mr-2">{r.value}</span>
                                        <span className="text-gray-600 dark:text-gray-300">{r.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <ScrollDownButton servicesInView={true} id="testimonials" />
        </section>
    );
}


