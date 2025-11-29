<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Georreferenciación
    
    .bg-full-width.bg-color-13
      .px-4.px-lg-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-up") La georreferenciación es el proceso mediante el cual se asignan coordenadas geográficas (específicamente latitud y longitud) a elementos, imágenes o datos espaciales, con el fin de ubicarlos correctamente sobre la superficie terrestre. Este procedimiento es fundamental para integrar información espacial con datos temáticos, ya que permite representarla, analizarla y gestionarla en función de su ubicación real.
            .bg-color-19.tarjeta.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/2.svg', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") La georreferenciación se utiliza ampliamente en herramientas como los Sistemas de Información Geográfica (SIG), que permiten superponer capas de información (ambiental, social, económica, etc.) sobre mapas digitales, facilitando procesos de planificación territorial, análisis ambiental, gestión del riesgo, entre otros.
            p “La georreferenciación posibilita la localización precisa de objetos o fenómenos en el territorio y constituye la base técnica para la toma de decisiones espaciales en múltiples campos del conocimiento” (IGAC, 2012).

        separador
        
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.1 Ejemplo de aplicación
        
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            p A continuación, se presenta un ejemplo concreto de aplicación de la georreferenciación en Colombia, centrado en el monitoreo de la deforestación en la Amazonía.
            .bg-color-20.tarjeta.mb-5
              .p-4.p-md-5
                .row.justify-content-center.align-items-center
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema4/4.svg", data-aos="zoom-in")
                  .col-lg-7
                    p(data-aos="fade-left").mb-4  Pódcast:
            
                    TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                      texto="Aplicación de la Georreferenciación en el Monitoreo de la Deforestación en la Amazonía Colombiana "
                      tiempo
                      :audio="require('../assets/curso/podcast/podcast1.mp3')"
                    )

</template>

<script>
export default {
  name: 'Tema4',
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
