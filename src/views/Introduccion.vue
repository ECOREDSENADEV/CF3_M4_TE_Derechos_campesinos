<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-4
      .px-4.px-lg-5
        .row.mb-3
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-9
            p(data-aos="fade-left") La comprensión de los territorios y de sus dinámicas ambientales exige analizar de manera articulada los factores ecológicos, sociales y productivos que los conforman. En este sentido, la zonificación, las ecorregiones, los ecosistemas estratégicos y la estructura ecológica principal permiten identificar las características que sustentan la vida y el funcionamiento de los sistemas naturales. A partir de estos insumos, se fortalecen los procesos de planificación ambiental, conservación de la biodiversidad y toma de decisiones informada, aspectos imprescindibles para avanzar hacia modelos sostenibles.

            .bg-color-16.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='')
                .col-lg.order-lg-1
                  .p-4
                    p.mb-0(data-aos="fade-up") Al integrar enfoques como la ecología del paisaje, el estudio de la capacidad de uso del suelo y la delimitación de zonas agroecológicas, se genera una base técnica sólida para orientar la gestión territorial. Estos elementos también se relacionan con herramientas de representación y análisis, tales como el dibujo de planos, la cartografía social y la georreferenciación, que facilitan la interpretación del espacio y la participación comunitaria en los procesos de diagnóstico y planificación.

        .bg-full-width.bg-color-17
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Finalmente, la gestión ambiental y de los recursos requiere sistemas, instrumentos y prácticas que garanticen el uso responsable del territorio y la preservación de los bienes naturales. Conceptos como la evaluación de impacto ambiental, las licencias ambientales, las buenas prácticas, la educación ambiental y la inversión pública en proyectos de desarrollo conforman un marco integral que permite a las instituciones y comunidades avanzar hacia escenarios sostenibles, equitativos y resilientes.



</template>

<script>
export default {
  name: 'Introduccion',
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
