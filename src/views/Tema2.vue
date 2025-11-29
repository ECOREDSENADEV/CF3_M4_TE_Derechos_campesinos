<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentos de dibujo de planos
    
    .bg-full-width.bg-color-13
      .px-4.px-lg-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-up") Los fundamentos del dibujo de planos constituyen la base para la elaboración de representaciones gráficas técnicas que permiten plasmar una idea, proyecto o construcción de manera clara, precisa y comprensible. Este proceso implica la aplicación rigurosa de principios geométricos, normas técnicas y convenciones gráficas, con el fin de traducir conceptos tridimensionales en representaciones bidimensionales mediante el uso de símbolos, escalas, medidas y proyecciones normalizadas.
            .bg-color-17.tarjeta.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/2.svg', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") El dibujo de planos cumple una función clave como lenguaje universal en campos como la arquitectura, la ingeniería civil, mecánica y eléctrica, así como en el diseño industrial, ya que permite comunicar eficazmente todos los aspectos técnicos de una obra, desde su forma y dimensiones hasta los detalles constructivos, materiales y procesos implicados.
            p Entre sus principales propósitos se encuentran:

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-18.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/3.svg', alt='Texto que describa la imagen')
              h5.text-center Proyección
              p.text-center Visualizar y anticipar cómo será una construcción o producto antes de ser realizado.
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-18.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/4.svg', alt='Texto que describa la imagen')
              h5.text-center Coordinación
              p.text-center Coordinar el trabajo entre distintos profesionales (arquitectos, ingenieros, constructores, diseñadores).
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-18.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/5.svg', alt='Texto que describa la imagen')
              h5.text-center Precisión
              p.text-center Reducir errores durante la ejecución al proporcionar instrucciones precisas.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-18.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema2/6.svg', alt='Texto que describa la imagen')
              h5.text-center Registro
              p.text-center Documentar proyectos para trámites administrativos, mantenimiento y futuras modificaciones.

        p.mb-5 El dominio de los fundamentos del dibujo técnico implica conocer y aplicar:

        .row.justify-content-center.mb-5.px-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Normas técnicas
                p.text-center Reglas estandarizadas que regulan la forma de representar elementos en los planos. Ej: normas ISO o normas locales (como la UNE o ANSI).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Simbología
                p.text-center Conjunto de signos gráficos convencionales que representan objetos, materiales o acciones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Escalas
                p.text-center Relación proporcional entre las dimensiones reales y su representación gráfica.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Proyecciones
                p.text-center Métodos para representar objetos tridimensionales en dos dimensiones. Las más comunes son la proyección ortogonal y la axonométrica.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Acotación
                p.text-center Técnica para indicar dimensiones exactas de los elementos representados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tipos de líneas
                p.text-center Cada tipo (continua, discontinua, de trazo y punto, etc.) tiene un significado específico dentro del plano.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Formato y presentación
                p.text-center Dimensiones del papel, márgenes, cajetines, rotulación y disposición del dibujo según normas establecidas.  
          .col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema2/7.png', alt='')

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El uso adecuado de estos elementos asegura que el plano sea una herramienta de comunicación técnica eficiente y universal, eliminando ambigüedades y facilitando tanto la interpretación como la ejecución de los proyectos.
          h3.titulo-tercero
          //- .bloque-texto-b debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          .bloque-texto-b.color-primario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h4.mb-0 Un plano bien elaborado no solo representa un diseño; es una guía precisa que anticipa la realidad construida
              i.fas.fa-quote-right <br>
              p.d-flex.justify-content-end (Giesecke, Mitchell & Spencer, 2012)
        
          

</template>

<script>
export default {
  name: 'Tema2',
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
