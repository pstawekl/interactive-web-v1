import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Link, useNavigate } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Check, Globe, Smartphone, Target, TrendingUp, Users, Zap } from 'lucide-react'

export default function StronyInternetoweLodzView() {
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
                        Strony internetowe Łódź
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Profesjonalne tworzenie stron internetowych w Łodzi. Nowoczesne, szybkie i responsywne strony www dla firm z Łodzi i województwa łódzkiego.
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
                    <li className="text-gray-900 dark:text-white">Strony internetowe Łódź</li>
                </ol>
            </nav>

            {/* Main Content */}
            <article className="max-w-4xl mx-auto px-4 py-16">
                <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Profesjonalne strony internetowe w Łodzi - lider w regionie
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Łódź, jako największe miasto województwa łódzkiego, wymaga profesjonalnego podejścia do tworzenia stron internetowych. Jako doświadczona agencja interaktywna, specjalizujemy się w projektowaniu nowoczesnych, szybkich i responsywnych stron www, które pomagają firmom z Łodzi zwiększyć swoją widoczność online i przyciągnąć nowych klientów.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Tworzenie stron internetowych w Łodzi to nasza specjalność. Dzięki wieloletniemu doświadczeniu w branży i znajomości lokalnego rynku, oferujemy kompleksowe usługi projektowania stron www, które są dostosowane do potrzeb firm działających w dynamicznym środowisku biznesowym Łodzi. Nasze strony internetowe są zaprojektowane z myślą o użytkownikach i wyszukiwarkach, co zapewnia wysoką pozycję w wynikach Google dla fraz związanych z Twoją działalnością w Łodzi.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Niezależnie od tego, czy prowadzisz małą firmę usługową, średnie przedsiębiorstwo, czy większą korporację w Łodzi, pomożemy Ci stworzyć profesjonalną stronę internetową, która będzie skutecznym narzędziem marketingowym i zwiększy Twoje zyski.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Dlaczego warto wybrać Interactive do stworzenia strony internetowej w Łodzi?
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
                                Projektujemy strony internetowe w Łodzi zgodnie z najnowszymi trendami i najlepszymi praktykami UX/UI. Każda strona jest unikalna i odzwierciedla charakter Twojej firmy, wyróżniając Cię na tle konkurencji.
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
                                Wszystkie nasze strony internetowe są w pełni responsywne i doskonale wyglądają na urządzeniach mobilnych, tabletach i desktopach. To kluczowe dla użytkowników z Łodzi, którzy coraz częściej korzystają z urządzeń mobilnych.
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
                                Optymalizujemy strony internetowe pod kątem szybkości ładowania, co pozytywnie wpływa na pozycję w Google i zadowolenie użytkowników z Łodzi. Szybka strona to więcej konwersji i lepsze doświadczenie użytkownika.
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
                                Projektowanie stron www w Łodzi z pełną optymalizacją SEO, aby Twoja strona była widoczna w wynikach wyszukiwania dla fraz lokalnych. Wykorzystujemy zaawansowane techniki SEO dostosowane do konkurencyjnego rynku Łodzi.
                            </p>
                        </motion.div>
                        <motion.div
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Target className="w-12 h-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Lokalne SEO dla Łodzi</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Specjalizujemy się w lokalnym SEO dla firm z Łodzi. Optymalizujemy Twoją stronę pod kątem wyszukiwań lokalnych, co pomaga dotrzeć do mieszkańców Łodzi szukających Twoich usług.
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
                                Oferujemy pełne wsparcie techniczne po wdrożeniu strony internetowej. Jesteśmy dostępni dla firm z Łodzi i zawsze chętnie pomożemy w rozwijaniu Twojej obecności online.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Nasze usługi tworzenia stron internetowych w Łodzi
                    </h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Projektowanie stron www Łódź</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tworzymy unikalne i intuicyjne projekty stron internetowych, które odzwierciedlają charakter Twojej firmy i przyciągają uwagę potencjalnych klientów z Łodzi. Każdy projekt jest dostosowany do specyfiki lokalnego rynku i potrzeb Twojej branży. Wykorzystujemy najnowsze trendy w designie, które wyróżniają Twoją firmę na tle konkurencji.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Tworzenie stron internetowych Łódź</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Kodujemy strony z dbałością o każdy detal, zapewniając szybkość ładowania, bezpieczeństwo i łatwość zarządzania treścią. Używamy najnowszych technologii webowych, takich jak React, TypeScript i Next.js, które gwarantują najwyższą jakość i wydajność. Każda strona jest zoptymalizowana pod kątem Core Web Vitals.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Optymalizacja SEO dla Łodzi</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Pomagamy Twojej stronie osiągnąć wysokie pozycje w wynikach wyszukiwania Google dla fraz takich jak "strona internetowa Łódź" czy "strony internetowe Łódź". Wykorzystujemy lokalne słowa kluczowe i optymalizujemy treści pod kątem lokalnego SEO. Wykonujemy pełną analizę konkurencji i tworzymy strategię SEO dostosowaną do Twojej branży.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">E-commerce i sklepy internetowe</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tworzymy profesjonalne sklepy internetowe dla firm z Łodzi, z pełną integracją płatności, zarządzaniem zamówieniami i systemami logistycznymi. Nasze rozwiązania e-commerce są zoptymalizowane pod kątem konwersji i zapewniają doskonałe doświadczenie zakupowe.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Wsparcie i rozwój</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Zapewniamy pełne wsparcie po wdrożeniu strony internetowej oraz możliwość dalszego rozwoju i aktualizacji. Jesteśmy dostępni dla firm z Łodzi i zawsze chętnie pomożemy w rozwijaniu Twojej obecności online. Oferujemy również szkolenia z obsługi systemu CMS.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Lokalne SEO - klucz do sukcesu w Łodzi
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Dla firm działających w Łodzi, lokalne SEO jest niezwykle ważne. Łódź to duże, konkurencyjne miasto, gdzie walka o widoczność w wynikach wyszukiwania jest szczególnie intensywna. Optymalizujemy Twoją stronę tak, aby była widoczna dla mieszkańców Łodzi szukających usług w Twojej okolicy.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Wykorzystujemy lokalne słowa kluczowe, takie jak "strona internetowa Łódź" i "projektowanie stron www Łódź", aby zwiększyć ruch na Twojej stronie i przekształcić go w realnych klientów. Nasze działania obejmują optymalizację treści, budowanie linków lokalnych oraz konfigurację Google Moja Firma, co przekłada się na lepszą widoczność w lokalnych wynikach wyszukiwania.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Dzięki temu, gdy potencjalny klient wpisze w Google "strony internetowe Łódź", Twoja firma będzie jedną z pierwszych, które zobaczy. To szczególnie ważne w tak konkurencyjnym mieście jak Łódź, gdzie każda pozycja w wynikach wyszukiwania ma znaczenie.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Proces tworzenia strony internetowej w Łodzi
                    </h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">1. Konsultacja i analiza</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Rozmawiamy o Twoich potrzebach, celach biznesowych i wymaganiach dotyczących strony internetowej. Analizujemy konkurencję i rynek w Łodzi, aby stworzyć strategię, która wyróżni Twoją firmę. Przeprowadzamy również analizę SEO, aby zidentyfikować najlepsze możliwości pozycjonowania.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">2. Projektowanie</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tworzymy profesjonalny projekt graficzny strony internetowej, który odzwierciedla charakter Twojej firmy i przyciąga uwagę potencjalnych klientów z Łodzi. Projekt jest dostosowany do specyfiki lokalnego rynku i uwzględnia najlepsze praktyki UX/UI. Prezentujemy kilka wariantów projektu do wyboru.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">3. Programowanie</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Implementujemy projekt używając najnowszych technologii, zapewniając szybkość, bezpieczeństwo i łatwość zarządzania treścią. Każda linijka kodu jest napisana z dbałością o szczegóły i optymalizację wydajności. Stosujemy najlepsze praktyki programistyczne i zapewniamy skalowalność rozwiązania.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">4. Testowanie i optymalizacja</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Testujemy stronę internetową pod kątem działania, responsywności i optymalizacji SEO. Upewniamy się, że wszystko działa perfekcyjnie na wszystkich urządzeniach i przeglądarkach. Wykonujemy testy wydajności i optymalizujemy Core Web Vitals, aby zapewnić najlepsze doświadczenie użytkownika.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">5. Wdrożenie i wsparcie</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Wdrażamy stronę internetową i zapewniamy ciągłe wsparcie techniczne oraz aktualizacje treści. Jesteśmy dostępni dla firm z Łodzi i zawsze chętnie pomożemy w rozwijaniu Twojej obecności online. Oferujemy również monitoring wydajności i regularne raporty z wyników SEO.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Korzyści z posiadania profesjonalnej strony internetowej w Łodzi
                    </h2>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Zwiększona widoczność online</strong> - Twoja firma z Łodzi będzie łatwiej znajdowana przez potencjalnych klientów w wyszukiwarkach. Lokalne SEO pomaga dotrzeć do mieszkańców Łodzi i okolic, którzy szukają Twoich usług.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Profesjonalny wizerunek</strong> - Nowoczesna strona internetowa buduje zaufanie i profesjonalny wizerunek Twojej firmy. To pierwsze wrażenie, które robisz na potencjalnych klientach, szczególnie ważne w konkurencyjnym środowisku Łodzi.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Zwiększony zasięg</strong> - Strona internetowa pozwala dotrzeć do szerszego grona odbiorców, nie tylko w Łodzi, ale także w całym województwie łódzkim i Polsce. Możesz obsługiwać klientów z całego kraju.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Dostępność 24/7</strong> - Twoja strona internetowa jest dostępna dla klientów przez całą dobę, każdego dnia tygodnia. Klienci mogą zapoznać się z Twoją ofertą w dowolnym momencie, co zwiększa szanse na konwersję.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Kosztowo efektywne rozwiązanie</strong> - W porównaniu do tradycyjnej reklamy, strona internetowa to bardziej opłacalna forma promocji firmy. Inwestycja w stronę www zwraca się szybko, szczególnie gdy jest dobrze zoptymalizowana pod SEO.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Łatwe zarządzanie treścią</strong> - Nowoczesne systemy CMS pozwalają na łatwe aktualizowanie treści bez znajomości programowania. Możesz samodzielnie dodawać nowe treści, aktualizować ofertę i zarządzać blogiem.</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <span><strong>Analityka i monitoring</strong> - Nasze strony internetowe są wyposażone w zaawansowane narzędzia analityczne, które pozwalają śledzić ruch, konwersje i zachowanie użytkowników. To pomaga w podejmowaniu świadomych decyzji biznesowych.</span>
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        Dla kogo tworzymy strony internetowe w Łodzi?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        Nasze usługi tworzenia stron internetowych w Łodzi są skierowane do wszystkich firm i przedsiębiorstw, które chcą zwiększyć swoją obecność online. Współpracujemy z:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                        <li>Małymi i średnimi przedsiębiorstwami z Łodzi</li>
                        <li>Firmami usługowymi i handlowymi</li>
                        <li>Profesjonalistami i freelancerami</li>
                        <li>Organizacjami non-profit</li>
                        <li>Startupami i nowymi biznesami</li>
                        <li>Firmami produkcyjnymi i przemysłowymi</li>
                        <li>Restauracjami i hotelami</li>
                        <li>Praktykami lekarskimi i gabinetami</li>
                        <li>Firmami technologicznymi i IT</li>
                        <li>Sklepami internetowymi i e-commerce</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Niezależnie od branży, pomożemy Ci stworzyć profesjonalną stronę internetową, która przyciągnie klientów i zwiększy Twoje zyski. Każda branża ma swoje specyficzne potrzeby, które uwzględniamy w projekcie. Mamy doświadczenie w pracy z różnymi branżami działającymi w Łodzi.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        FAQ - Najczęściej zadawane pytania o strony internetowe w Łodzi
                    </h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Ile kosztuje stworzenie strony internetowej w Łodzi?</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Koszt stworzenia strony internetowej zależy od wielu czynników, takich jak zakres funkcjonalności, liczba podstron, czy potrzeba integracji z systemami zewnętrznymi. Dla firm z Łodzi oferujemy konkurencyjne ceny dostosowane do lokalnego rynku. Oferujemy darmową wycenę, podczas której omówimy Twoje potrzeby i przedstawimy szczegółową ofertę dostosowaną do Twojego budżetu.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Jak długo trwa stworzenie strony internetowej?</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Czas realizacji zależy od złożoności projektu. Prosta strona wizytówka może być gotowa w ciągu 2-3 tygodni, podczas gdy bardziej złożone projekty mogą wymagać 4-8 tygodni. Dla firm z Łodzi staramy się dostosować harmonogram do ich potrzeb biznesowych. Dokładny harmonogram ustalimy podczas konsultacji.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Czy strona będzie widoczna w Google?</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tak, wszystkie nasze strony internetowe są zoptymalizowane pod kątem SEO. Wykonujemy pełną optymalizację techniczną i treściową, aby Twoja strona była widoczna w wynikach wyszukiwania Google dla fraz związanych z Twoją działalnością w Łodzi. Specjalizujemy się w lokalnym SEO, co jest szczególnie ważne dla firm z Łodzi.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Czy mogę samodzielnie aktualizować treści?</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tak, wszystkie nasze strony internetowe są wyposażone w nowoczesny system CMS, który pozwala na łatwe zarządzanie treścią bez znajomości programowania. Przeszkolimy Cię z obsługi systemu i zapewnimy dokumentację. Możesz samodzielnie dodawać nowe treści, aktualizować ofertę i zarządzać blogiem.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Czy oferujecie wsparcie po wdrożeniu?</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tak, oferujemy pełne wsparcie techniczne po wdrożeniu strony internetowej. Jesteśmy dostępni dla firm z Łodzi i zawsze chętnie pomożemy w rozwijaniu Twojej obecności online. Oferujemy również monitoring wydajności, regularne aktualizacje bezpieczeństwa i wsparcie w zakresie SEO.
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
                        <Link to="/strony-internetowe-sieradz" className="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors">
                            <h3 className="font-bold text-blue-600 dark:text-blue-400">Strony internetowe Sieradz</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Profesjonalne strony www dla firm z Sieradza</p>
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
                        Gotowy na profesjonalną stronę internetową w Łodzi?
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

