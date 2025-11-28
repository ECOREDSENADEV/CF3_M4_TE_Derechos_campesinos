<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Zonificación ambiental y gestión sostenible del territorio',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con la zonificación ambiental, los ecosistemas estratégicos y las herramientas de gestión ambiental aplicadas al ordenamiento territorial sostenible.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el objetivo principal de la zonificación ambiental?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orientar el desarrollo económico del país.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fomentar la actividad minera en zonas rurales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organizar el territorio según sus características para un desarrollo sostenible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Distribuir la población en zonas urbanas y rurales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué característica define a las zonas agroecológicas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Homogeneidad en clima, suelo y vegetación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Presencia de industrias agrícolas.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Riqueza en minerales.', esCorrecta: false },
            { id: 'd', texto: 'Conectividad vial.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué estudia la ecología del paisaje?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La migración de especies silvestres.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La estructura, función y dinámica de mosaicos de ecosistemas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El cambio climático y sus causas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La producción agrícola sostenible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes ecosistemas es fundamental para el abastecimiento de agua en Colombia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Manglares.', esCorrecta: false },
            { id: 'b', texto: 'Selvas tropicales.', esCorrecta: false },
            { id: 'c', texto: 'Páramos.', esCorrecta: true },
            { id: 'd', texto: 'Humedales costeros.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué ecosistema cumple la función de proteger las costas de la erosión y actuar como barrera natural?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Bosques tropicales.', esCorrecta: false },
            { id: 'b', texto: 'Manglares.', esCorrecta: true },
            { id: 'c', texto: 'Páramos.', esCorrecta: false },
            { id: 'd', texto: 'Ecorregiones.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué instrumento permite representar experiencias comunitarias sobre el territorio?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Georreferenciación.', esCorrecta: false },
            { id: 'b', texto: 'Cartografía social.', esCorrecta: true },
            { id: 'c', texto: 'Zonificación ecológica.', esCorrecta: false },
            { id: 'd', texto: 'Dibujo técnico.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una función clave de la estructura ecológica principal (EEP)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Establecer límites municipales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conservar la biodiversidad y mantener procesos ecológicos esenciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Clasificar territorios por uso industrial.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Regular precios del suelo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué herramienta permite asignar coordenadas geográficas a un objeto en un mapa?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cartografía social.', esCorrecta: false },
            { id: 'b', texto: 'Georreferenciación.', esCorrecta: true },
            { id: 'c', texto: 'Proyección ortogonal.', esCorrecta: false },
            { id: 'd', texto: 'Escalado técnico.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué busca la producción más limpia (P+L)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Maximizar el uso de plaguicidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir residuos y consumo de recursos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Construir más infraestructura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué es una licencia ambiental según el MADS?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un permiso para explotar minerales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una autorización para ejecutar un proyecto con condiciones que minimicen su impacto ambiental.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una ley que regula precios del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un contrato de compraventa de terrenos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La cartografía social permite que las comunidades representen su territorio desde sus propias experiencias.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los humedales no contribuyen a la regulación hídrica ni a la biodiversidad.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las buenas prácticas ambientales son acciones obligatorias impuestas por el gobierno.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El dibujo de planos permite anticipar cómo será una construcción antes de ser realizada.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las ecorregiones presentan condiciones ecológicas homogéneas que facilitan la planificación ambiental.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
