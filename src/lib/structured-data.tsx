
export interface StructuredDataProps {
    url?: string;
    breadcrumbs?: Array<{ name: string; url: string }>;
}

export function generateLocalBusinessSchema(url: string = 'https://interactive.net.pl') {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${url}#organization`,
        name: 'Interactive',
        description: 'Interactive – tworzymy profesjonalne strony internetowe w województwie łódzkim. Nowoczesne, szybkie i responsywne strony www dla firm z Łodzi, Sieradza, Zduńskiej Woli, Łasku i całego regionu.',
        url: url,
        logo: `${url}/logo-horizontal.png`,
        image: `${url}/logo-horizontal.png`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Zduńska Wola',
            addressRegion: 'Łódzkie',
            addressCountry: 'PL',
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'Zduńska Wola',
            },
            {
                '@type': 'City',
                name: 'Łódź',
            },
            {
                '@type': 'City',
                name: 'Sieradz',
            },
            {
                '@type': 'City',
                name: 'Łask',
            },
            {
                '@type': 'State',
                name: 'Województwo Łódzkie',
            },
        ],
        priceRange: '$$',
        telephone: '+48518275470',
        email: 'jakub.stawski@interactive.net.pl',
        sameAs: [
            'https://facebook.com/interactivenetpl',
            'https://instagram.com/interactivenetpl',
            'https://linkedin.com/in/jakub-stawski-dev',
            'https://github.com/pstawekl',
        ],
    };
}

export function generateWebsiteSchema(url: string = 'https://interactive.net.pl') {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Interactive - Strony Internetowe Województwo Łódzkie',
        url: url,
        description: 'Interactive – tworzymy profesjonalne strony internetowe w województwie łódzkim. Nowoczesne, szybkie i responsywne strony www dla firm z Łodzi, Sieradza, Zduńskiej Woli, Łasku i całego regionu.',
        publisher: {
            '@type': 'Organization',
            name: 'Interactive',
            logo: {
                '@type': 'ImageObject',
                url: `${url}/logo-horizontal.png`,
            },
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${url}/?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

export function generateBreadcrumbListSchema(breadcrumbs: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url,
        })),
    };
}

export function generateOrganizationSchema(url: string = 'https://interactive.net.pl') {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Interactive',
        url: url,
        logo: `${url}/logo-horizontal.png`,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+48518275470',
            contactType: 'customer service',
            email: 'jakub.stawski@interactive.net.pl',
            areaServed: 'PL',
            availableLanguage: ['Polish'],
        },
        sameAs: [
            'https://facebook.com/interactivenetpl',
            'https://instagram.com/interactivenetpl',
            'https://linkedin.com/in/jakub-stawski-dev',
            'https://github.com/pstawekl',
        ],
    };
}

export function generateServiceSchema(url: string = 'https://interactive.net.pl') {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Tworzenie Stron Internetowych',
        provider: {
            '@type': 'LocalBusiness',
            name: 'Interactive',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Zduńska Wola',
                addressRegion: 'Łódzkie',
                addressCountry: 'PL',
            },
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'Zduńska Wola',
            },
            {
                '@type': 'City',
                name: 'Łódź',
            },
            {
                '@type': 'City',
                name: 'Sieradz',
            },
            {
                '@type': 'State',
                name: 'Województwo Łódzkie',
            },
        ],
        description: 'Profesjonalne tworzenie stron internetowych w województwie łódzkim. Nowoczesne, szybkie i responsywne strony www dla firm z Łodzi, Sieradza, Zduńskiej Woli, Łasku i całego regionu.',
        url: url,
    };
}

export function StructuredDataScript({ schemas }: { schemas: object[] }) {
    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}

