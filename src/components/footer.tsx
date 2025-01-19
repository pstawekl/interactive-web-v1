import { Facebook, GitBranch, Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import LogoHorizontal from '../assets/logo-horizontal.png';

export default function Footer() {
    return (
        <footer className="bg-gray-900">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-3">
                    <div className="flex flex-col lg:justify-start mb-8">
                        <div className='flex justify-center lg:justify-start items-center'>
                            <img className='inline-block' width={"225"} height={"auto"} src={LogoHorizontal} alt="Interactive logo horizontal" />
                        </div>
                        <div className="flex flex-row justify-center lg:justify-start gap-4 mt-4">
                            <a href="https://facebook.com/interactivenetpl" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-6 h-6 hover:text-gray-600 transition-colors" />
                            </a>
                            <a href="https://instagram.com/interactivenetpl" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-6 h-6 hover:text-gray-600 transition-colors" />
                            </a>
                            <a href="https://linkedin.com/in/jakub-stawski-dev" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-6 h-6 hover:text-gray-600 transition-colors" />
                            </a>
                            <a href="https://github.com/pstawekl" target="_blank" rel="noopener noreferrer">
                                <Github className="w-6 h-6 hover:text-gray-600 transition-colors" />
                            </a>
                            <a href="tel:+48518275470">
                                <Phone className="w-6 h-6 hover:text-gray-600 transition-colors" />
                            </a>
                            <a href="mailto:jakub.stawski@interactive.net.pl">
                                <Mail className="w-6 h-6 hover:text-gray-600 transition-colors" />
                            </a>
                        </div>
                    </div>
                    <div className="hidden lg:block mt-auto mb-0 justify-center self-center text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} Interactive. All rights reserved.
                    </div>
                    <div className="flex flex-row lg:flex-col justify-center items-end text-center lg:justify-end lg:text-left">
                        <nav className="flex flex-wrap flex-col gap-6">
                            <h2 className="text-lg font-bold">Menu</h2>
                            <a
                                href="/"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Strony WWW
                            </a>
                            <a
                                href="/services"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Aplikacje
                            </a>
                            <a
                                href="/contact"
                                className="hover:text-gray-300 transition-colors"
                            >
                                Kontakt
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="px-4 py-6 md:flex md:items-center md:justify-between">
                    <div className="block lg:hidden mt-8 mb-0 text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} Interactive. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}