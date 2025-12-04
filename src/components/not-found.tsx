import { useTranslation } from '@/hooks/useTranslation'
import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'

export const NotFound = () => {
    const { ts } = useTranslation()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <h2 className="text-4xl font-medium text-gray-600 mt-4">
                    {ts('pageNotFound')}
                </h2>
                <p className="text-gray-500 mt-4 mb-8">
                    {ts('pageNotFoundDescription')}
                </p>
                <Link
                    to="/"
                >
                    <Button variant={'interactive'}>
                        {ts('backToHome')}
                    </Button>
                </Link>
            </div>
        </div>
    )
}