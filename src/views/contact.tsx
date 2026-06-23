import { EmailStatus } from '@/components/email';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide-up';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
        <div className="w-full relative overflow-hidden bg-[#09090b]">
            {/* Static brand glows */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.07)_0%,transparent_60%)]" />
                <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.08)_0%,transparent_60%)]" />
            </div>

            <section className="interactive-section">
                <div className="interactive-container">
                    {/* Hero */}
                    <motion.div
                        ref={heroRef}
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.p
                            className="font-mono mb-3 text-sm tracking-widest text-violet-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                        >
                            // Kontakt
                        </motion.p>
                        <motion.h1
                            id="home"
                            className="interactive-gradient-text text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            {ts('contactHeader')}
                        </motion.h1>
                        <motion.p
                            className="mx-auto max-w-2xl text-lg text-zinc-400 sm:text-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {ts('contactDescription')}
                        </motion.p>
                    </motion.div>

                    {/* Two-column grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
                        {/* Map - desktop left */}
                        <motion.div
                            ref={mapRef}
                            className="hidden lg:block"
                            initial={{ opacity: 0, x: -50 }}
                            animate={mapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <motion.div
                                className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MapContainer
                                    className='z-0'
                                    center={position}
                                    zoom={20}
                                    style={{ height: '560px', width: '100%' }}
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

                        {/* Form - right */}
                        <motion.div
                            ref={formRef}
                            initial={{ opacity: 0, x: 50 }}
                            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Card className="interactive-glass">
                                <CardContent className="p-4 sm:p-6 md:p-8">
                                    <motion.div
                                        className="flex items-center gap-3 mb-6"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={formInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full [background:var(--gradient-brand)] shadow-[var(--glow-cta)]">
                                            <Mail className="h-5 w-5 text-white" />
                                        </div>
                                        <h2 className="interactive-gradient-text text-2xl font-bold">{ts('writeToUs')}</h2>
                                    </motion.div>

                                    {status.message.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            role="alert"
                                            className={`${status.isError ? "border-red-500/30 bg-red-500/10 text-red-300" : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"} mb-4 rounded-lg border px-4 py-3 text-sm text-center`}
                                        >
                                            {status.message}
                                        </motion.div>
                                    )}

                                    <motion.form
                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-5"
                                        initial={{ opacity: 0 }}
                                        animate={formInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ delay: 0.45, duration: 0.5 }}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">{ts('nameLabel')}</label>
                                            <Input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full"
                                                required
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">{ts('emailLabel')}</label>
                                            <Input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full"
                                                required
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 0.7 }}
                                        >
                                            <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">{ts('messageLabel')}</label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full resize-none"
                                                required
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 0.8 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="mt-2"
                                        >
                                            {!isDuringSent && (
                                                <Button variant="interactive" className="w-full" type="submit">
                                                    <Send className="mr-2 h-4 w-4" />
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
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Mobile map */}
                    <motion.div
                        id="map"
                        className="block lg:hidden mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <motion.div
                            className="h-[240px] sm:h-[320px] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                        >
                            <MapContainer
                                className='z-0'
                                center={position}
                                zoom={15}
                                style={{ height: '100%', width: '100%', minHeight: '240px' }}
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
            </section>

            <Footer />
            <SlideUp />
        </div>
    );
};

export default Contact;
