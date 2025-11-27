export type Language = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      speakers: 'Ponentes',
      agenda: 'Agenda',
      venue: 'Lugar',
      tickets: 'Entradas',
      sponsors: 'Patrocinadores',
      contact: 'Contacto',
    },
    hero: {
      title: 'Dominicana',
      subtitle: 'Blockchain Week',
      year: '2026',
      description:
        'Dominicana liderando blockchain en el Caribe. Únete al evento principal de blockchain, Web3, DeFi y cripto. Explora regulación, innovación y el futuro de la tecnología descentralizada en América Latina.',
      getTickets: 'Obtener Entradas',
      becomeSponsor: 'Ser Patrocinador',
      downloadDeck: 'Descargar Deck del Evento',
      dateLocation: '26-28 Mayo 2026 | Santo Domingo',
      logoAlt: 'Dominicana Blockchain Week 2026 - Evento Principal de Blockchain en el Caribe',
      polaroidCards: {
        card1: {
          frontText: 'DBW 2026',
          backText: 'Únete al evento principal de blockchain en el Caribe. Descubre innovación, conecta con líderes y explora el futuro de Web3.',
        },
        card2: {
          frontText: 'Santo Domingo',
          backText: 'Experimenta la vibrante capital de la República Dominicana. Tres días de charlas de vanguardia, talleres y networking inolvidable.',
        },
        card3: {
          frontText: '26-28 Mayo',
          backText: '¡Reserva la fecha! Entradas anticipadas disponibles ahora. No te pierdas esta oportunidad única de conectar con la comunidad blockchain.',
        },
      },
      tags: {
        speakers: 'Ponentes',
        workshops: 'Talleres',
        networking: 'Networking',
        defi: 'DeFi',
        regulation: 'Regulación',
      },
    },
    about: {
      title: '¿Por qué',
      titleHighlight: 'Dominicana',
      description:
        'La República Dominicana está emergiendo como un centro clave para la innovación blockchain en América Latina. Únete a nosotros para un evento que combina tecnología de vanguardia con hospitalidad caribeña.',
      stats: {
        attendees: 'Asistentes',
        investors: 'Inversores',
        speakers: 'Ponentes',
        media: 'Medios',
        web3Alliances: 'Alianzas WEB3',
        days: 'Días',
        tracks: 'Tracks',
      },
      reasons: {
        location: {
          title: 'Ubicación Estratégica',
          description:
            'La República Dominicana es una puerta de entrada entre América del Norte y del Sur, perfecta para conectar comunidades blockchain globales.',
        },
        ecosystem: {
          title: 'Ecosistema en Crecimiento',
          description:
            'Un ecosistema de cripto y blockchain en rápida expansión con creciente adopción y claridad regulatoria.',
        },
        regulation: {
          title: 'Innovación Regulatoria',
          description:
            'Regulaciones visionarias que apoyan la innovación blockchain mientras aseguran seguridad y cumplimiento.',
        },
        tourism: {
          title: 'Turismo y Negocios',
          description:
            'Combina negocios con placer en uno de los destinos más hermosos del Caribe.',
        },
      },
    },
    speakers: {
      title: 'Ponentes',
      titleHighlight: 'Destacados',
      description:
        'Aprende de líderes de la industria, innovadores y pensadores que están dando forma al futuro de la tecnología blockchain.',
      moreSpeakers: 'Más ponentes próximamente',
      applyToSpeak: 'Aplicar para Hablar',
      confirmed: 'Confirmado',
      pending: 'PENDIENTE',
      roles: {
        president: 'Presidente',
        mayor: 'Alcaldesa',
        consulGeneral: 'Consul General',
        ceo: 'CEO',
        governor: 'Gobernador',
        founder: 'Fundador y CEO',
        cofounder: 'Cofundador de Ethereum y Fundador',
        cto: 'CTO',
      },
      tags: {
        government: 'Gobierno',
        leadership: 'Liderazgo',
        city: 'Ciudad',
        diplomacy: 'Diplomacia',
        international: 'Internacional',
        blockchain: 'Blockchain',
        innovation: 'Innovación',
        ecosystem: 'Ecosistema',
        finance: 'Finanzas',
        regulation: 'Regulación',
        founder: 'Fundador',
        technology: 'Tecnología',
        stablecoins: 'Stablecoins',
      },
    },
    agenda: {
      title: 'Agenda del',
      titleHighlight: 'Evento',
      description:
        'Tres días de charlas, talleres y oportunidades de networking en múltiples tracks.',
      day1: 'Día 1',
      day2: 'Día 2',
      day3: 'Día 3',
      downloadAgenda: 'Descargar Agenda Completa',
      detailedAgendaComing: 'Agenda detallada con ponentes y temas próximamente',
      tracks: {
        defi: 'DeFi',
        regulation: 'Regulación',
        builders: 'Builders',
        institutions: 'Instituciones',
        latam: 'Enfoque LatAm',
      },
      sessions: {
        day1: {
          date: '26 de mayo, 2026',
          openingKeynote: 'Keynote de Apertura',
          defiPanel: 'Panel de Discusión DeFi',
          lunchNetworking: 'Almuerzo y Networking',
          regulatoryWorkshop: 'Taller de Marco Regulatorio',
          buildersShowcase: 'Showcase de Builders',
          closingWords: 'Palabras de Cierre',
        },
        day2: {
          date: '27 de mayo, 2026',
          morningKeynote: 'Keynote Matutino',
          institutionalAdoption: 'Adopción Institucional',
          lunchNetworking: 'Almuerzo y Networking',
          latamEcosystemPanel: 'Panel del Ecosistema LatAm',
          technicalDeepDive: 'Deep Dive Técnico',
          networkingReception: 'Recepción de Networking',
        },
        day3: {
          date: '28 de mayo, 2026',
          finalKeynote: 'Keynote Final',
          futureOfWeb3: 'El Futuro de Web3',
          closingCeremony: 'Ceremonia de Cierre',
        },
      },
    },
    venue: {
      title: 'Lugar y',
      titleHighlight: 'Viaje',
      description:
        'Únete a nosotros en el corazón del Caribe para una experiencia blockchain inolvidable.',
      venueTitle: 'Lugar del Evento',
      venueDescription:
        'El evento se llevará a cabo en un centro de convenciones de primer nivel en Santo Domingo, República Dominicana. El lugar cuenta con instalaciones de última generación, múltiples salas de conferencias y espacios de networking perfectos para un evento blockchain de clase mundial.',
      venueDetails:
        'Los detalles completos del lugar y la dirección se compartirán con los asistentes registrados.',
      mapComingSoon: 'Mapa Próximamente',
      santoDomingo: 'Santo Domingo, República Dominicana',
      whereToStay: {
        title: 'Dónde Hospedarse',
        description:
          'Hoteles recomendados cerca del lugar con tarifas especiales para asistentes.',
      },
      howToArrive: {
        title: 'Cómo Llegar',
        description:
          'Vuelos directos a Santo Domingo desde ciudades principales. Traslados desde el aeropuerto disponibles.',
      },
      thingsToDo: {
        title: 'Qué Hacer',
        description:
          'Explora las hermosas playas, sitios históricos y la vibrante cultura de la República Dominicana.',
      },
    },
    tickets: {
      title: 'Obtén tus',
      titleHighlight: 'Entradas',
      description:
        'Elige el nivel de entrada que mejor se adapte a tus necesidades. Precios especiales disponibles por tiempo limitado.',
      earlyBird: 'Early Bird',
      regular: 'Regular',
      vip: 'VIP',
      limited: 'Disponibilidad limitada',
      standard: 'Entrada estándar',
      premium: 'Experiencia premium',
      popular: 'Popular',
      originalPrice: 'Precio original',
      buyNow: 'Comprar Ahora',
      soldOut: 'Agotado',
      ticketsSoldOut: 'Tickets Agotados',
      groupDiscounts: 'Descuentos grupales disponibles para equipos de 5+ asistentes',
      contactGroupRates: 'Contactar para Tarifas Grupales',
      tiers: {
        fullAccess: {
          name: 'Full Access | DBW',
          description: 'Categoría de participación para Público en General Full Access CC | After Party / Además tienes un 5% de descuento en alojamiento por medio de la plataforma BLOCK TRAVEL',
          features: [
            'Acceso completo a todas las sesiones',
            'After Party incluido',
            '5% descuento en alojamiento',
            'Materiales digitales del evento',
            'Coffee breaks y almuerzo',
          ],
        },
        soloExpo: {
          name: 'Solo Expo | 1 Día',
          description: 'Categoría de participación para Público en General Solo Expo CC | Día 23/ABR',
          features: [
            'Acceso a la zona de exposición',
            'Un día completo',
            'Networking básico',
            'Materiales digitales',
          ],
        },
        student: {
          name: 'Estudiante | 1 Día',
          description: 'Categoría de participación para Público en General Formación | 1 Día | After Party',
          features: [
            'Acceso a sesiones de formación',
            'Un día completo',
            'After Party incluido',
            'Materiales educativos',
          ],
        },
        business: {
          name: 'Business',
          description: 'Acceso full CC Food&drinks CC Investor\'s Night | Plazas Limitadas. Además tienes un 10% de descuento en alojamiento por medio de la plataforma BLOCK TRAVEL',
          features: [
            'Acceso completo a todas las sesiones',
            'Food & drinks incluidos',
            'Investor\'s Night exclusivo',
            '10% descuento en alojamiento',
            'Networking premium',
            'Materiales exclusivos',
          ],
        },
        vip: {
          name: 'VIP',
          description: 'Cena Inaugural | Cena Investor\'s Night Acceso Full Zona VIP Welcome Pack | After Party VIP',
          features: [
            'Cena Inaugural exclusiva',
            'Cena Investor\'s Night',
            'Acceso completo zona VIP',
            'Welcome Pack premium',
            'After Party VIP',
            'Networking de élite',
            'Materiales exclusivos VIP',
          ],
        },
      },
      features: {
        fullAccess: 'Acceso completo de 3 días',
        allSessions: 'Todas las sesiones y talleres',
        networking: 'Eventos de networking',
        materials: 'Materiales digitales del evento',
        breaks: 'Coffee breaks y almuerzo',
        welcomeReception: 'Recepción de bienvenida',
        vipLounge: 'Acceso a lounge VIP',
        meetGreet: 'Meet & greet con ponentes',
        vipDinner: 'Cena VIP exclusiva',
        prioritySeating: 'Asientos prioritarios',
        swagBag: 'Bolsa de regalos del evento',
        postEvent: 'Networking post-evento',
      },
    },
    sponsors: {
      title: 'Patrocinadores y',
      titleHighlight: 'Socios',
      description:
        'Estamos agradecidos con nuestros patrocinadores y socios que hacen posible este evento.',
      becomeSponsor: 'Ser Patrocinador',
      gold: 'Patrocinadores Gold',
      silver: 'Patrocinadores Silver',
      bronze: 'Patrocinadores Bronze',
      interest:
        '¿Interesado en patrocinar? Contáctanos para conocer las oportunidades y beneficios de patrocinio.',
    },
    newsletter: {
      title: 'Únete a Nuestra',
      titleHighlight: 'Comunidad',
      description:
        'Mantente actualizado con las últimas noticias, anuncios de ponentes y ofertas exclusivas de entradas anticipadas.',
      emailPlaceholder: 'Ingresa tu email',
      subscribe: 'Suscribirse',
      thankYou: '¡Gracias por suscribirte!',
      checkEmail: 'Revisa tu email para confirmación.',
    },
    faq: {
      title: 'Preguntas',
      titleHighlight: 'Frecuentes',
      description: 'Encuentra respuestas a preguntas comunes sobre el evento.',
      questions: {
        when: {
          q: '¿Cuándo y dónde es el evento?',
          a: 'Dominicana Blockchain Week 2026 se llevará a cabo del 15 al 17 de marzo de 2026 en Santo Domingo, República Dominicana. El lugar exacto se compartirá con los asistentes registrados.',
        },
        included: {
          q: '¿Qué está incluido en la entrada?',
          a: 'La entrada incluye acceso completo de 3 días a todas las sesiones, talleres, eventos de networking, materiales digitales del evento, coffee breaks y almuerzo. Las entradas VIP incluyen beneficios adicionales como acceso a lounge VIP, meet & greet con ponentes y cena exclusiva.',
        },
        refunds: {
          q: '¿Hay reembolsos disponibles?',
          a: 'Los reembolsos están disponibles hasta 30 días antes del evento. Después de eso, las entradas pueden transferirse a otra persona. Contáctanos para asistencia con transferencias o reembolsos.',
        },
        language: {
          q: '¿En qué idioma será el evento?',
          a: 'El evento será principalmente en inglés, con algunas sesiones disponibles en español. Puede haber traducción simultánea disponible para las charlas principales.',
        },
        dressCode: {
          q: '¿Hay un código de vestimenta?',
          a: 'Se recomienda vestimenta casual de negocios. Ropa cómoda está bien para talleres y eventos de networking.',
        },
        recorded: {
          q: '¿Se grabarán las sesiones?',
          a: 'Algunas sesiones seleccionadas se grabarán y estarán disponibles para los asistentes después del evento. No todas las sesiones pueden grabarse debido a las preferencias de los ponentes.',
        },
        transport: {
          q: '¿Cómo llego al lugar?',
          a: 'El lugar es fácilmente accesible desde el Aeropuerto Internacional de Santo Domingo. Proporcionaremos información detallada de viaje y opciones de transporte recomendadas a los asistentes registrados.',
        },
        groupDiscounts: {
          q: '¿Hay descuentos grupales?',
          a: 'Sí, ofrecemos descuentos grupales para equipos de 5 o más asistentes. Contáctanos para precios grupales y arreglos especiales.',
        },
      },
    },
    contact: {
      title: 'Ponerse en',
      titleHighlight: 'Contacto',
      description:
        '¿Tienes preguntas? ¿Quieres patrocinar o hablar? Nos encantaría saber de ti.',
      name: 'Nombre',
      email: 'Email',
      emailPlaceholder: 'tu@email.com',
      topic: 'Tema',
      message: 'Mensaje',
      sendMessage: 'Enviar Mensaje',
      thankYou: '¡Gracias por tu mensaje!',
      weWillReply: 'Te responderemos lo antes posible.',
      topics: {
        general: 'Consulta General',
        sponsorship: 'Patrocinio',
        speaking: 'Oportunidad de Hablar',
        media: 'Medios y Prensa',
        partnership: 'Asociación',
      },
    },
    footer: {
      location: 'Santo Domingo, República Dominicana',
      quickLinks: 'Enlaces Rápidos',
      connect: 'Conectar',
      rights: '© 2026 Dominicana Blockchain Week. Todos los derechos reservados.',
      legal: {
        privacyPolicy: 'Política de Privacidad',
        termsOfService: 'Términos de Servicio',
        cookiePolicy: 'Política de Cookies',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      speakers: 'Speakers',
      agenda: 'Agenda',
      venue: 'Venue',
      tickets: 'Tickets',
      sponsors: 'Sponsors',
      contact: 'Contact',
    },
    hero: {
      title: 'Dominicana',
      subtitle: 'Blockchain Week',
      year: '2026',
      description:
        'Join the premier blockchain, Web3, DeFi, and crypto event in the Caribbean. Explore regulation, innovation, and the future of decentralized technology in Latin America.',
      getTickets: 'Get Tickets',
      becomeSponsor: 'Become a Sponsor',
      downloadDeck: 'Download Event Deck',
      dateLocation: 'May 26-28, 2026 | Santo Domingo',
      logoAlt: 'Dominicana Blockchain Week 2026 - Premier Blockchain Event in the Caribbean',
      polaroidCards: {
        card1: {
          frontText: 'DBW 2026',
          backText: 'Join us for the premier blockchain event in the Caribbean. Discover innovation, network with leaders, and explore the future of Web3.',
        },
        card2: {
          frontText: 'Santo Domingo',
          backText: 'Experience the vibrant capital of the Dominican Republic. Three days of cutting-edge talks, workshops, and unforgettable networking.',
        },
        card3: {
          frontText: 'May 26-28',
          backText: 'Save the date! Early bird tickets available now. Don\'t miss this unique opportunity to connect with the blockchain community.',
        },
      },
      tags: {
        speakers: 'Speakers',
        workshops: 'Workshops',
        networking: 'Networking',
        defi: 'DeFi',
        regulation: 'Regulation',
      },
    },
    about: {
      title: 'Why',
      titleHighlight: 'Dominicana',
      description:
        'The Dominican Republic is emerging as a key hub for blockchain innovation in Latin America. Join us for an event that combines cutting-edge technology with Caribbean hospitality.',
      stats: {
        attendees: 'Attendees',
        investors: 'Investors',
        speakers: 'Speakers',
        media: 'Media',
        web3Alliances: 'Web3 Alliances',
        days: 'Days',
        tracks: 'Tracks',
      },
      reasons: {
        location: {
          title: 'Strategic Location',
          description:
            'Dominican Republic is a gateway between North and South America, perfect for connecting global blockchain communities.',
        },
        ecosystem: {
          title: 'Growing Ecosystem',
          description:
            'A rapidly expanding crypto and blockchain ecosystem with increasing adoption and regulatory clarity.',
        },
        regulation: {
          title: 'Regulatory Innovation',
          description:
            'Forward-thinking regulations that support blockchain innovation while ensuring security and compliance.',
        },
        tourism: {
          title: 'Tourism & Business',
          description:
            'Combine business with pleasure in one of the Caribbean\'s most beautiful destinations.',
        },
      },
    },
    speakers: {
      title: 'Featured',
      titleHighlight: 'Speakers',
      description:
        'Learn from industry leaders, innovators, and thought leaders shaping the future of blockchain technology.',
      moreSpeakers: 'More speakers to be announced soon',
      applyToSpeak: 'Apply to Speak',
      confirmed: 'Confirmed',
      pending: 'PENDING',
      roles: {
        president: 'President',
        mayor: 'Mayor',
        consulGeneral: 'Consul General',
        ceo: 'CEO',
        governor: 'Governor',
        founder: 'Founder & CEO',
        cofounder: 'Ethereum Co-founder & Founder',
        cto: 'CTO',
      },
      tags: {
        government: 'Government',
        leadership: 'Leadership',
        city: 'City',
        diplomacy: 'Diplomacy',
        international: 'International',
        blockchain: 'Blockchain',
        innovation: 'Innovation',
        ecosystem: 'Ecosystem',
        finance: 'Finance',
        regulation: 'Regulation',
        founder: 'Founder',
        technology: 'Technology',
        stablecoins: 'Stablecoins',
      },
    },
    agenda: {
      title: 'Event',
      titleHighlight: 'Agenda',
      description:
        'Three days of insightful talks, workshops, and networking opportunities across multiple tracks.',
      day1: 'Day 1',
      day2: 'Day 2',
      day3: 'Day 3',
      downloadAgenda: 'Download Full Agenda',
      detailedAgendaComing: 'Detailed agenda with speakers and topics coming soon',
      tracks: {
        defi: 'DeFi',
        regulation: 'Regulation',
        builders: 'Builders',
        institutions: 'Institutions',
        latam: 'LatAm Focus',
      },
      sessions: {
        day1: {
          date: 'May 26, 2026',
          openingKeynote: 'Opening Keynote',
          defiPanel: 'DeFi Discussion Panel',
          lunchNetworking: 'Lunch & Networking',
          regulatoryWorkshop: 'Regulatory Framework Workshop',
          buildersShowcase: 'Builders Showcase',
          closingWords: 'Closing Remarks',
        },
        day2: {
          date: 'May 27, 2026',
          morningKeynote: 'Morning Keynote',
          institutionalAdoption: 'Institutional Adoption',
          lunchNetworking: 'Lunch & Networking',
          latamEcosystemPanel: 'LatAm Ecosystem Panel',
          technicalDeepDive: 'Technical Deep Dive',
          networkingReception: 'Networking Reception',
        },
        day3: {
          date: 'May 28, 2026',
          finalKeynote: 'Final Keynote',
          futureOfWeb3: 'The Future of Web3',
          closingCeremony: 'Closing Ceremony',
        },
      },
    },
    venue: {
      title: 'Venue &',
      titleHighlight: 'Travel',
      description:
        'Join us in the heart of the Caribbean for an unforgettable blockchain experience.',
      venueTitle: 'Event Venue',
      venueDescription:
        'The event will be held at a premier convention center in Santo Domingo, Dominican Republic. The venue features state-of-the-art facilities, multiple conference rooms, and networking spaces perfect for a world-class blockchain event.',
      venueDetails:
        'Full venue details and address will be shared with registered attendees.',
      mapComingSoon: 'Map Coming Soon',
      santoDomingo: 'Santo Domingo, Dominican Republic',
      whereToStay: {
        title: 'Where to Stay',
        description:
          'Recommended hotels near the venue with special rates for attendees.',
      },
      howToArrive: {
        title: 'How to Arrive',
        description:
          'Direct flights to Santo Domingo from major cities. Airport transfers available.',
      },
      thingsToDo: {
        title: 'Things to Do',
        description:
          'Explore the beautiful beaches, historic sites, and vibrant culture of the Dominican Republic.',
      },
    },
    tickets: {
      title: 'Get Your',
      titleHighlight: 'Tickets',
      description:
        'Choose the ticket tier that best fits your needs. Early bird pricing available for a limited time.',
      earlyBird: 'Early Bird',
      regular: 'Regular',
      vip: 'VIP',
      limited: 'Limited availability',
      standard: 'Standard ticket',
      premium: 'Premium experience',
      popular: 'Popular',
      originalPrice: 'Original price',
      buyNow: 'Buy Now',
      soldOut: 'Sold Out',
      ticketsSoldOut: 'Tickets Sold Out',
      groupDiscounts: 'Group discounts available for teams of 5+ attendees',
      contactGroupRates: 'Contact for Group Rates',
      tiers: {
        fullAccess: {
          name: 'Full Access | DBW',
          description: 'General Public participation category Full Access CC | After Party / Plus you get a 5% discount on accommodation through the BLOCK TRAVEL platform',
          features: [
            'Full access to all sessions',
            'After Party included',
            '5% accommodation discount',
            'Digital event materials',
            'Coffee breaks & lunch',
          ],
        },
        soloExpo: {
          name: 'Solo Expo | 1 Day',
          description: 'General Public participation category Solo Expo CC | Day 23/APR',
          features: [
            'Access to exhibition area',
            'Full day access',
            'Basic networking',
            'Digital materials',
          ],
        },
        student: {
          name: 'Student | 1 Day',
          description: 'General Public participation category Training | 1 Day | After Party',
          features: [
            'Access to training sessions',
            'Full day access',
            'After Party included',
            'Educational materials',
          ],
        },
        business: {
          name: 'Business',
          description: 'Full CC access Food&drinks CC Investor\'s Night | Limited spots. Plus you get a 10% discount on accommodation through the BLOCK TRAVEL platform',
          features: [
            'Full access to all sessions',
            'Food & drinks included',
            'Exclusive Investor\'s Night',
            '10% accommodation discount',
            'Premium networking',
            'Exclusive materials',
          ],
        },
        vip: {
          name: 'VIP',
          description: 'Inaugural Dinner | Investor\'s Night Dinner Full VIP Zone Access Welcome Pack | VIP After Party',
          features: [
            'Exclusive Inaugural Dinner',
            'Investor\'s Night Dinner',
            'Full VIP zone access',
            'Premium Welcome Pack',
            'VIP After Party',
            'Elite networking',
            'Exclusive VIP materials',
          ],
        },
      },
      features: {
        fullAccess: 'Full 3-day access',
        allSessions: 'All sessions & workshops',
        networking: 'Networking events',
        materials: 'Digital event materials',
        breaks: 'Coffee breaks & lunch',
        welcomeReception: 'Welcome reception',
        vipLounge: 'VIP lounge access',
        meetGreet: 'Speaker meet & greet',
        vipDinner: 'Exclusive VIP dinner',
        prioritySeating: 'Priority seating',
        swagBag: 'Event swag bag',
        postEvent: 'Post-event networking',
      },
    },
    sponsors: {
      title: 'Sponsors &',
      titleHighlight: 'Partners',
      description:
        'We\'re grateful to our sponsors and partners who make this event possible.',
      becomeSponsor: 'Become a Sponsor',
      gold: 'Gold Sponsors',
      silver: 'Silver Sponsors',
      bronze: 'Bronze Sponsors',
      interest:
        'Interested in sponsoring? Contact us to learn about sponsorship opportunities and benefits.',
    },
    newsletter: {
      title: 'Join Our',
      titleHighlight: 'Community',
      description:
        'Stay updated with the latest news, speaker announcements, and exclusive early-bird ticket offers.',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      thankYou: 'Thank you for subscribing!',
      checkEmail: 'Check your email for confirmation.',
    },
    faq: {
      title: 'Frequently Asked',
      titleHighlight: 'Questions',
      description: 'Find answers to common questions about the event.',
      questions: {
        when: {
          q: 'When and where is the event?',
          a: 'Dominicana Blockchain Week 2026 will take place from March 15-17, 2026 in Santo Domingo, Dominican Republic. The exact venue will be shared with registered attendees.',
        },
        included: {
          q: 'What is included in the ticket?',
          a: 'Ticket includes full 3-day access to all sessions, workshops, networking events, digital event materials, coffee breaks, and lunch. VIP tickets include additional benefits like VIP lounge access, speaker meet & greet, and exclusive dinner.',
        },
        refunds: {
          q: 'Are refunds available?',
          a: 'Refunds are available up to 30 days before the event. After that, tickets can be transferred to another person. Contact us for assistance with transfers or refunds.',
        },
        language: {
          q: 'What language will the event be in?',
          a: 'The event will be primarily in English, with some sessions available in Spanish. Simultaneous translation may be available for keynotes.',
        },
        dressCode: {
          q: 'Is there a dress code?',
          a: 'Business casual is recommended. Comfortable attire is fine for workshops and networking events.',
        },
        recorded: {
          q: 'Will sessions be recorded?',
          a: 'Select sessions will be recorded and made available to attendees after the event. Not all sessions may be recorded due to speaker preferences.',
        },
        transport: {
          q: 'How do I get to the venue?',
          a: 'The venue is easily accessible from Santo Domingo International Airport. We will provide detailed travel information and recommended transportation options to registered attendees.',
        },
        groupDiscounts: {
          q: 'Are there group discounts?',
          a: 'Yes, we offer group discounts for teams of 5 or more attendees. Contact us for group pricing and special arrangements.',
        },
      },
    },
    contact: {
      title: 'Get in',
      titleHighlight: 'Touch',
      description:
        'Have questions? Want to sponsor or speak? We\'d love to hear from you.',
      name: 'Name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      topic: 'Topic',
      message: 'Message',
      sendMessage: 'Send Message',
      thankYou: 'Thank you for your message!',
      weWillReply: 'We\'ll get back to you as soon as possible.',
      topics: {
        general: 'General Inquiry',
        sponsorship: 'Sponsorship',
        speaking: 'Speaking Opportunity',
        media: 'Media & Press',
        partnership: 'Partnership',
      },
    },
    footer: {
      location: 'Santo Domingo, Dominican Republic',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      rights: '© 2026 Dominicana Blockchain Week. All rights reserved.',
      legal: {
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        cookiePolicy: 'Cookie Policy',
      },
    },
  },
} as const;

