import { useTranslation } from '@/hooks/useTranslation';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import LogoHorizontal from '../assets/logo-horizontal.png';

export default function Footer() {
    const { t, ts } = useTranslation();

    return (
        <footer className="w-full bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden max-w-full">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-3">
                    <motion.div
                        className="flex flex-col lg:justify-start mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className='flex justify-center lg:justify-start items-center'
                        >
                            <motion.img
                                className='inline-block'
                                width={225}
                                height={67}
                                src={LogoHorizontal}
                                alt="Interactive logo horizontal"
                                loading="lazy"
                            />
                        </motion.div>
                        <div className="flex flex-row justify-center lg:justify-start gap-4 mt-4">
                            {[
                                { href: "https://facebook.com/interactivenetpl", icon: Facebook, color: "hover:text-blue-600" },
                                { href: "https://instagram.com/interactivenetpl", icon: Instagram, color: "hover:text-pink-600" },
                                { href: "https://linkedin.com/in/jakub-stawski-dev", icon: Linkedin, color: "hover:text-blue-500" },
                                { href: "https://github.com/pstawekl", icon: Github, color: "hover:text-gray-600 dark:hover:text-gray-400" },
                                { href: "tel:+48518275470", icon: Phone, color: "hover:text-green-600" },
                                { href: "mailto:jakub.stawski@interactive.net.pl", icon: Mail, color: "hover:text-red-600" },
                            ].map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target={social.href.startsWith('http') ? '_blank' : undefined}
                                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        aria-label={`${social.href.includes('facebook') ? 'Facebook' : social.href.includes('instagram') ? 'Instagram' : social.href.includes('linkedin') ? 'LinkedIn' : social.href.includes('github') ? 'GitHub' : social.href.includes('tel') ? 'Telefon' : 'Email'} - Interactive`}
                                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-6 h-6 transition-colors ${social.color}`}
                                    >
                                        <Icon className="w-full h-full" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        className="hidden lg:block mt-auto mb-0 justify-center self-center text-center text-gray-400 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        © {new Date().getFullYear()} Interactive. {ts('allRightsReserved')}
                    </motion.div>

                    <motion.div
                        className="flex flex-row lg:flex-col justify-center items-end text-center lg:justify-end lg:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <nav className="flex flex-wrap flex-col gap-6">
                            <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {ts('menu')}
                            </h2>
                            {[
                                { to: "/", label: t('indexViewMap1') },
                                { to: "/www", label: t('www') },
                                { to: "/ecommerce", label: t('onlineStore') },
                                { to: "/strony-internetowe-zdunska-wola", label: "Strony WWW Zduńska Wola" },
                                { to: "/contact", label: t('contact') },
                            ].map((link, index) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <Link
                                        to={link.to as any}
                                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
                                    >
                                        {link.label.toString()}
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                </div>
                <div className="px-4 py-6 md:flex md:items-center md:justify-between">
                    <motion.div
                        className="block lg:hidden mt-8 mb-0 text-center text-gray-400 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        © {new Date().getFullYear()} Interactive. {ts('allRightsReserved')}
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}