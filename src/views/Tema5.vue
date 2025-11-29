<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Bases para la gestión de recursos

    .row.align-items-center.mb-5
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/1.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left").mb-0 Las bases de la gestión de recursos se refieren al conjunto de principios, estrategias y procesos que permiten planificar, administrar y aprovechar de manera sostenible los recursos naturales, humanos, económicos y tecnológicos disponibles en un territorio o institución. Esta gestión busca equilibrar las necesidades humanas con la conservación ambiental y la equidad social (FAO, 2017). A continuación, se presentan los componentes fundamentales de la gestión de recursos desde el enfoque de las finanzas públicas:
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Finanzas públicas" :icono="require('@/assets/componentes/6.svg')")
        .row.px-5.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Finanzas públicas
            p Rama de la economía que estudia cómo el Estado obtiene, administra y gasta los recursos financieros para cumplir sus funciones y satisfacer necesidades colectivas. Su adecuada gestión busca mantener el equilibrio económico, promover el desarrollo social y garantizar el bienestar de la población. Según el Ministerio de Hacienda y Crédito Público (2018), se debe procurar la sostenibilidad fiscal, la eficiencia del gasto y la transparencia en el manejo de los recursos. Las finanzas públicas son clave para la estabilidad económica, la equidad social y el desarrollo sostenible (Ministerio de Ambiente, 2018).
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema5/2.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Gasto público" :icono="require('@/assets/componentes/6.svg')")
        .row.px-5.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Gasto público
            p Conjunto de recursos financieros que el Estado destina a la producción de bienes y servicios públicos, al pago de su funcionamiento y al cumplimiento de sus responsabilidades sociales, económicas y administrativas. Es una herramienta esencial de la política fiscal, con un impacto directo en el crecimiento económico, la equidad social y la estabilidad del país.
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema5/3.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Inversión del Estado en proyectos de desarrollo" :icono="require('@/assets/componentes/6.svg')")
        .row.px-5.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Inversión del Estado en proyectos de desarrollo
            p Asignación de recursos financieros públicos para la ejecución de programas, obras o iniciativas que promuevan el crecimiento económico, el bienestar social y la sostenibilidad ambiental. Estas inversiones buscan reducir desigualdades, fortalecer la infraestructura y mejorar la calidad de vida de la población.
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema5/4.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema5',
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
