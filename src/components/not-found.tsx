import { useTranslation } from '@/hooks/useTranslation'
import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'

export const NotFound = () => {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <h2 className="text-4xl font-medium text-gray-600 mt-4">
                    {t('pageNotFound')}
                </h2>
                <p className="text-gray-500 mt-4 mb-8">
                    {t('pageNotFoundDescription')}
                </p>
                <Link
                    to="/"
                >
                    <Button variant={'interactive'}>
                        {t('backToHome')}
                    </Button>
                </Link>
            </div>
        </div>
    )
}