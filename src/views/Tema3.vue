<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Cartografía social 
    
    .row.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left").mb-0 A continuación, se presenta un video que explora la cartografía social como una herramienta participativa para la representación comunitaria del territorio, destacando su valor en la construcción colectiva del conocimiento y el fortalecimiento del tejido social.
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Ejemplo de aplicación en Colombia
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-17.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/3.svg', alt='')
            .col-lg
              .p-4
                h5 Cartografía social en el proceso de restitución de tierras – Montes de María
                p.mb-0(data-aos="fade-up") En el marco del proceso de restitución de tierras en la región de Montes de María (departamentos de Sucre y Bolívar), se aplicó la cartografía social como metodología para reconstruir la historia del territorio, los desplazamientos forzados, los sitios de valor cultural, las rutas de desplazamiento y los bienes colectivos perdidos durante el conflicto armado.
        p.mb-0(data-aos="fade-up") A través de talleres comunitarios, hombres, mujeres, jóvenes y personas mayores participaron en la elaboración de mapas colectivos, representando no solo sus parcelas, sino también ríos, caminos, zonas de conflicto, lugares sagrados y centros de reunión comunitaria. Este ejercicio permitió a las comunidades recuperar la memoria territorial, fortalecer la cohesión social y aportar insumos clave para las decisiones judiciales y administrativas en materia de restitución.
    
    .bg-full-width.bg-color-16.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La cartografía social en este contexto no solo sirvió como una herramienta de diagnóstico, sino como un medio de resistencia simbólica y de recuperación de la dignidad territorial. (Unidad de Restitución de Tierras, 2018)
    
       
    


</template>

<script>
export default {
  name: 'Tema3',
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
