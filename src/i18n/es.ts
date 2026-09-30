/**
 * Textos en español. Para añadir francés o inglés, copiar este archivo a
 * src/i18n/fr.ts / src/i18n/en.ts, traducir y exponerlo desde src/i18n/index.ts.
 */
export const es = {
  locale: "es",
  brand: {
    name: "PUNTA DE PIEDRA",
    tagline: "Procesadora y Congeladora",
  },
  topbar: "Versión de prueba · textos, fotos y datos provisionales",
  nav: {
    home: "Inicio",
    about: "Nosotros",
    products: "Productos",
    quality: "Procesos y calidad",
    contact: "Contacto",
    quote: "Solicitar cotización",
  },
  home: {
    heroTitle: "Pescado congelado del Caribe, listo para exportar",
    heroSubtitle:
      "Cadena de frío controlada de principio a fin y exportación regular a Guadalupe y Martinica.",
    ctaQuote: "Solicitar cotización",
    ctaProducts: "Ver productos",
    facts: [
      { value: "[XX]", label: "años de experiencia" },
      { value: "[XX] t", label: "capacidad mensual" },
      { value: "Guadalupe · Martinica", label: "destinos actuales", plain: true },
      { value: "[HACCP]", label: "certificaciones" },
    ],
    featuredTitle: "Productos destacados",
    featuredSubtitle:
      "Pescados, mariscos y cefalópodos congelados IQF o en bloque, según su formato de compra.",
    featuredCta: "Ver catálogo completo",
    processTitle: "Del mar al contenedor",
    processSubtitle: "Cuatro etapas con temperatura y trazabilidad controladas.",
    process: [
      { title: "Captura", text: "Recepción de producto fresco desembarcado en Punta de Piedra." },
      { title: "Procesamiento", text: "Clasificación, eviscerado y fileteado en planta." },
      { title: "Congelación", text: "Congelación IQF o en bloque a [−XX °C]." },
      { title: "Despacho", text: "Consolidación y salida hacia el Caribe francés." },
    ],
    aboutTitle: "Sobre nosotros",
    aboutText:
      "[Texto provisional] Procesadora y Congeladora Punta de Piedra procesa, congela y exporta pescados y mariscos desde Punta de Piedra, Venezuela, para importadores y distribuidores del Caribe francés.",
    aboutPoints: [
      "Planta propia de proceso y congelación",
      "Experiencia exportando a Guadalupe y Martinica",
      "Cadena de frío documentada en cada etapa",
      "Presentaciones adaptadas al cliente",
    ],
    finalCtaTitle: "¿Necesita una cotización para su próximo pedido?",
    finalCtaText:
      "Indíquenos producto, volumen e Incoterm y le responderemos con una propuesta.",
  },
  about: {
    title: "Nosotros",
    lead: "Procesamos, congelamos y exportamos pescados y mariscos del Caribe venezolano.",
    historyTitle: "Nuestra historia",
    historyText:
      "[Texto provisional] Aquí irá la historia real de la empresa: año de fundación, origen del proyecto e hitos principales. Pendiente de confirmar con la dirección.",
    destinationsTitle: "Destinos actuales",
    destinationsText:
      "Exportamos de forma regular a importadores y distribuidores de Guadalupe y Martinica, territorios franceses de la Unión Europea en el Caribe.",
    valuesTitle: "Misión, visión y valores",
    values: [
      {
        title: "Misión",
        text: "[Texto provisional] Abastecer a importadores del Caribe francés con producto congelado seguro y trazable.",
      },
      {
        title: "Visión",
        text: "[Texto provisional] Ser el proveedor venezolano de referencia en pescado congelado para el Caribe francés.",
      },
      {
        title: "Valores",
        text: "[Texto provisional] Higiene, cumplimiento, transparencia comercial y respeto por el recurso pesquero.",
      },
    ],
    galleryTitle: "Instalaciones",
  },
  products: {
    title: "Productos",
    lead: "Catálogo provisional. Calibres y empaques se confirman en la cotización.",
    filters: [
      { id: "todos", label: "Todos" },
      { id: "pescados", label: "Pescados" },
      { id: "mariscos", label: "Mariscos" },
      { id: "cefalopodos", label: "Cefalópodos" },
    ],
    sheet: {
      scientific: "Nombre científico",
      french: "Nombre en francés",
      english: "Nombre en inglés",
      presentation: "Presentación",
      freezing: "Tipo de congelación",
      sizes: "Calibres",
      packaging: "Empaque",
      quote: "Cotizar este producto",
      pdf: "Ficha PDF",
      pdfPending: "La ficha PDF estará disponible con los datos definitivos.",
    },
  },
  quality: {
    title: "Procesos y calidad",
    lead: "Seis etapas controladas, cadena de frío documentada y habilitación para exportar a la UE.",
    stagesTitle: "Proceso en 6 etapas",
    stages: [
      { title: "Recepción", text: "Control de producto fresco a su llegada a planta." },
      { title: "Clasificación", text: "Separación por especie, talla y calidad." },
      { title: "Proceso", text: "Eviscerado, fileteado, limpieza y pesaje." },
      { title: "Congelación", text: "Túnel IQF o placas para bloque a [−XX °C]." },
      { title: "Almacenamiento", text: "Cámara de mantenimiento a [−XX °C]." },
      { title: "Despacho", text: "Carga en contenedor refrigerado a [−XX °C]." },
    ],
    coldTitle: "Cadena de frío",
    cold: [
      { step: "Congelación", temp: "[−XX °C]" },
      { step: "Almacenamiento", temp: "[−XX °C]" },
      { step: "Transporte", temp: "[−XX °C]" },
    ],
    certsTitle: "Certificaciones y habilitaciones",
    certs: [
      {
        title: "Habilitación sanitaria para exportar a la UE",
        text: "Requisito indispensable para despachar a Guadalupe y Martinica. Número y vigencia [por confirmar].",
        highlight: true,
      },
      {
        title: "HACCP",
        text: "Sistema de análisis de peligros y puntos críticos de control. Alcance y auditoría [por confirmar].",
      },
      {
        title: "Registro sanitario nacional",
        text: "Registro ante la autoridad sanitaria venezolana. Número [por confirmar].",
      },
    ],
    logisticsTitle: "Logística",
    logistics: [
      { label: "Destinos", value: "Guadalupe · Martinica" },
      { label: "Puerto de salida", value: "[por confirmar]" },
      { label: "Incoterms", value: "FOB / CFR / CIF [por confirmar]" },
      { label: "Tiempo de tránsito", value: "[por confirmar]" },
    ],
  },
  contact: {
    title: "Contacto",
    lead: "Cuéntenos qué necesita y le enviaremos una cotización.",
    formTitle: "Solicitud de cotización",
    fields: {
      name: "Nombre",
      company: "Empresa",
      email: "Correo electrónico",
      phone: "Teléfono / WhatsApp",
      country: "País o territorio",
      product: "Producto",
      volume: "Volumen estimado",
      incoterm: "Incoterm",
      message: "Mensaje",
      consent:
        "Acepto que mis datos se usen para responder a esta solicitud, según el aviso de privacidad.",
      submit: "Enviar solicitud",
      select: "Seleccione una opción",
    },
    countries: ["Guadalupe", "Martinica", "Francia metropolitana", "Otro"],
    incoterms: ["FOB", "CFR", "CIF", "Por definir"],
    volumes: ["Menos de 1 t", "1 – 5 t", "5 – 20 t", "Más de 20 t", "Por definir"],
    success:
      "Gracias. Hemos recibido su solicitud y le responderemos por correo. (Versión de prueba: el envío aún no está conectado).",
    infoTitle: "Datos de contacto",
    info: [
      { label: "Correo", value: "[por confirmar]" },
      { label: "Teléfono / WhatsApp", value: "[por confirmar]" },
      { label: "Dirección", value: "Punta de Piedra, Venezuela [dirección por confirmar]" },
      { label: "Horario", value: "[por confirmar]" },
    ],
    mapTitle: "Ubicación",
    mapNote: "Mapa provisional · ubicación exacta por confirmar",
  },
  footer: {
    about:
      "Procesamiento, congelación y exportación de pescados y mariscos desde Punta de Piedra, Venezuela.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    privacy: "Aviso de privacidad",
    privacyText:
      "[Texto provisional] Los datos enviados a través del formulario se usan únicamente para responder solicitudes comerciales.",
    rights: "Todos los derechos reservados.",
  },
  common: {
    provisionalPhoto: "Foto provisional",
    comingSoon: "próximamente",
  },
} as const;

export type Dict = typeof es;
