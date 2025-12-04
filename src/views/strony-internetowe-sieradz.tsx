import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Link, useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Check, Globe, Shield, Smartphone, TrendingUp, Users, Zap } from 'lucide-react'

export default function StronyInternetoweSieradzView() {
    const navigate = useNavigate()

    return (
        <main className="w-full min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Strony internetowe Sieradz
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Profesjonalne tworzenie stron internetowych w Sieradzu. Nowoczesne, szybkie i responsywne strony www dla firm z Sieradza i okolic.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Button
                            onClick={() => navigate({ to: '/contact' })}
                            variant="interactive"
                            className="text-lg px-8 py-6"
                            aria-label="Skontaktuj się z nami - darmowa wycena strony internetowej"
                        >
                            Skontaktuj się z nami
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 py-4">
                <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Strona główna</Link></li>
                    <li>/</li>
                    <li className="text-gray-900 dark:text-white">Strony internetowe Sieradz</li>
                </ol>
            </nav>

            {/* Main Content */}
            <article className="max-w-4xl mx-auto px-4 py-16">
                <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Profesjonalne strony internetowe w Sieradzu - Twoja firma online
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        W dzisiejszym cyfrowym świecie, posiadanie profesjonalnej strony internetowej jest niezbędne dla każdej firmy działającej w Sieradzu. Jako lokalna agencja interaktywna, specjalizujemy się w tworzeniu nowoczesnych, szybkich i responsywnych stron www, które pomagają firmom z Sieradza zwiększyć swoją widoczność online i przyciągnąć nowych klientów.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Tworzenie stron internetowych w Sieradzu to nasza pasja i specjalność. Dzięki wieloletniemu doświadczeniu w branży, oferujemy kompleksowe usługi projektowania stron www, które są dostosowane do potrzeb lokalnego rynku. Nasze strony internetowe są zaprojektowane z myślą o użytkownikach i wyszukiwarkach, co zapewnia wysoką pozycję w wynikach Google dla fraz związanych z Twoją działalnością w Sieradzu.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Niezależnie od tego, czy prowadzisz małą firmę usługową, sklep, czy większe przedsiębiorstwo w Sieradzu, pomożemy Ci stworzyć profesjonalną stronę internetową, która będzie skutecznym narzędziem marketingowym i zwiększy Twoje zyski.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Dlaczego warto wybrać Interactive do stworzenia strony internetowej w Sieradzu?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <motion.div
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Globe className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Nowoczesny design</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Projektujemy strony internetowe w Sieradzu zgodnie z najnowszymi trendami i najlepszymi praktykami UX/UI. Każda strona jest unikalna i odzwierciedla charakter Twojej firmy.
                            </p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Smartphone className="w-12 h-12 text-purple-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Pełna responsywność</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Wszystkie nasze strony internetowe są w pełni responsywne i doskonale wyglądają na urządzeniach mobilnych, tabletach i desktopach. To kluczowe dla użytkowników z Sieradza.
                            </p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Zap className="w-12 h-12 text-pink-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Szybkość działania</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Optymalizujemy strony internetowe pod kątem szybkości ładowania, co pozytywnie wpływa na pozycję w Google i zadowolenie użytkowników z Sieradza.
                            </p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Optymalizacja SEO</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Projektowanie stron www w Sieradzu z pełną optymalizacją SEO, aby Twoja strona była widoczna w wynikach wyszukiwania dla fraz lokalnych.
                            </p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Shield className="w-12 h-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Bezpieczeństwo</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Wszystkie nasze strony internetowe są zabezpieczone certyfikatami SSL i regularnie aktualizowane, zapewniając bezpieczeństwo danych Twoich klientów.
                            </p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Users className="w-12 h-12 text-cyan-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Wsparcie techniczne</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Oferujemy pełne wsparcie techniczne po wdrożeniu strony internetowej. Jesteśmy dostępni dla firm z Sieradza i zawsze chętnie pomożemy.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Nasze usługi tworzenia stron internetowych w Sieradzu
                    </h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Projektowanie stron www Sieradz</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tworzymy unikalne i intuicyjne projekty stron internetowych, które odzwierciedlają charakter Twojej firmy i przyciągają uwagę potencjalnych klientów z Sieradza. Każdy projekt jest dostosowany do specyfiki lokalnego rynku i potrzeb Twojej branży.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Tworzenie stron internetowych Sieradz</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Kodujemy strony z dbałością o każdy detal, zapewniając szybkość ładowania, bezpieczeństwo i łatwość zarządzania treścią. Używamy najnowszych technologii webowych, które gwarantują najwyższą jakość i wydajność.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Optymalizacja SEO dla Sieradza</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Pomagamy Twojej stronie osiągnąć wysokie pozycje w wynikach wyszukiwania Google dla fraz takich jak "strona internetowa Sieradz" czy "strony internetowe Sieradz". Wykorzystujemy lokalne słowa kluczowe i optymalizujemy treści pod kątem lokalnego SEO.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Wsparcie i rozwój</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Zapewniamy pełne wsparcie po wdrożeniu strony internetowej oraz możliwość dalszego rozwoju i aktualizacji. Jesteśmy dostępni dla firm z Sieradza i zawsze chętnie pomożemy w rozwijaniu Twojej obecności online.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Lokalne SEO - klucz do sukcesu w Sieradzu
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Dla firm działających w Sieradzu, lokalne SEO jest niezwykle ważne. Optymalizujemy Twoją stronę tak, aby była widoczna dla mieszkańców Sieradza szukających usług w Twojej okolicy. Wykorzystujemy lokalne słowa kluczowe, takie jak "strona internetowa Sieradz" i "projektowanie stron www Sieradz", aby zwiększyć ruch na Twojej stronie i przekształcić go w realnych klientów.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Nasze działania obejmują optymalizację treści, budowanie linków lokalnych oraz konfigurację Google Moja Firma, co przekłada się na lepszą widoczność w lokalnych wynikach wyszukiwania. Dzięki temu, gdy potencjalny klient wpisze w Google "strony internetowe Sieradz", Twoja firma będzie jedną z pierwszych, które zobaczy.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Proces tworzenia strony internetowej w Sieradzu
                    </h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">1. Konsultacja i analiza</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Rozmawiamy o Twoich potrzebach, celach biznesowych i wymaganiach dotyczących strony internetowej. Analizujemy konkurencję i rynek w Sieradzu, aby stworzyć strategię, która wyróżni Twoją firmę.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">2. Projektowanie</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tworzymy profesjonalny projekt graficzny strony internetowej, który odzwierciedla charakter Twojej firmy i przyciąga uwagę potencjalnych klientów z Sieradza. Projekt jest dostosowany do specyfiki lokalnego rynku.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">3. Programowanie</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Implementujemy projekt używając najnowszych technologii, zapewniając szybkość, bezpieczeństwo i łatwość zarządzania treścią. Każda linijka kodu jest napisana z dbałością o szczegóły.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">4. Testowanie i optymalizacja</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Testujemy stronę internetową pod kątem działania, responsywności i optymalizacji SEO. Upewniamy się, że wszystko działa perfekcyjnie na wszystkich urządzeniach i przeglądarkach.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">5. Wdrożenie i wsparcie</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Wdrażamy stronę internetową i zapewniamy ciągłe wsparcie techniczne oraz aktualizacje treści. Jesteśmy dostępni dla firm z Sieradza i zawsze chętnie pomożemy.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Korzyści z posiadania profesjonalnej strony internetowej w Sieradzu
                    </h2>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Zwiększona widoczność online</strong> - Twoja firma z Sieradza będzie łatwiej znajdowana przez potencjalnych klientów w wyszukiwarkach. Lokalne SEO pomaga dotrzeć do mieszkańców Sieradza i okolic.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Profesjonalny wizerunek</strong> - Nowoczesna strona internetowa buduje zaufanie i profesjonalny wizerunek Twojej firmy. To pierwsze wrażenie, które robisz na potencjalnych klientach.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Zwiększony zasięg</strong> - Strona internetowa pozwala dotrzeć do szerszego grona odbiorców, nie tylko w Sieradzu, ale także w całym województwie łódzkim i Polsce.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Dostępność 24/7</strong> - Twoja strona internetowa jest dostępna dla klientów przez całą dobę, każdego dnia tygodnia. Klienci mogą zapoznać się z Twoją ofertą w dowolnym momencie.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Kosztowo efektywne rozwiązanie</strong> - W porównaniu do tradycyjnej reklamy, strona internetowa to bardziej opłacalna forma promocji firmy. Inwestycja w stronę www zwraca się szybko.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Łatwe zarządzanie treścią</strong> - Nowoczesne systemy CMS pozwalają na łatwe aktualizowanie treści bez znajomości programowania. Możesz samodzielnie dodawać nowe treści i aktualizować ofertę.</span>
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Dla kogo tworzymy strony internetowe w Sieradzu?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Nasze usługi tworzenia stron internetowych w Sieradzu są skierowane do wszystkich firm i przedsiębiorstw, które chcą zwiększyć swoją obecność online. Współpracujemy z:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                        <li>Małymi i średnimi przedsiębiorstwami z Sieradza</li>
                        <li>Firmami usługowymi i handlowymi</li>
                        <li>Profesjonalistami i freelancerami</li>
                        <li>Organizacjami non-profit</li>
                        <li>Startupami i nowymi biznesami</li>
                        <li>Firmami produkcyjnymi i przemysłowymi</li>
                        <li>Restauracjami i hotelami</li>
                        <li>Praktykami lekarskimi i gabinetami</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Niezależnie od branży, pomożemy Ci stworzyć profesjonalną stronę internetową, która przyciągnie klientów i zwiększy Twoje zyski. Każda branża ma swoje specyficzne potrzeby, które uwzględniamy w projekcie.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        FAQ - Najczęściej zadawane pytania o strony internetowe w Sieradzu
                    </h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Ile kosztuje stworzenie strony internetowej w Sieradzu?</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Koszt stworzenia strony internetowej zależy od wielu czynników, takich jak zakres funkcjonalności, liczba podstron, czy potrzeba integracji z systemami zewnętrznymi. Oferujemy darmową wycenę, podczas której omówimy Twoje potrzeby i przedstawimy szczegółową ofertę dostosowaną do Twojego budżetu.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Jak długo trwa stworzenie strony internetowej?</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Czas realizacji zależy od złożoności projektu. Prosta strona wizytówka może być gotowa w ciągu 2-3 tygodni, podczas gdy bardziej złożone projekty mogą wymagać 4-8 tygodni. Dokładny harmonogram ustalimy podczas konsultacji.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Czy strona będzie widoczna w Google?</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tak, wszystkie nasze strony internetowe są zoptymalizowane pod kątem SEO. Wykonujemy pełną optymalizację techniczną i treściową, aby Twoja strona była widoczna w wynikach wyszukiwania Google dla fraz związanych z Twoją działalnością w Sieradzu.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Czy mogę samodzielnie aktualizować treści?</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tak, wszystkie nasze strony internetowe są wyposażone w nowoczesny system CMS, który pozwala na łatwe zarządzanie treścią bez znajomości programowania. Przeszkolimy Cię z obsługi systemu.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Inne miasta w województwie łódzkim
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Oferujemy również usługi tworzenia stron internetowych w innych miastach województwa łódzkiego. Sprawdź nasze strony dla:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/strony-internetowe-lodz" className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors">
                            <h3 className="font-bold text-blue-600 dark:text-blue-400">Strony internetowe Łódź</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Profesjonalne strony www dla firm z Łodzi</p>
                        </Link>
                        <Link to="/strony-internetowe-zdunska-wola" className="p-4 bg-purple-50 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition-colors">
                            <h3 className="font-bold text-purple-600 dark:text-purple-400">Strony internetowe Zduńska Wola</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Nowoczesne strony www dla firm z Zduńskiej Woli</p>
                        </Link>
                        <Link to="/strony-internetowe-lodzkie" className="p-4 bg-pink-50 dark:bg-gray-800 rounded-lg hover:bg-pink-100 dark:hover:bg-gray-700 transition-colors">
                            <h3 className="font-bold text-pink-600 dark:text-pink-400">Strony internetowe województwo łódzkie</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Kompleksowa oferta dla całego regionu</p>
                        </Link>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Gotowy na profesjonalną stronę internetową w Sieradzu?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Skontaktuj się z nami już dziś i otrzymaj darmową wycenę swojej strony internetowej!
                    </p>
                    <Button
                        onClick={() => navigate({ to: '/contact' })}
                        variant="default"
                        className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
                        aria-label="Skontaktuj się z nami - darmowa wycena"
                    >
                        Skontaktuj się z nami
                    </Button>
                </section>
            </article>

            <Footer />
        </main>
    )
}

