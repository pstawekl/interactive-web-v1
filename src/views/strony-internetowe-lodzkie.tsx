import { LocalSeoPage } from '@/components/marketing/local-seo-page'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import { Globe, MapPin, Smartphone, TrendingUp, Users, Zap } from 'lucide-react'

const citiesWithPages = [
  {
    to: '/strony-internetowe-lodz',
    label: 'Łódź',
    description: 'Profesjonalne strony www dla firm z Łodzi i aglomeracji łódzkiej',
  },
  {
    to: '/strony-internetowe-zdunska-wola',
    label: 'Zduńska Wola',
    description: 'Nowoczesne strony www dla firm ze Zduńskiej Woli i okolic',
  },
  {
    to: '/strony-internetowe-sieradz',
    label: 'Sieradz',
    description: 'Skuteczne strony www dla firm z Sieradza i powiatu sieradzkiego',
  },
]

const otherCities = [
  'Pabianice',
  'Zgierz',
  'Tomaszów Mazowiecki',
  'Bełchatów',
  'Skierniewice',
  'Radomsko',
  'Kutno',
  'Łęczyca',
  'Wieluń',
  'Piotrków Trybunalski',
  'Rawa Mazowiecka',
  'Opoczno',
]

const afterFeatureCards = (
  <section className="bg-[#0e0e11] py-24">
    <div className="interactive-container">
      <div className="mb-14 text-center">
        <p className="font-mono mb-3 text-sm text-violet-400">// Zasięg regionalny</p>
        <h2 className="interactive-gradient-text mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Strony internetowe dla całego województwa łódzkiego
        </h2>
        <p className="mx-auto max-w-2xl text-zinc-400">
          Obsługujemy firmy z całego województwa łódzkiego. Dla największych miast regionu przygotowaliśmy
          dedykowane strony z dokładnymi informacjami o naszej ofercie.
        </p>
      </div>

      <div className="mb-10 grid gap-6 sm:grid-cols-3">
        {citiesWithPages.map((city) => (
          <Link key={city.to} to={city.to as never}>
            <Card className="interactive-glass group h-full cursor-pointer border-zinc-800 transition-colors hover:border-violet-500/40">
              <CardContent className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full [background:var(--gradient-brand)] shadow-[var(--glow-cta)]">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="interactive-gradient-text mb-2 text-lg font-semibold">{city.label}</h3>
                <p className="text-sm text-zinc-400">{city.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-white/[0.02] p-8">
        <p className="mb-5 text-sm font-medium text-zinc-300">
          Oferujemy również nasze usługi w pozostałych miastach i powiatach województwa łódzkiego:
        </p>
        <div className="flex flex-wrap gap-3">
          {otherCities.map((city) => (
            <span
              key={city}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-300"
            >
              {city}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm text-zinc-500">
          Nie widzisz swojego miasta?{' '}
          <Link
            to="/"
            className="text-violet-400 underline underline-offset-2 hover:text-violet-300 transition-colors"
          >
            Skontaktuj się z nami
          </Link>{' '}
          — obsługujemy klientów z całej Polski.
        </p>
      </div>
    </div>
  </section>
)

export default function StronyInternetoweLodzkieView() {
  return (
    <LocalSeoPage
      h1="Strony internetowe województwo łódzkie"
      eyebrow="// Strony internetowe i SEO dla firm z województwa łódzkiego"
      heroDescription="Profesjonalne tworzenie stron internetowych dla firm z województwa łódzkiego. Obsługujemy Łódź, Zduńską Wolę, Sieradz i cały region."
      breadcrumbLabel="Strony internetowe województwo łódzkie"
      introHeading="Profesjonalne strony internetowe dla firm z województwa łódzkiego"
      introBody={
        <>
          <p className="mb-4">
            Jesteśmy agencją interaktywną specjalizującą się w tworzeniu nowoczesnych stron internetowych dla firm
            z całego województwa łódzkiego. Działamy lokalnie — rozumiemy specyfikę rynku w Łodzi, Zduńskiej Woli,
            Sieradzu i pozostałych miastach regionu. Nasze strony są szybkie, responsywne i zoptymalizowane pod
            kątem lokalnego SEO, dzięki czemu Twoja firma będzie widoczna dla klientów w województwie łódzkim.
          </p>
          <p className="mb-4">
            Tworzenie stron internetowych w województwie łódzkim to nasza codzienność. Łączymy nowoczesne
            technologie z głęboką znajomością lokalnego rynku — wiemy, jak wyróżnić firmę spośród lokalnej
            konkurencji i przyciągnąć klientów szukających usług w konkretnym mieście lub powiecie.
          </p>
          <p>
            Niezależnie od tego, czy prowadzisz firmę w Łodzi, małe przedsiębiorstwo w Zduńskiej Woli, czy
            zakład produkcyjny pod Sieradzem — pomożemy Ci zbudować profesjonalną obecność online dopasowaną
            do specyfiki lokalnego rynku.
          </p>
        </>
      }
      featureSectionHeading="Dlaczego warto wybrać Interactive do stworzenia strony internetowej w województwie łódzkim?"
      featureCards={[
        {
          icon: <Globe className="h-7 w-7" />,
          title: 'Lokalna znajomość rynku',
          description:
            'Doskonale znamy rynek województwa łódzkiego — Łódź, Zduńską Wolę, Sieradz i inne miasta. Projektujemy strony, które trafiają do lokalnych odbiorców.',
        },
        {
          icon: <Smartphone className="h-7 w-7" />,
          title: 'Pełna responsywność',
          description:
            'Wszystkie nasze strony internetowe działają perfekcyjnie na urządzeniach mobilnych, tabletach i desktopach — bez kompromisów.',
        },
        {
          icon: <Zap className="h-7 w-7" />,
          title: 'Szybkość i wydajność',
          description:
            'Optymalizujemy strony pod kątem Core Web Vitals i szybkości ładowania, co przekłada się na lepsze pozycje w Google.',
        },
        {
          icon: <TrendingUp className="h-7 w-7" />,
          title: 'Lokalne SEO',
          description:
            'Specjalizujemy się w lokalnej optymalizacji SEO dla miast województwa łódzkiego — Łódź, Zduńska Wola, Sieradz i cały region.',
        },
        {
          icon: <MapPin className="h-7 w-7" />,
          title: 'Zasięg regionalny',
          description:
            'Obsługujemy firmy z całego województwa łódzkiego. Znamy specyfikę każdego powiatu i miasta w regionie.',
        },
        {
          icon: <Users className="h-7 w-7" />,
          title: 'Kompleksowe wsparcie',
          description:
            'Oferujemy pełne wsparcie — od projektu, przez wdrożenie, aż po bieżące utrzymanie i rozwój strony.',
        },
      ]}
      afterFeatureCards={afterFeatureCards}
      servicesSectionHeading="Nasze usługi tworzenia stron internetowych w województwie łódzkim"
      serviceItems={[
        {
          title: 'Projektowanie i tworzenie stron www',
          body: 'Tworzymy profesjonalne strony internetowe dopasowane do specyfiki Twojej branży i lokalnego rynku w województwie łódzkim. Każdy projekt jest unikalny — dostosowujemy wygląd, treści i funkcjonalności do potrzeb Twojej firmy i oczekiwań klientów z regionu.',
        },
        {
          title: 'Lokalne SEO dla województwa łódzkiego',
          body: 'Optymalizujemy strony pod frazy lokalne dla całego województwa łódzkiego. Pomagamy firmom z Łodzi, Zduńskiej Woli, Sieradza i innych miast regionu osiągać wysokie pozycje w Google dla lokalnych zapytań. Budujemy widoczność tam, gdzie Twoi klienci faktycznie szukają usług.',
        },
        {
          title: 'Sklepy internetowe i e-commerce',
          body: 'Tworzymy sklepy internetowe dla firm z województwa łódzkiego, które chcą rozszerzyć sprzedaż poza lokalny rynek. Połączenie lokalnego SEO z e-commerce pozwala dotrzeć zarówno do klientów z regionu, jak i z całej Polski.',
        },
        {
          title: 'Obsługa i utrzymanie stron',
          body: 'Zapewniamy bieżące wsparcie techniczne, aktualizacje bezpieczeństwa i rozwój stron dla firm z całego województwa łódzkiego. Nasz zespół jest dostępny i reaguje sprawnie na każde zgłoszenie.',
        },
      ]}
      seoSectionHeading="SEO regionalne — widoczność w całym województwie łódzkim"
      seoBody={
        <>
          <p className="mb-4">
            Lokalne SEO dla województwa łódzkiego to nie tylko optymalizacja pod jedną frazę. Pomagamy firmom
            budować widoczność w Google dla dziesiątek fraz lokalnych — "strony internetowe Łódź", "tworzenie
            stron Zduńska Wola", "projektowanie stron www Sieradz" i wielu innych. Dzięki temu Twoja firma
            pojawia się w wynikach wyszukiwania niezależnie od tego, w którym mieście regionu szuka Cię potencjalny
            klient.
          </p>
          <p className="mb-4">
            Nasze działania obejmują optymalizację techniczną strony, budowanie treści zoptymalizowanych pod
            frazy lokalne, konfigurację Google Moja Firma oraz budowanie wartościowych linków z lokalnych
            serwisów. To kompleksowe podejście, które przynosi mierzalne efekty dla firm z województwa łódzkiego.
          </p>
          <p>
            Województwo łódzkie to dynamicznie rozwijający się region z silną bazą MŚP. Firmy, które inwestują
            w profesjonalne strony www i lokalne SEO, zyskują realną przewagę nad konkurencją, która wciąż
            polega wyłącznie na poleceniach i tradycyjnej reklamie.
          </p>
        </>
      }
      processSectionHeading="Jak pracujemy z firmami z województwa łódzkiego?"
      processSteps={[
        {
          title: 'Bezpłatna konsultacja',
          body: 'Poznajemy Twoją firmę, branżę i cele. Analizujemy lokalną konkurencję w Twoim mieście i powiecie, aby opracować strategię, która wyróżni Cię na tle innych.',
        },
        {
          title: 'Strategia i projekt',
          body: 'Tworzymy projekt strony dostosowany do Twoich potrzeb i specyfiki lokalnego rynku. Uwzględniamy lokalne frazy SEO i potrzeby Twoich klientów z województwa łódzkiego.',
        },
        {
          title: 'Realizacja i wdrożenie',
          body: 'Budujemy stronę używając nowoczesnych technologii. Dbamy o wydajność, bezpieczeństwo i optymalizację pod kątem wyszukiwarek. Wdrożenie jest szybkie i bezproblemowe.',
        },
        {
          title: 'Lokalna optymalizacja SEO',
          body: 'Po wdrożeniu optymalizujemy stronę pod frazy lokalne dla Twojego miasta i całego województwa łódzkiego. Konfigurujemy Google Moja Firma i budujemy widoczność regionalną.',
        },
        {
          title: 'Wsparcie i rozwój',
          body: 'Zapewniamy bieżące wsparcie techniczne i pomagamy rozwijać stronę wraz z rozwojem Twojej firmy. Jesteśmy dostępni dla klientów z całego województwa łódzkiego.',
        },
      ]}
      benefitsSectionHeading="Korzyści z lokalnej strony internetowej dla firmy z województwa łódzkiego"
      benefits={[
        {
          title: 'Widoczność w całym regionie',
          body: 'Docierasz do klientów z całego województwa łódzkiego — Łodzi, Zduńskiej Woli, Sieradza i dziesiątek innych miejscowości.',
        },
        {
          title: 'Przewaga nad lokalną konkurencją',
          body: 'Profesjonalna strona www z lokalnym SEO daje Ci realną przewagę nad firmami, które wciąż nie inwestują w obecność online.',
        },
        {
          title: 'Więcej zapytań od lokalnych klientów',
          body: 'Zoptymalizowana strona przyciąga klientów z Twojej okolicy — ludzi, którzy aktywnie szukają usług, które oferujesz.',
        },
        {
          title: 'Budowanie zaufania lokalnej społeczności',
          body: 'Profesjonalna strona www wzmacnia wizerunek firmy jako lokalnego eksperta, na którym można polegać.',
        },
        {
          title: 'Dostępność przez całą dobę',
          body: 'Twoja strona pracuje dla Ciebie 24 godziny na dobę — zbiera leady, prezentuje ofertę i odpowiada na pytania klientów nawet gdy Ty śpisz.',
        },
        {
          title: 'Mierzalne efekty',
          body: 'Konfigurujemy Google Analytics i Search Console, dzięki czemu dokładnie wiesz, ile klientów z województwa łódzkiego trafia na Twoją stronę.',
        },
        {
          title: 'Skalowalność',
          body: 'Strona rośnie razem z Twoją firmą. Możemy łatwo rozbudowywać funkcjonalności, dodawać nowe usługi i poszerzać zasięg na kolejne rynki.',
        },
      ]}
      audienceSectionHeading="Dla kogo tworzymy strony internetowe w województwie łódzkim?"
      audienceIntro="Nasze usługi są skierowane do firm i przedsiębiorców z całego województwa łódzkiego, którzy chcą zwiększyć swoją obecność online. Pracujemy z:"
      audiences={[
        'Małymi i średnimi przedsiębiorstwami z Łodzi i okolic',
        'Firmami usługowymi z Zduńskiej Woli i powiatu zduńskowolskiego',
        'Przedsiębiorcami z Sieradza i powiatu sieradzkiego',
        'Firmami produkcyjnymi z całego regionu łódzkiego',
        'Sklepami i punktami usługowymi szukającymi klientów online',
        'Gabinetami lekarskimi i stomatologicznymi',
        'Restauracjami, hotelami i obiektami turystycznymi',
        'Kancelariami, biurami rachunkowymi i doradczymi',
        'Startupami i nowymi firmami z województwa łódzkiego',
        'Organizacjami pozarządowymi i stowarzyszeniami',
      ]}
      audienceOutro="Niezależnie od branży i skali działalności — jeśli prowadzisz firmę w województwie łódzkim, pomożemy Ci zbudować skuteczną obecność online i przyciągnąć więcej klientów z regionu."
      faqSectionHeading="FAQ - Pytania o strony internetowe dla firm z województwa łódzkiego"
      faqItems={[
        {
          question: 'Czy obsługujecie firmy z całego województwa łódzkiego?',
          answer:
            'Tak, obsługujemy firmy z całego województwa łódzkiego — z Łodzi, Zduńskiej Woli, Sieradza, Pabianic, Zgierza, Tomaszowa Mazowieckiego i wszystkich innych miast i miejscowości regionu. Dla Łodzi, Zduńskiej Woli i Sieradza przygotowaliśmy dedykowane strony z pełną ofertą lokalną.',
        },
        {
          question: 'Ile kosztuje strona internetowa dla firmy z województwa łódzkiego?',
          answer:
            'Koszt zależy od zakresu projektu. Prosta strona wizytówka to wydatek od kilkuset do kilku tysięcy złotych, strona z rozbudowaną treścią i SEO — od 2000 do 5000 zł, sklep internetowy — od 5000 zł wzwyż. Zawsze oferujemy bezpłatną wycenę dostosowaną do Twoich potrzeb i budżetu.',
        },
        {
          question: 'Jak długo trwa stworzenie strony internetowej?',
          answer:
            'Standardowy czas realizacji wynosi 2–6 tygodni w zależności od złożoności projektu. Prosta strona wizytówka może być gotowa nawet w ciągu 2 tygodni. Przy pilnych projektach staramy się dostosować harmonogram do Twoich potrzeb.',
        },
        {
          question: 'Czy zajmujecie się SEO dla lokalnych fraz w województwie łódzkim?',
          answer:
            'Tak, specjalizujemy się w lokalnym SEO dla województwa łódzkiego. Optymalizujemy strony pod frazy takie jak "usługi [Twoja branża] Łódź", "firma [branża] Zduńska Wola" czy "najlepsza [usługa] w Sieradzu". Konfigurujemy też Google Moja Firma, co znacznie zwiększa widoczność w lokalnych wynikach wyszukiwania.',
        },
        {
          question: 'Czy mogę zobaczyć wcześniejsze realizacje dla firm z regionu?',
          answer:
            'Tak, chętnie pokażemy Ci przykłady naszych realizacji. Skontaktuj się z nami, a przygotujemy portfolio dopasowane do Twojej branży i oczekiwań. Możemy też umówić się na bezpłatną konsultację online lub spotkanie w naszym biurze.',
        },
        {
          question: 'Czy po uruchomieniu strony zapewniacie wsparcie techniczne?',
          answer:
            'Tak, oferujemy pełne wsparcie techniczne po wdrożeniu. Obejmuje ono aktualizacje bezpieczeństwa, monitoring działania strony, pomoc przy zmianach treści oraz bieżące doradztwo. Jesteśmy dostępni dla wszystkich klientów z województwa łódzkiego.',
        },
      ]}
      cityLinksSectionHeading="Dedykowane oferty dla miast województwa łódzkiego"
      cityLinksIntro="Dla największych miast regionu przygotowaliśmy dedykowane strony z pełną informacją o naszej ofercie:"
      cityLinks={[
        {
          to: '/strony-internetowe-lodz',
          label: 'Strony internetowe Łódź',
          description: 'Profesjonalne strony www dla firm z Łodzi i aglomeracji łódzkiej',
        },
        {
          to: '/strony-internetowe-zdunska-wola',
          label: 'Strony internetowe Zduńska Wola',
          description: 'Nowoczesne strony www dla firm ze Zduńskiej Woli i okolic',
        },
        {
          to: '/strony-internetowe-sieradz',
          label: 'Strony internetowe Sieradz',
          description: 'Skuteczne strony www dla firm z Sieradza i powiatu sieradzkiego',
        },
      ]}
      ctaHeading="Zbudujmy razem Twoją obecność online w województwie łódzkim"
      ctaSubheading="Skontaktuj się z nami już dziś i sprawdź, jak możemy pomóc Twojej firmie z regionu łódzkiego rosnąć w internecie."
    />
  )
}
