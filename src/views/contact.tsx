import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression, Zoom } from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import Footer from '@/components/footer';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { ViewMap } from '@/components/view-map';
import SlideUp from '@/components/slide-up';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { EmailStatus } from '@/components/email';
import { useTranslation } from '@/hooks/useTranslation';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Contact = () => {
    const { t } = useTranslation();
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
            const token = await (window as any).grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, {action: 'submit'});
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
                setStatus({ isError: true, message: t('validationErrors.recaptchaFailed') });
                return;
            }

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ isError: true, message: t('validationErrors.fillAllFields') });
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({ isError: true, message: t('validationErrors.invalidEmail') });
            return;
        }

        // Add basic anti-spam validation
        const messageWords = formData.message.split(' ').length;
        if (messageWords < 2) {
            setStatus({ isError: true, message: t('validationErrors.messageTooShort') });
            return;
        }

        if (formData.message.toLowerCase().includes('http') || formData.message.toLowerCase().includes('www')) {
            setStatus({ isError: true, message: t('validationErrors.noLinks') });
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
                setStatus({ isError: false, message: t('thankForTheMessage') });
                setFormData({ name: '', email: '', message: '' });
                setIsDuringSent(false);
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setIsDuringSent(false);
                setStatus({ isError: true, message: t('validationErrors.sendingFailed') });
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const position: LatLngExpression = [51.60172, 18.94248];

    return (
        <div className="w-full">
            <div className="py-16"></div>
            <h1 className="text-6xl font-medium text-center mb-8">
                {t('contactHeader')}
            </h1>
            <h3 id="home" className='text-center text-lg max-w-3xl px-8 lg:px-0 mx-auto mb-8'>
                {t('contactDescription')}
            </h3>

            <div className='w-full mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-items-center mt-8 mb-32 [&>*+*]:lg:border-l'>
                <div className="hidden lg:block p-12 w-full overflow-hidden">
                    <div className="h-[400px] w-full flex justify-end">
                        <MapContainer
                            className='z-0 rounded-2xl'
                            center={position}
                            zoom={15}
                            style={{ height: '400px', width: '400px' }}
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
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center mb-16 px-8 lg:px-0 lg:mb-0">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full  max-w-lg">
                        {
                            status.message.length > 0 && <p className={`${status.isError ? "bh-red-300" : "bg-green-300"}` + " py-3 text-lg border rounded text-center text-white"}>{status.message}</p>
                        }
                        <div>
                            <label htmlFor="name" className="block mb-2">{t('nameLabel')}</label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2">{t('emailLabel')}</label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2">{t('messageLabel')}</label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border rounded h-32"
                                required
                            />
                        </div>
                        {
                            !isDuringSent && <Button variant={'interactive'} className='w-60 self-center' type="submit">
                                {t('send')}
                            </Button>
                        }
                        {
                            isDuringSent && <Spinner />
                        }
                    </form>
                </div>


            </div>
            <div id="map" className="block lg:hidden w-full shadow-lg overflow-hidden">
                <div className="h-[400px] w-full relative">
                    <MapContainer
                        className='z-0'
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
                </div>
            </div>

            <Footer />
            <ViewMap items={[
                {
                    id: 'home',
                    name: t('writeToUs')
                }
                ,
                {
                    id: 'map',
                    name: t('map'),
                    onlyMobile: true
                }
            ]} />
            <SlideUp />
        </div>
    );
};

export default Contact;
