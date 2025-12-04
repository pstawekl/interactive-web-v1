import { EmailStatus } from '@/components/email';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide-up';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from '@/hooks/useTranslation';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import L, { LatLngExpression } from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { Mail, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Contact = () => {
    const { t, ts } = useTranslation();
    const [isDuringSent, setIsDuringSent] = useState(false);

    useEffect(() => {
        // Dodaj skrypt reCAPTCHA v3
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        emailjs.init({
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
            limitRate: {
                id: 'app',
                throttle: 1000
            }
        });
    }, []);

    const executeRecaptcha = async () => {
        try {
            const token = await (window as any).grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: 'submit' });
            return token ? true : false; // Jeśli otrzymaliśmy token, uznajemy weryfikację za udaną
        } catch (error) {
            console.error('reCAPTCHA error:', error);
            return false;
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<EmailStatus>({ isError: false, message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = await executeRecaptcha();
        if (!token) {
            setStatus({ isError: true, message: ts('validationErrors.recaptchaFailed') });
            return;
        }

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ isError: true, message: ts('validationErrors.fillAllFields') });
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ isError: true, message: ts('validationErrors.invalidEmail') });
            return;
        }

        // Add basic anti-spam validation
        const messageWords = formData.message.split(' ').length;
        if (messageWords < 2) {
            setStatus({ isError: true, message: ts('validationErrors.messageTooShort') });
            return;
        }

        if (formData.message.toLowerCase().includes('http') || formData.message.toLowerCase().includes('www')) {
            setStatus({ isError: true, message: ts('validationErrors.noLinks') });
            return;
        }

        setIsDuringSent(true);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID!,  // Service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID!, // Template ID
            formData
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus({ isError: false, message: ts('thankForTheMessage') });
                setFormData({ name: '', email: '', message: '' });
                setIsDuringSent(false);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setIsDuringSent(false);
                setStatus({ isError: true, message: ts('validationErrors.sendingFailed') });
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const position: LatLngExpression = [51.60172, 18.94248];

    const heroRef = useRef(null);
    const formRef = useRef(null);
    const mapRef = useRef(null);

    const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
    const formInView = useInView(formRef, { once: true, margin: "-100px" });
    const mapInView = useInView(mapRef, { once: true, margin: "-100px" });

    return (
        <div className="w-full relative overflow-hidden">
            {/* Animated background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 dark:opacity-30" />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tl from-cyan-500 via-blue-500 to-purple-600 opacity-10 dark:opacity-20"
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                />
            </div>

            <div className="relative py-16 px-5 sm:px-10">
                <motion.div
                    ref={heroRef}
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        id="home"
                        className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 pb-5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {ts('contactHeader')}
                    </motion.h1>
                    <motion.h3
                        className='text-center text-lg sm:text-xl md:text-2xl max-w-3xl px-8 lg:px-0 mx-auto text-gray-700 dark:text-gray-300'
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {ts('contactDescription')}
                    </motion.h3>
                </motion.div>

                <div className='w-full mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center mt-8 mb-32'>
                    <motion.div
                        ref={mapRef}
                        className="hidden lg:block p-6 w-full overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        animate={mapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <motion.div
                            className="h-[100%] w-full flex justify-end rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <MapContainer
                                className='z-0 rounded-2xl'
                                center={position}
                                zoom={20}
                                style={{ height: '600px', width: '600px' }}
                                scrollWheelZoom={false}
                            >
                                <TileLayer
                                    className='z-0'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={position}>
                                    <Popup>
                                        Interactive<br />
                                        ul. Stefana Żeromskiego 7/9<br />
                                        98-220 Zduńska Wola
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={formRef}
                        className="w-full h-full p-6 flex flex-col justify-center items-center mb-16 px-8 lg:px-0 lg:mb-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <motion.form
                            onSubmit={handleSubmit}
                            className="flex flex-col h-full gap-6 w-full max-w-lg p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={formInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Mail className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{ts('writeToUs')}</h2>
                            </div>

                            {status.message.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`${status.isError ? "bg-red-500" : "bg-green-500"} py-3 px-4 text-lg border rounded-lg text-center text-white shadow-lg`}
                                >
                                    {status.message}
                                </motion.div>
                            )}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.5 }}
                            >
                                <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">{ts('nameLabel')}</label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white/50 dark:bg-gray-900/50 focus:border-primary transition-colors"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.6 }}
                            >
                                <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">{ts('emailLabel')}</label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg bg-white/50 dark:bg-gray-900/50 focus:border-primary transition-colors"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.7 }}
                            >
                                <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">{ts('messageLabel')}</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg h-32 bg-white/50 dark:bg-gray-900/50 focus:border-primary transition-colors resize-none"
                                    required
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='mt-auto flex justify-center'
                            >
                                {!isDuringSent && (
                                    <Button variant={'interactive'} className='w-full sm:w-60 self-center' type="submit">
                                        <Send className="w-5 h-5 mr-2" />
                                        {ts('send')}
                                    </Button>
                                )}
                                {isDuringSent && (
                                    <div className="flex justify-center">
                                        <Spinner />
                                    </div>
                                )}
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </div>
                <motion.div
                    id="map"
                    className="block lg:hidden w-full shadow-lg overflow-hidden px-5 sm:px-10 mb-32"
                    initial={{ opacity: 0, y: 50 }}
                    animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <motion.div
                        className="h-[400px] w-full relative rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MapContainer
                            className='z-0 rounded-2xl'
                            center={position}
                            zoom={15}
                            style={{ height: '400px', width: '100%' }}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                className='z-0'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>
                                    Interactive<br />
                                    ul. Stefana Żeromskiego 7/9<br />
                                    98-220 Zduńska Wola
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
            <SlideUp />
        </div>
    );
};

export default Contact;
