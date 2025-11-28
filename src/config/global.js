export default {
  global: {
    Name: 'Zonificación, estudio ambiental  y ecosistemas estratégicos',
    Description:
      'La zonificación ambiental organiza el territorio según sus características para orientar un desarrollo sostenible. Incluye la capacidad de uso del suelo, las zonas agroecológicas, la ecología del paisaje, las ecorregiones y los ecosistemas estratégicos, esenciales para el equilibrio ecológico, la planificación ambiental y la gestión responsable de los recursos naturales en Colombia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Zonificación ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clase de capacidad de uso de tierras',
            hash: 't_1_1',
          },
          { numero: '1.2', titulo: 'Zonas agroecológicas', hash: 't_1_2' },
          {
            numero: '1.3',
            titulo: 'Zonificación ecológica y económica',
            hash: 't_1_3',
          },
          { numero: '1.4', titulo: 'Ecología del paisaje', hash: 't_1_4' },
          { numero: '1.5', titulo: 'Ecosistemas estratégicos', hash: 't_1_5' },
          {
            numero: '1.6',
            titulo: 'Estructura ecológica principal',
            hash: 't_1_6',
          },
          { numero: '1.7', titulo: 'Ecorregiones', hash: 't_1_7' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de dibujo de planos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cartografía social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ejemplo de aplicación en Colombia',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Georreferenciación',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Ejemplo de aplicación', hash: 't_4_1' },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Bases para la gestión de recursos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Sistemas y herramientas de gestión ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Principales sistemas de gestión ambiental',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Herramientas de gestión ambiental',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Buenas prácticas ambientales',
            hash: 't_6_3',
          },
          { numero: '6.4', titulo: 'Educación ambiental', hash: 't_6_4' },
          { numero: '6.5', titulo: 'Licencias ambientales', hash: 't_6_5' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Buenas prácticas ambientales',
      referencia:
        'GrupoUrgatzi. (2015). <em>Buenas prácticas medioambientales</em>. [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cKDDjqr-87w',
    },
    {
      tema: 'Educación ambiental',
      referencia:
        'Earth & Life University. (2022). <em>La importancia de la Educación Ambiental</em>. [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6TdvpIjzz4w',
    },
    {
      tema: 'Licencias ambientales',
      referencia:
        'Grupo Energía Bogotá 129 Años. (2020). <em>Así es el proceso de licenciamiento ambiental</em>. [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jKo6SOd0G9g',
    },
  ],
  glosario: [
    {
      termino: 'Bosques',
      significado:
        'Son ecosistemas terrestres formados principalmente por árboles y otras especies de flora y fauna que interactúan entre sí y con el ambiente físico (suelo, agua, clima). Estos ecosistemas cubren grandes extensiones del planeta y son fundamentales para la regulación del clima, la conservación de la biodiversidad y el equilibrio ecológico.',
    },
    {
      termino: 'Cartografía social',
      significado:
        'Es una herramienta participativa que permite a las comunidades representar y analizar su territorio desde sus propias experiencias, conocimientos y percepciones. A través de mapas elaborados colectivamente, las personas identifican recursos naturales, problemáticas, actores sociales, prácticas culturales y dinámicas territoriales.',
    },
    {
      termino: 'Ecorregiones',
      significado:
        'Son áreas geográficas extensas que presentan condiciones ecológicas relativamente homogéneas, como el clima, el tipo de suelo, la vegetación, la fauna y los ecosistemas predominantes. Estas características permiten distinguirlas de otras regiones y facilitan la planificación ambiental y la conservación de la biodiversidad.',
    },
    {
      termino: 'Ecosistema',
      significado:
        'Es un conjunto de seres vivos (biocenosis) que interactúan entre sí y con el medio físico (biotopo) en un espacio determinado, formando un sistema equilibrado donde se intercambian materia, energía e información.',
    },
    {
      termino: 'Educación ambiental',
      significado:
        'Es un proceso formativo y participativo que busca crear conciencia, conocimientos, valores y actitudes responsables hacia el ambiente, promoviendo la protección de los recursos naturales y el desarrollo sostenible. Su propósito es que las personas comprendan la relación entre las actividades humanas y los ecosistemas, para actuar de manera informada y comprometida con la conservación del planeta.',
    },
    {
      termino: 'Estudio ambiental',
      significado:
        'Es un análisis técnico y científico que se realiza para identificar, evaluar y prever los posibles impactos que una actividad, obra o proyecto puede generar sobre el medio ambiente, con el fin de proponer medidas de prevención, mitigación, corrección o compensación.',
    },
    {
      termino: 'Gasto público',
      significado:
        'Son todas las erogaciones o desembolsos que realiza el Estado (gobierno nacional, departamental o municipal) para cumplir sus funciones, prestar servicios públicos y promover el bienestar social y el desarrollo económico.',
    },
    {
      termino: 'Georreferenciación',
      significado:
        'Es el proceso de asignar coordenadas geográficas (latitud y longitud) a un punto, imagen o elemento dentro de un mapa o sistema digital, con el fin de ubicarlo correctamente en la superficie terrestre.',
    },
    {
      termino: 'Herramientas de gestión ambiental',
      significado:
        'Son instrumentos técnicos, normativos y de planificación que permiten a las instituciones públicas, empresas y comunidades prevenir, controlar, mitigar y corregir los impactos ambientales derivados de las actividades humanas. Su objetivo es garantizar un desarrollo sostenible, promoviendo el equilibrio entre el crecimiento económico, el bienestar social y la conservación del ambiente.',
    },
    {
      termino: 'Humedales',
      significado:
        'Son ecosistemas transicionales entre ambientes terrestres y acuáticos, donde el suelo permanece inundado total o parcialmente durante gran parte del año. Estas zonas se caracterizan por la presencia de agua superficial o subterránea, vegetación adaptada a la humedad y una gran diversidad biológica.',
    },
    {
      termino: 'Licencias ambientales',
      significado:
        'Son autorizaciones otorgadas por la autoridad ambiental competente que permiten la ejecución de proyectos, obras o actividades que pueden causar impactos significativos sobre el medio ambiente. Estas licencias establecen condiciones, requisitos y obligaciones que deben cumplirse para prevenir, mitigar, corregir o compensar los posibles efectos negativos que el proyecto genere.',
    },
    {
      termino: 'Páramos',
      significado:
        'Son ecosistemas de alta montaña ubicados principalmente entre los 3.000 y 4.500 metros sobre el nivel del mar, caracterizados por su clima frío, alta humedad, vegetación adaptada a bajas temperaturas y una gran capacidad para regular y almacenar el agua. Estos ecosistemas se desarrollan principalmente en la región andina de países como Colombia, Ecuador, Perú y Venezuela.',
    },
    {
      termino: 'Zonificación',
      significado:
        'Es un proceso de ordenamiento del territorio que consiste en dividir un área geográfica en zonas según sus características físicas, sociales, económicas y ambientales, con el fin de regular el uso del suelo y orientar el desarrollo sostenible.',
    },
  ],
  referencias: [
    {
      referencia:
        'Autoridad Nacional de Licencias Ambientales – ANLA. (2020). <em>Guía para la gestión y trámite de licencias ambientales en Colombia</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'FAO. (1993). <em>Guidelines for land use planning</em>. Food and Agriculture Organization of the United Nations.',
      link: '',
    },
    {
      referencia:
        'FAO. (1996). <em>Agroecological zoning guidelines</em>. Food and Agriculture Organization of the United Nations.',
      link: '',
    },
    {
      referencia:
        'FAO. (2013). <em>Landscape ecology for sustainable land use planning</em>. Food and Agriculture Organization of the United Nations.',
      link: '',
    },
    {
      referencia:
        'FAO. (2017). <em>Gestión sostenible de los recursos naturales: guía para la planificación territorial</em>. Food and Agriculture Organization of the United Nations.',
      link: '',
    },
    {
      referencia:
        'Giesecke, F. E., Mitchell, A., & Spencer, H. C. (2012). <em>Dibujo técnico</em>. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Graziati, L. (2023). <em>Selvas colombianas: características, flora y fauna</em>. Ecología Verde.',
      link:
        'https://www.ecologiaverde.com/selvas-colombianas-caracteristicas-flora-y-fauna-4702.html',
    },
    {
      referencia:
        'Herrera, L. (2024). <em>Seis humedales colombianos de importancia mundial</em>. AIDA.',
      link:
        'https://aida-americas.org/es/blog/seis-humedales-colombianos-de-importancia-mundial',
    },
    {
      referencia:
        'IGAC. (2012). <em>Manual de evaluación de tierras para la planificación del uso del suelo</em>. Instituto Geográfico Agustín Codazzi.',
      link: '',
    },
    {
      referencia:
        'Instituto de Investigación de Recursos Biológicos Alexander von Humboldt. (2013). <em>Ecorregiones de Colombia: una propuesta para la planificación ambiental del territorio</em>. Instituto Humboldt.',
      link: '',
    },
    {
      referencia:
        'Instituto de Investigaciones Marinas y Costeras – INVEMAR. (2020). <em>Estado de los arrecifes coralinos en Colombia: Informe técnico anual 2020</em>. Santa Marta, Colombia.',
      link: '',
    },
    {
      referencia:
        'MADS (Ministerio de Ambiente y Desarrollo Sostenible). (2015). <em>Decreto 1076 de 2015: Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'MADS (Ministerio de Ambiente y Desarrollo Sostenible). (2016). <em>Guía de buenas prácticas ambientales para el desarrollo sostenible en Colombia</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'MADS (Ministerio de Ambiente y Desarrollo Sostenible). (2017). <em>Política nacional para la gestión integral de la biodiversidad y sus servicios ecosistémicos</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'MADS (Ministerio de Ambiente y Desarrollo Sostenible). (2018). <em>Guía técnica para la formulación de la estructura ecológica principal municipal y regional</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente. (2018). <em>Guía para la zonificación ambiental en los procesos de ordenamiento territorial</em>. Ministerio de Ambiente y Desarrollo Sostenible.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. (2018). <em>Marco de gestión de las finanzas públicas en Colombia</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). <em>Bases Técnicas del Plan de Zonificación Ambiental, escala 1:100.000, fase 6.1</em>. [Conjunto de datos].',
      link:
        'https://geonetwork.minambiente.gov.co/geonetwork/srv/api/records/02abcc99-9c99-4467-b6f2-55ac0cbb5453',
    },
    {
      referencia: 'Naranjo, J. (2020). <em>Páramos en Colombia</em>. WWF.',
      link:
        'https://wwflac.awsassets.panda.org/downloads/paramosdecolombia.pdf',
    },
    {
      referencia:
        'PNUD (Programa de las Naciones Unidas para el Desarrollo). (2010). <em>Guía metodológica para la cartografía social</em>. PNUD Colombia.',
      link: '',
    },
    {
      referencia:
        'PNUMA (Programa de las Naciones Unidas para el Medio Ambiente). (2019). <em>Buenas prácticas ambientales para la gestión sostenible de los recursos naturales</em>. Nairobi, Kenia.',
      link: '',
    },
    {
      referencia:
        'Ropero, M. (2022). <em>Ecosistema montañoso: características, flora y fauna</em>. Ecología Verde.',
      link:
        'https://www.ecologiaverde.com/ecosistema-montanoso-caracteristicas-flora-y-fauna-2910.html',
    },
    {
      referencia:
        'UNESCO. (2017). <em>Educación para el desarrollo sostenible: guía para educadores</em>. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura.',
      link: '',
    },
    {
      referencia:
        'Unidad de Restitución de Tierras. (2018). <em>Cartografía social en procesos de restitución de tierras: caso Montes de María</em>. Unidad de Restitución de Tierras.',
      link: '',
    },
    {
      referencia:
        'Yuwono, E., Andayani, N., Prasetyo, D., Saleh, C., Susanto, P., & Utami Atmoko, S. (2007). <em>Guidelines for better management practices on avoidance, mitigation and management of human-orangutan conflict in and around oil palm plantations</em>. WWF-Indonesia.',
      link: '',
    },
    {
      referencia:
        'World Wildlife Fund – WWF. (2001). <em>Global 200: The living planet report</em>. Gland, Switzerland.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
