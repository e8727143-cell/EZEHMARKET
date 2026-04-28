import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'ChatGPT PRO',
    description: 'Acceso ilimitado al modelo más avanzado de OpenAI. Productividad sin límites.',
    price: 10.97,
    image: 'https://i.imgur.com/C8fJT1u.png',
    category: 'Curso',
    rating: 4.9,
    options: [
      { duration: '1 Mes', price: 10.97, originalPrice: 20.00 },
      { duration: '3 Meses', price: 29.97, originalPrice: 60.00 }
    ],
    benefits: [
      'Acceso a GPT-4o, GPT-4.5 y modelos o1',
      'Interacción por voz avanzada (Advanced Voice)',
      'Generación de imágenes con DALL-E/Sora',
      'Prioridad de acceso y respuestas rápidas',
      'Creación y uso de GPTs personalizados'
    ]
  },
  {
    id: '2',
    title: 'Gemini Pro',
    description: 'La inteligencia artificial más potente de Google integrada en tu ecosistema.',
    price: 8.97,
    image: 'https://i.imgur.com/SccBiVS.png',
    category: 'Curso',
    rating: 4.8,
    options: [
      { duration: '1 Mes', price: 8.97, originalPrice: 19.99 },
      { duration: '3 Meses', price: 16.97, originalPrice: 59.97 }
    ],
    benefits: [
      'Ventana de contexto de 1 millón de tokens',
      '1,000 créditos de IA mensuales (50+ videos)',
      'Deep Research: informes de investigación exhaustivos',
      'Uso en Gmail, Docs y Drive',
      '2 TB en Google One para fotos y archivos',
      'Generación 2K–4K con Nano Banana Pro'
    ]
  },
  {
    id: '6',
    title: 'Gemini ULTRA',
    description: 'El nivel máximo para profesionales y creadores de alto volumen.',
    price: 19.97,
    image: 'https://i.imgur.com/SccBiVS.png',
    category: 'Curso',
    rating: 5.0,
    options: [
      { duration: '1 Mes', price: 19.97, originalPrice: 249.99 },
      { duration: '3 Meses', price: 39.97, originalPrice: 749.97 }
    ],
    benefits: [
      'Acceso exclusivo a Gemini 3 Ultra (Deep Think)',
      '25,000 créditos de IA mensuales (Cientos de videos)',
      '30 TB de espacio masivo en Google One',
      'YouTube Premium y Google Home Premium incluido',
      'Gemini CLI, Code Assist y $100 Cloud Credits',
      'Project Mariner: 10 tareas simultaneas en background'
    ]
  },
  {
    id: '3',
    title: 'Grok Pro',
    description: 'Accede a la inteligencia artificial sin filtros de X (Twitter).',
    price: 12.97,
    image: 'https://i.imgur.com/Ui965L4.png',
    category: 'Curso',
    rating: 4.7,
    options: [
      { duration: '1 Mes', price: 12.97, originalPrice: 30.00 },
      { duration: '3 Meses', price: 26.97, originalPrice: 90.00 }
    ],
    benefits: [
      'Acceso completo a Grok 4 y análisis de código',
      'Modo Experto: 4 agentes de IA en paralelo',
      'Capacidad 20x mayor para imágenes y videos HD',
      'Contexto 5 veces más largo que versión Lite'
    ]
  },
  {
    id: '4',
    title: 'Canva Pro',
    description: 'Diseño profesional con acceso total a elementos premium y herramientas mágicas.',
    price: 4.97,
    image: 'https://i.imgur.com/sIh2wz4.png',
    category: 'Template',
    rating: 4.9,
    options: [
      { duration: '1 Mes', price: 4.97, originalPrice: 15.00 },
      { duration: '3 Meses', price: 11.97, originalPrice: 45.00 }
    ],
    benefits: [
      'Acceso a 141 millones de elementos premium',
      'Kit de Marca: Logos, colores y fuentes guardados',
      'Magic Studio: Quita fondos con un clic',
      '100 GB en la nube y programador social'
    ]
  },
  {
    id: '5',
    title: 'CapCut Pro',
    description: 'Edición de video de alto nivel con efectos exclusivos y exportación 4K.',
    price: 7.97,
    image: 'https://i.imgur.com/cywuPPh.png',
    category: 'Mentoria',
    rating: 4.9,
    options: [
      { duration: '1 Mes', price: 7.97, originalPrice: 19.99 },
      { duration: '3 Meses', price: 14.97, originalPrice: 59.97 }
    ],
    benefits: [
      'Seguimiento de movimiento y estabilización pro',
      'Biblioteca completa de efectos y transiciones',
      'Exportación 4K y escalado por IA',
      'Descargas ilimitadas sin marcas de agua'
    ]
  }
];
