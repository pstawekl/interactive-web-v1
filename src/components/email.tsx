import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";

export type EmailStatus = {
    isError: boolean;
    message: string;
}

export interface EmailFormProps {
    description?: string;
    onEmailSent?: () => void;
}

export default function EmailForm({description, onEmailSent}: EmailFormProps) {
    const [status, setStatus] = useState<EmailStatus>({ isError: false, message: '' });
    const [isDuringSent, setIsDuringSent] = useState(false);
    
    useEffect(() => {
        formData.message = description;
        formData.email = '';
        formData.name = '';
        emailjs.init({
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
            limitRate: {
                id: 'app',
                throttle: 1000
            }
        });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: description,
    });

    const executeRecaptcha = async () => {
        try {
            const token = await (window as any).grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, {action: 'submit'});
            return token ? true : false; // Jeśli otrzymaliśmy token, uznajemy weryfikację za udaną
        } catch (error) {
            console.error('reCAPTCHA error:', error);
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const token = await executeRecaptcha();
            if (!token) {
                setStatus({ isError: true, message: 'Weryfikacja nie powiodła się. Spróbuj ponownie.' });
                return;
            }

            if (!formData.name || !formData.email || !formData.message) {
                setStatus({ isError: true, message: 'Wypełnij wszystkie pola!' });
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                setStatus({ isError: true, message: 'Wprowadź poprawny adres email!' });
                return;
            }

            // Add basic anti-spam validation
            const messageWords = formData.message.split(' ').length;
            if (messageWords < 2) {
                setStatus({ isError: true, message: 'Wiadomość jest zbyt krótka!' });
                return;
            }

            if (formData.message.toLowerCase().includes('http') || formData.message.toLowerCase().includes('www')) {
                setStatus({ isError: true, message: 'Wiadomość nie może zawierać linków!' });
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
                    setStatus({ isError: false, message: 'Wiadomość została wysłana.' });
                    setIsDuringSent(false);
                    onEmailSent?.();  // Wywołaj callback po pomyślnym wysłaniu
                })
                .catch((err) => {
                    console.error('FAILED...', err);
                    setIsDuringSent(false);
                    setStatus({ isError: true, message: 'Wystąpił błąd podczas wysyłania wiadomości.' });
                });

        } catch (error) {
            setStatus({ isError: true, message: 'Wystąpił błąd podczas weryfikacji. Spróbuj ponownie.' });
            console.error('Verification error:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div id="emailForm" className={"w-full flex flex-col justify-center items-center mb-16 px-8 lg:px-0 lg:mb-0"}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full  max-w-lg">
                {
                    status.message.length > 0 && <p className={`${status.isError ? "bh-red-300" : "bg-green-300"}` + " py-3 text-lg border rounded text-center text-white"}>{status.message}</p>
                }
                <div>
                    <label htmlFor="name" className="block mb-2">Imię i nazwisko</label>
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
                    <label htmlFor="email" className="block mb-2">Email</label>
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
                    <label htmlFor="message" className="block mb-2">Wiadomość</label>
                    <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded h-32"
                        disabled
                        required
                    />
                </div>
                {
                    !isDuringSent && <Button variant={'interactive'} className='w-60 self-center' type="submit">
                        Wyślij
                    </Button>
                }
                {
                    isDuringSent && <Spinner />
                }
            </form>
        </div>

    );
}