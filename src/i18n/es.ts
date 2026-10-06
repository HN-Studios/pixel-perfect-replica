/**
 * Textos en español. Para añadir francés o inglés, copiar este archivo a
 * src/i18n/fr.ts / src/i18n/en.ts, traducir y exponerlo desde src/i18n/index.ts.
 * Los datos pendientes van entre [corchetes] y se resaltan en amarillo.
 */
export const company = {
  legalName: "Congeladora y Procesadora Punta de Piedras, C.A.",
  shortName: "Congeladora y Procesadora Punta de Piedras",
  rif: "J-501655774",
  phone: "+58 295-2976482",
  phoneHref: "tel:+582952976482",
  whatsapp: "+58 424 8036621",
  whatsappHref: "https://wa.me/584248036621",
  email: "procesadorapuntadepiedra@gmail.com",
  place: "Punta de Piedras, Venezuela",
  catalogPdf: "/catalogo-punta-de-piedras.pdf",
} as const;

export const es = {
  locale: "es",
  brand: {
    name: "PUNTA DE PIEDRAS",
    tagline: "Congeladora y Procesadora",
  },
  topbar: "Versión de prueba · algunas fotos y datos siguen siendo provisionales",
  nav: {
    home: "Inicio",
    about: "Nosotros",
    products: "Productos",
    quality: "Procesos y calidad",
    contact: "Contacto",
    quote: "Solicitar cotización",
  },
  home: {
    eyebrow: "Punta de Piedras · Venezuela",
    heroTitle: "Pescado congelado del Caribe, listo para exportar",
    heroSubtitle:
      "Pescados y mariscos capturados con cordel y anzuelo en aguas venezolanas, procesados y congelados en nuestra planta para importadores de Guadalupe, Martinica y otros mercados.",
    ctaQuote: "Solicitar cotización",
    ctaProducts: "Ver productos",
    facts: [
      { value: "+18 años", label: "trabajando con pescado" },
      { value: "4 años", label: "procesando y congelando" },
      { value: "14 especies", label: "en nuestro catálogo" },
      { value: "Guadalupe · Martinica", label: "destinos actuales" },
    ],
    featuredTitle: "Del mar a su cámara de frío",
    featuredSubtitle:
      "Pargos, pelágicos y mariscos del Caribe venezolano, con presentaciones adaptadas a cada cliente.",
    featuredCta: "Ver las 14 especies",
    processTitle: "Cuatro pasos, sin romper la cadena de frío",
    processSubtitle:
      "Controlamos cada etapa para que el producto llegue con la misma calidad con la que salió del mar.",
    process: [
      {
        title: "Captura",
        text: "Pesca con cordel, anzuelo y nasas en el Atlántico Centro-Occidental (zona FAO 31).",
      },
      {
        title: "Procesamiento",
        text: "Eviscerado, fileteado o corte en ruedas según la presentación pedida.",
      },
      {
        title: "Congelación",
        text: "Congelación con aire forzado a −35 °C, en presentación IWP, IQF o bloque.",
      },
      { title: "Despacho", text: "Contenedor refrigerado a −18 °C con la documentación de exportación." },
    ],
    aboutTitle: "18 años en el mar, 4 exportando congelado",
    aboutText:
      "Llevamos más de 18 años trabajando con pescado. Desde hace 4 años procesamos y congelamos nuestro producto para exportarlo al Caribe francés.",
    aboutPoints: [
      "Pesca con cordel y anzuelo, especie por especie",
      "Experiencia exportando a Guadalupe y Martinica",
      "14 especies, la mayoría disponibles todo el año",
      "Presentaciones adaptadas a los requerimientos de cada cliente",
    ],
    finalCtaTitle: "¿Busca un proveedor estable de pescado congelado?",
    finalCtaText:
      "Indíquenos producto, volumen y destino, y le responderemos con precio y disponibilidad.",
  },
  about: {
    title: "Nosotros",
    lead: "Tradición pesquera y experiencia exportadora desde Punta de Piedras, Venezuela.",
    historyTitle: "Nuestra historia",
    historyText:
      "Llevamos más de 18 años trabajando con pescado. Hace 4 años dimos el paso al procesamiento y la congelación para llevar nuestro producto a mercados internacionales. Hoy ofrecemos 14 especies de pescados y mariscos capturadas en aguas venezolanas. [Año de fundación e hitos, si la empresa quiere añadirlos.]",
    destinationsTitle: "Destinos actuales",
    destinationsText:
      "Exportamos de forma regular a importadores y distribuidores de Guadalupe y Martinica, territorios franceses de la Unión Europea en el Caribe.",
    valuesTitle: "Misión, visión y valores",
    values: [
      { title: "Misión", text: "[Texto de misión pendiente de la empresa.]" },
      { title: "Visión", text: "[Texto de visión pendiente de la empresa.]" },
      {
        title: "Valores",
        text: "Calidad constante, cumplimiento de plazos y presentaciones a la medida de cada aliado comercial.",
      },
    ],
    galleryTitle: "Instalaciones",
  },
  products: {
    title: "Nuestros productos",
    lead: "14 especies de pescados y mariscos del Caribe venezolano. Pulse un producto para ver su ficha técnica.",
    all: "Todos",
    note: "“Las presentaciones de todos los productos se adecúan según los requerimientos de nuestros aliados comerciales.”",
    downloadPdf: "Descargar catálogo en PDF",
    seeSheet: "Ver ficha técnica",
    season: "Temporada",
    sheet: {
      title: "Ficha técnica",
      english: "Nombre en inglés",
      scientific: "Nombre científico",
      origin: "Origen",
      originValue: "Venezuela",
      zone: "Zona de captura",
      zoneValue: "FAO 31 · Atlántico Centro-Occidental",
      fishing: "Arte de pesca",
      season: "Temporada",
      products: "Productos",
      presentation: "Presentación",
      sizes: "Tallas",
      quote: "Cotizar este producto",
    },
  },
  quality: {
    title: "Procesos y calidad",
    lead: "Seis etapas controladas y un mismo estándar para cumplir las exigencias sanitarias de la Unión Europea, incluidas Guadalupe y Martinica.",
    stagesTitle: "Proceso en 6 etapas",
    stages: [
      {
        title: "Recepción",
        text: "Recibimos el producto de la pesca con cordel, anzuelo y nasas, y controlamos su frescura.",
      },
      { title: "Clasificación", text: "Selección por especie y talla, según las tallas de nuestro catálogo." },
      {
        title: "Proceso",
        text: "Eviscerado, descabezado (HGT), fileteado con o sin piel, o corte en ruedas.",
      },
      {
        title: "Congelación",
        text: "Túnel de aire forzado a −35 °C, con capacidad para congelar 4.000 kg en 5 horas. Presentación IWP, IQF o en bloque, interfoliado.",
      },
      {
        title: "Empaque y almacenamiento",
        text: "Caja máster de cartón tipo estuche de 10 kg. Cámara de 40 toneladas de capacidad, entre −25 y −28 °C.",
      },
      { title: "Despacho", text: "Carga en contenedor refrigerado a −18 °C y documentos de exportación." },
    ],
    seasonsTitle: "Origen y temporadas",
    seasonsSubtitle:
      "Todo nuestro producto es de origen venezolano, capturado en la zona FAO 31 (Atlántico Centro-Occidental).",
    seasons: [
      { value: "12 especies", label: "de pescado disponibles todo el año" },
      { value: "Oct – Ene", label: "Langosta (1 de octubre al 31 de enero)" },
      { value: "Jul – Dic", label: "Pulpo (1 de julio al 31 de diciembre)" },
    ],
    coldTitle: "Cadena de frío",
    cold: [
      { step: "Congelación con aire forzado · 4.000 kg en 5 horas", temp: "−35 °C" },
      { step: "Almacenamiento en cámara de 40 toneladas", temp: "−25 a −28 °C" },
      { step: "Transporte en contenedor refrigerado", temp: "−18 °C" },
    ],
    certsTitle: "Certificaciones y registros",
    certs: [
      {
        title: "Habilitación sanitaria para exportar a la UE",
        text: "Requisito indispensable para despachar a Guadalupe y Martinica. [Número de establecimiento por confirmar.]",
        highlight: true,
      },
      { title: "HACCP", text: "Análisis de peligros y puntos críticos de control. [Por confirmar.]" },
      { title: "Registro sanitario nacional", text: "[Entidad y número por confirmar.]" },
      { title: "Empresa registrada", text: `${company.legalName} · RIF ${company.rif}` },
    ],
    logisticsTitle: "Logística de exportación",
    logistics: [
      { label: "Destinos actuales", value: "Guadalupe · Martinica" },
      { label: "Puerto de salida", value: "[por confirmar]" },
      { label: "Incoterms", value: "[FOB / CFR / CIF, por confirmar]" },
      { label: "Tiempo de tránsito", value: "[por confirmar]" },
    ],
  },
  contact: {
    title: "Solicite su cotización",
    lead: "Indíquenos producto, volumen y destino, y le responderemos con precio y disponibilidad.",
    formTitle: "Formulario de cotización",
    fields: {
      name: "Nombre y apellido",
      company: "Empresa",
      email: "Correo electrónico",
      phone: "Teléfono / WhatsApp",
      country: "País o territorio",
      product: "Producto",
      volume: "Volumen estimado",
      incoterm: "Incoterm",
      message: "Mensaje",
      messagePlaceholder: "Presentación, tallas, frecuencia de envío…",
      consent:
        "Acepto que mis datos se usen para responder a esta solicitud, según el aviso de privacidad.",
      submit: "Enviar solicitud",
      select: "Seleccione una opción",
      several: "Varios productos",
    },
    countries: [
      "Guadalupe",
      "Martinica",
      "Francia (metropolitana)",
      "Alemania",
      "Austria",
      "Bélgica",
      "Bulgaria",
      "Chipre",
      "Croacia",
      "Dinamarca",
      "Eslovaquia",
      "Eslovenia",
      "España",
      "Estonia",
      "Finlandia",
      "Grecia",
      "Hungría",
      "Irlanda",
      "Italia",
      "Letonia",
      "Lituania",
      "Luxemburgo",
      "Malta",
      "Países Bajos",
      "Polonia",
      "Portugal",
      "República Checa",
      "Rumanía",
      "Suecia",
      "Otro",
    ],
    incoterms: ["FOB", "CFR", "CIF", "Por definir"],
    volumes: ["1 – 5 t", "5 – 20 t", "Más de 20 t", "Por definir"],
    success:
      "Gracias. Se abrirá su programa de correo con la solicitud lista para enviar a " +
      company.email +
      ". Si no se abre, escríbanos directamente a ese correo o por WhatsApp.",
    infoTitle: "Datos de contacto",
    info: [
      { label: "Correo", value: company.email, href: `mailto:${company.email}` },
      { label: "Teléfono", value: company.phone, href: company.phoneHref },
      { label: "WhatsApp", value: company.whatsapp, href: company.whatsappHref },
      { label: "Dirección", value: `${company.place} [dirección completa por confirmar]` },
    ],
    mapTitle: "Ubicación",
  },
  footer: {
    about:
      "Más de 18 años trabajando con pescado. Pescados y mariscos congelados de Venezuela para el Caribe francés.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    privacy: "Aviso de privacidad",
    privacyText:
      "Los datos enviados a través del formulario se usan únicamente para responder solicitudes comerciales.",
    rights: "Todos los derechos reservados.",
  },
  common: {
    provisionalPhoto: "Foto provisional",
    comingSoon: "próximamente",
  },
} as const;

export type Dict = typeof es;
