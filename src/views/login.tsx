import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

type LoginType = 'admin' | 'moderator' | 'organization' | 'volunteer';

type PageErrorType = {
    message: string;
    code: number;
    isError: boolean;
}

export default function LoginPage() {
    const [isMounted, setIsMounted] = useState(false);
    const [loginType, setLoginType] = useState<LoginType>('volunteer');
    const [pageError, setPageError] = useState<PageErrorType>({ message: '', code: 0, isError: false });
    const [loginTypeName, setLoginTypeName] = useState<string>('');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            if (typeof window !== 'undefined') {
                const role = window.location.href.split('?role=')[1];
                if (role) {
                    setLoginType(role as LoginType);
                    window.history.replaceState({}, '', window.location.pathname);
                    localStorage.setItem('login:role', role);
                } else {
                    const roleFromStorage = localStorage.getItem('login:role');

                    if (roleFromStorage) {
                        setLoginType(roleFromStorage as LoginType);
                    } else {
                        setPageError({ message: 'Brak roli', code: 404, isError: true });
                    }
                }
            }
        }
    }, [isMounted])

    useEffect(() => {
        if (loginType) {
            switch (loginType) {
                case 'admin':
                    setLoginTypeName('Administrator');
                    break;
                case 'moderator':
                    setLoginTypeName('Moderator');
                    break;
                case 'organization':
                    setLoginTypeName('Organizacja');
                    break;
                case 'volunteer':
                    setLoginTypeName('Wolontariusz');
                    break;
                default:
                    setPageError({ message: 'Niepoprawna rola', code: 404, isError: true });
                    setLoginTypeName('');
                    break;
            }
        }
    }, [loginType])

    if (pageError.isError) {
        return <div className="flex items-center justify-center h-screen">
            <div className="p-8 bg-red-100 text-red-700 rounded shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Błąd {pageError.code}</h1>
                <p>{pageError.message}</p>
            </div>
        </div>
    }

    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-screen">
        <div className="flex items-center justify-center">
            <div className="p-8 rounded shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Zaloguj się jako {loginTypeName}</h1>
                <form className="flex flex-col gap-4">


                    <span>Email</span>
                    <Input type="email" className="border border-gray-300 p-2 rounded" />
                    <span>Hasło</span>
                    <Input type="password" className="border border-gray-300 p-2 rounded" />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Zaloguj</button>
                </form>
            </div>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Login" className="object-cover h-full w-full" />
        </div>
    </div>
}