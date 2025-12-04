import { motion } from "framer-motion";



export default function ScrollDownButton({ servicesInView, id }: { servicesInView: boolean, id: string }) {
    return (
        <motion.div
                        className="flex flex-col items-center justify-center mt-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <motion.div
                            className="mt-2 flex justify-center cursor-pointer"
                            initial={{ opacity: 0, y: -10 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                            transition={{ delay: 1.2, duration: 0.7, type: "spring" }}
                            aria-hidden="true"
                            onClick={() => {
                                const element = document.getElementById(id);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }
                            }}
                        >
                            <motion.svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{ y: [0, 12, 0] }}
                                transition={{
                                    duration: 1.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <path
                                    d="M18 10V26"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M11 19L18 26L25 19"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                        </motion.div>
                    </motion.div>
    )
}