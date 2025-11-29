<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Sistemas y herramientas de gestión ambiental 

    .row
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-up") Los sistemas y herramientas de gestión ambiental son esenciales para alcanzar un desempeño ambiental sostenible en las organizaciones. Estos mecanismos permiten identificar, evaluar y controlar los impactos ambientales derivados de las actividades humanas y productivas, promoviendo una gestión responsable de los recursos naturales.
        .bg-color-17.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/2.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Su implementación contribuye al cumplimiento de la normativa ambiental, al fortalecimiento de la sostenibilidad y a la generación de valor en los procesos organizacionales y territoriales.
    
    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1	Principales sistemas de gestión ambiental
    
    .row.align-items-center.mb-5
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/3.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left").mb-0 Los sistemas de gestión ambiental ofrecen estructuras organizativas, procedimientos y prácticas que ayudan a las entidades a mejorar su desempeño ambiental de forma continua. Algunos de estos sistemas son normas reconocidas internacionalmente, mientras que otros responden a políticas nacionales o estrategias integradas.
    
    .row.align-items-start
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .div(titulo="ISO 14001:2015 (Sistema de Gestión Ambiental Internacional)")
            p Norma internacional más utilizada para establecer, implementar, mantener y mejorar un sistema de gestión ambiental aplicable a cualquier tipo de organización.
          .div(titulo="EMAS (Sistema Comunitario de Gestión y Auditoría Ambiental – Unión Europea)")
            p Esquema voluntario que reconoce a organizaciones que mejoran continuamente su desempeño ambiental.
          .div(titulo="Sistema de Gestión Ambiental Empresarial (Colombia)")
            p Implementado por muchas empresas colombianas, se basa en la ISO 14001 o en lineamientos del Ministerio de Ambiente y Desarrollo Sostenible. Incluye prácticas como el uso eficiente de agua y energía, la reducción de residuos y la prevención de la contaminación.
          .div(titulo="Sistemas Integrados de Gestión (SIG)")
            p Integran normas como ISO 9001 (Calidad), ISO 45001 (Seguridad y Salud en el Trabajo) y ISO 14001. Permiten una gestión integral en materia ambiental, de calidad y de seguridad.
          .div(titulo="Ecoeficiencia y Producción más Limpia (P+L)")
            p Estrategia complementaria al SGA que busca mejorar la eficiencia productiva, reducir residuos y minimizar el uso de recursos naturales.

    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Herramientas de gestión ambiental
    
    p.mb-5 Las herramientas de gestión ambiental son instrumentos operativos y técnicos que permiten aplicar y reforzar los sistemas de gestión. Estas herramientas se utilizan para evaluar, monitorear, planificar y mejorar el desempeño ambiental de proyectos, procesos o territorios. Su uso articulado fortalece la toma de decisiones informadas y sostenibles.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema6/5.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Evaluación de Impacto Ambiental (EIA)
              p Estudio técnico que identifica, predice y valora los impactos ambientales potenciales de un proyecto antes de su ejecución.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema6/6.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Plan de Manejo Ambiental (PMA)
              p Documento que detalla las acciones de prevención, mitigación, corrección y compensación de los impactos identificados en la EIA.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema6/7.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Auditoría Ambiental
              p Evaluación sistemática y documentada para verificar el cumplimiento de los requisitos ambientales, como los de la norma ISO 14001.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema6/8.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Diagnóstico Ambiental
              p Análisis inicial del estado ambiental de una organización o territorio, identifica problemas y oportunidades de mejora.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema6/9.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Ordenamiento Ambiental del Territorio (OAT)
              p Instrumento de planificación que integra la variable ambiental en los planes de desarrollo territorial.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema6/10.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Indicadores Ambientales
              p Herramientas de medición del desempeño ambiental. Ejemplos: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fa-solid.fa-leaf.bg-color-7
                  p.mb-0 Huella de carbono 
                li.mb-0.d-flex
                  i.fa-solid.fa-leaf.bg-color-7
                  p.mb-0 Huella hídrica 
                li.mb-0.d-flex
                  i.fa-solid.fa-leaf.bg-color-7
                  p.mb-0 Índice de calidad del aire (ICA) 
                li.mb-0.d-flex
                  i.fa-solid.fa-leaf.bg-color-7
                  p.mb-0 Tasa de reciclaje

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema6/11.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Producción más Limpia (P+L)
              p Estrategia preventiva para minimizar residuos, emisiones y consumo de recursos desde el origen del proceso productivo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema6/12.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Educación y Cultura Ambiental
              p Proceso participativo que promueve la conciencia y el compromiso ciudadano con la protección del ambiente.

    .bg-full-width.bg-color-9
      .px-4.px-lg-5

        separador
        
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.3 Buenas prácticas ambientales

        .row.align-items-center.mb-5
          .col-lg-2.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/3.svg", data-aos="zoom-in")
          .col-lg-10.order-lg-1
            p(data-aos="fade-left").mb-0 Las buenas prácticas ambientales constituyen una herramienta clave para fomentar la sostenibilidad en los sectores productivos, institucionales y comunitarios. De acuerdo con el Ministerio de Ambiente y Desarrollo Sostenible de Colombia (2016), se trata de un conjunto de acciones voluntarias orientadas a:
        
        .row.justify-content-center
          .col-md-6.col-lg-4(data-aos="fade-up").mb-3.mb-lg-0
            .bg-color-17.tarjeta.mb-5
              .p-3
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema6/13.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 01
                    p.mb-0 Optimizar el uso de los recursos naturales.
          .col-md-6.col-lg-4(data-aos="fade-down").mb-3.mb-lg-0
            .bg-color-17.tarjeta.mb-5
              .p-3
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema6/14.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 02
                    p.mb-0 Disminuir la contaminación.
          .col-md-6.col-lg-4(data-aos="fade-up").mb-3.mb-lg-0
            .bg-color-17.tarjeta.mb-5
              .p-3
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema6/15.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 03
                    p.mb-0 Mejorar la calidad ambiental en los entornos laborales y sociales.

        p socialPor su parte, el Programa de las Naciones Unidas para el Medio Ambiente (PNUMA, 2019) resalta que estas prácticas fortalecen la responsabilidad ambiental y social, promoviendo el uso de tecnologías limpias y comportamientos sostenibles en organizaciones y comunidades.

        separador
        
        #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.4 Educación ambiental

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/16.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") La educación ambiental es una herramienta esencial para promover la conciencia ecológica y el compromiso ciudadano con el entorno. Fomenta la comprensión crítica de las relaciones entre los seres humanos y la naturaleza, así como la participación activa en la solución de problemas ambientales. Según la UNESCO (2017), su propósito es formar ciudadanos capaces de:
            .bg-color-5.tarjeta.p-4.mb-3(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema6/17.svg", style="max-width: 275px").mx-auto
                .col-lg
                  div.bg-color-white.p-3.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-0.d-flex
                        i.fa-solid.fa-leaf.bg-color-7
                        p.mb-0 Prevenir y solucionar problemas ambientales.
                      li.mb-0.d-flex
                        i.fa-solid.fa-leaf.bg-color-7
                        p.mb-0 Integrar aspectos sociales, económicos y ecológicos del desarrollo sostenible.
                      li.mb-0.d-flex
                        i.fa-solid.fa-leaf.bg-color-7
                        p.mb-0 Participar de forma informada y responsable en los procesos de transformación ambiental y social.

    separador
    
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Licencias ambientales
        
    .bg-full-width.bg-color-9
      .px-4.px-lg-5
        .row
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/18.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-up") Las licencias ambientales son un instrumento clave de la política ambiental, pues garantizan que los proyectos con potencial impacto negativo se ejecuten bajo condiciones que minimicen los daños al entorno.
            .bg-color-16.tarjeta.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema6/19.svg', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Según el Ministerio de Ambiente y Desarrollo Sostenible (2015), la licencia ambiental es un acto administrativo mediante el cual se autoriza a una persona natural o jurídica para ejecutar un proyecto, obra o actividad con posible efecto ambiental, previa evaluación de impactos y definición de medidas de manejo.
            p La Autoridad Nacional de Licencias Ambientales (ANLA, 2020) destaca que este instrumento promueve:

        .row.justify-content-center
          .col-md-6.col-lg-4(data-aos="fade-down").mb-3.mb-lg-0
            .bg-color-17.tarjeta.mb-5
              .p-3
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema6/20.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 01
                    p.mb-0 Optimizar el uso de los recursos naturales.
          .col-md-6.col-lg-4(data-aos="fade-down").mb-3.mb-lg-0
            .bg-color-17.tarjeta.mb-5
              .p-3
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema6/21.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 02
                    p.mb-0 Disminuir la contaminación.
          .col-md-6.col-lg-4(data-aos="fade-down").mb-3.mb-lg-0
            .bg-color-17.tarjeta.mb-5
              .p-3
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema6/22.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 03
                    p.mb-0 Mejorar la calidad ambiental en los entornos laborales y sociales.







</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
