<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Zonificación ambiental
    
    .bg-color-19(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La zonificación ambiental es un proceso técnico mediante el cual se identifican y delimitan zonas dentro del territorio nacional, de acuerdo con sus condiciones biofísicas, socioeconómicas y culturales. Su objetivo es orientar la planificación y el ordenamiento ambiental del territorio hacia un desarrollo sostenible (Ministerio de Ambiente, 2018).

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Clase de capacidad de uso de tierras
    
    .row
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-16.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/3.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") La capacidad de uso de la tierra es la aptitud que posee un terreno para soportar de manera sostenible ciertos usos o actividades productivas, considerando sus características físicas, químicas, biológicas y climáticas. Esta capacidad permite el aprovechamiento continuo del suelo sin degradarlo ni causar daños irreversibles a los recursos naturales (IGAC, 2012).
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Zonas agroecológicas
    
    .bg-color-17(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          figure
            img(src='@/assets/curso/tema1/4.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Las zonas agroecológicas son áreas del territorio delimitadas según condiciones relativamente homogéneas de clima, suelo, topografía y vegetación natural. Estas zonas permiten identificar los cultivos o actividades agropecuarias más adecuadas para cada región, promoviendo el uso sostenible de los recursos naturales. Representan unidades de tierra con características ecológicas y climáticas que determinan tanto su potencial como sus limitaciones para usos agrícolas específicos (FAO, 1996).
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Zonificación ecológica y económica
    
    .row.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left").mb-0 La zonificación ecológica y la zonificación económica son instrumentos de planificación territorial que permiten ordenar el uso del suelo y orientar el desarrollo sostenible. La siguiente tabla compara sus enfoques principales:
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Zonificación ecológica" :icono="require('@/assets/componentes/4.svg')")
        .row.px-5.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Zonificación ecológica
            p Divide el territorio en zonas ecológicamente homogéneas basadas en factores como el clima, el suelo, la topografía, la vegetación y la fauna. Su propósito es orientar el uso racional del territorio y conservar los ecosistemas (FAO, 1993).
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Zonificación económica" :icono="require('@/assets/componentes/5.svg')")
        .row.px-5.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-lg-2
            h4 Zonificación económica
            p Clasifica el territorio según su potencial productivo y económico, considerando recursos naturales, actividades económicas, infraestructura y acceso a mercados. Busca orientar el desarrollo sostenible y equilibrado del territorio (FAO, 1993).
          .col-lg-5.order-lg-1
            figure
              img(src='@/assets/curso/tema1/7.png', alt='Texto que describa la imagen')
    
    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Distribución de subregiones PDET y categorías de uso del suelo con AEA en Colombia.
    
    div.bg-color-21.p-5.mb-2
      .row.justify-content-center
        .col-md-10.col-lg-6
          figure
            img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in", alt="Mapa temático de Colombia que delimita subregiones PDET con Áreas Estratégicas Ambientales (AEA), clasificadas por tipo de uso del suelo: preservación, restauración, aprovechamiento sostenible de biodiversidad, desarrollo y actividades productivas con diferentes niveles de sostenibilidad. Incluye una leyenda con nueve categorías de uso y un recuadro de localización geográfica. ")
    figcaption <b>Nota</b>. Ministerio de Ambiente y Desarrollo Sostenible. (2021).

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Ecología del paisaje 
    
    .row.align-items-center
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left").mb-0 La ecología del paisaje es el estudio de la estructura, función y dinámica de mosaicos de ecosistemas, donde se analizan los patrones espaciales y sus efectos sobre los procesos ecológicos. La ecología del paisaje se centra en la comprensión de las relaciones entre los patrones espaciales y los procesos ecológicos, con el fin de orientar la planificación del uso de la tierra y la conservación de los ecosistemas (FAO, 2013).

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Representación de matriz, parches, corredores y mosaicos en un paisaje ecológico.
    
    div.bg-color-21.p-5.mb-2
      .row.justify-content-center
        .col-md-10.col-lg-6
          figure
            img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in", alt="Ilustración tridimensional de un paisaje ecológico que identifica componentes clave como matriz, parches, corredor y mosaico, representando la estructura del paisaje y su conectividad ecológica. ")
    figcaption <b>Nota</b>. Yuwono, et. al (2007). 

    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Ecosistemas estratégicos 
    
    .bg-color-17(data-aos="fade-up").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          figure
            img(src='@/assets/curso/tema1/10.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Los ecosistemas estratégicos son aquellos que brindan servicios ambientales fundamentales para la vida humana y el equilibrio ecológico, como la regulación del agua, el clima, la biodiversidad y el suelo. Estos ecosistemas son prioritarios para la conservación debido a su importancia ecológica, social y económica.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Utilidad de los ecosistemas

    .row.align-items-center.mb-5
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left").mb-0 De acuerdo con el Ministerio de Ambiente y Desarrollo Sostenible (2017), Colombia es un territorio cubierto principalmente por selvas y bosques de diferentes tipos, los cuales abarcan el 84 % del total del territorio nacional. En el resto del territorio se distribuyen sabanas, páramos, humedales y zonas secas. A continuación, se describen las distintas utilidades de los ecosistemas estratégicos: 
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Ecosistemas y satisfacción de necesidades básicas
              p Los ecosistemas contribuyen directamente a la satisfacción de necesidades básicas como el aprovisionamiento de agua y aire. Estos elementos vitales no son producidos en fábricas, sino que son el resultado de la actividad de la vida sobre la Tierra desde hace millones de años. Junto con el clima, regulan las actividades naturales y sostienen las condiciones necesarias para la vida.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Ecosistemas y productividad en Colombia
              p Un ejemplo clave es la producción del café colombiano, cuya calidad no solo depende del grano en sí mismo, sino también de los ecosistemas donde se cultiva. Factores como la calidad del suelo y las condiciones climáticas permiten su crecimiento en óptimas condiciones. Por lo tanto, la productividad agrícola está profundamente ligada a la salud y funcionamiento de los ecosistemas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Ecosistemas y equilibrio natural
              p Suelen llamarse así aquellos ecosistemas que permiten que el clima se comporte de manera predecible, lo cual es esencial para programar actividades como los cultivos. Este equilibrio es sostenido por la biodiversidad, y la regulación de los ciclos climáticos es tan importante como la biodiversidad misma para mantener condiciones de vida estables.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Ecosistemas de asimilación de desechos
              p Ciertos ecosistemas cumplen una función crucial como sumideros o vertederos, donde se descargan desechos que, en alguna medida, son asimilados. Por ejemplo, la atmósfera actúa como sumidero de gases, aunque su capacidad de asimilación se está agotando, lo cual contribuye directamente al cambio climático.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Ecosistemas y relaciones sociales
              p Los ecosistemas, además de ser el espacio donde se desarrolla la vida social, cumplen una función cultural y simbólica fundamental. Son parte de la dimensión social de muchos territorios, especialmente para las comunidades indígenas, aunque no exclusivamente. Estos territorios no pueden entenderse sin su vínculo con los ecosistemas que los sustentan.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Ecosistemas en la prevención de riesgos
              p Prestando servicios clave en la prevención de riesgos, los ecosistemas regulan elementos como el agua, los vientos y los movimientos de tierra, mediante las coberturas vegetales. Esta regulación natural puede prevenir o mitigar efectos catastróficos para la población, como inundaciones o deslizamientos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Ecosistemas y recursos naturales
              p Los ecosistemas aportan recursos naturales que el ser humano obtiene directamente del medio ambiente. En algunos casos, estos recursos son simplemente extraídos, sin necesidad de procesos de transformación. La sostenibilidad de esta extracción depende del equilibrio del ecosistema.
    
    .bg-full-width.bg-color-16.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/35.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Al considerar su capacidad para regular los recursos naturales, proporcionar bienes y servicios ambientales, y conservar la biodiversidad, los ecosistemas estratégicos deben ser tratados como una prioridad nacional para su protección y manejo sostenible (MADS, 2017).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ecosistemas estratégicos en Colombia
    
    p.mb-5 Colombia alberga una gran diversidad de ecosistemas estratégicos que cumplen funciones ecológicas vitales y son fundamentales para la conservación, la provisión de servicios ambientales y el desarrollo sostenible. A continuación, se describen algunos de los principales:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Canales y ecosistemas marinos
              p Mantienen la productividad marina y son vitales para actividades como la pesca y el turismo. Su conservación es clave para la seguridad alimentaria y el desarrollo económico en zonas costeras.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Bosques tropicales y selvas (incluida la selva amazónica)
              p Funcionan como reservas de biodiversidad y capturan grandes cantidades de carbono, lo que los convierte en aliados fundamentales en la lucha contra el cambio climático. También proporcionan hábitat a miles de especies.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Humedales
              p Retienen y purifican el agua, albergan biodiversidad y controlan inundaciones. Uno de los más importantes en Colombia es el complejo de humedales de la estrella fluvial de Inírida, ubicado en una zona de transición entre las regiones de la Orinoquía y la Amazonía. Este ecosistema tiene gran relevancia ecológica y cultural.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Páramos
              p Regulan el ciclo del agua y abastecen gran parte del recurso hídrico del país. Un ejemplo representativo es el páramo de Santurbán, localizado entre los departamentos de Norte de Santander y Santander. Su conservación es crucial para el abastecimiento de agua potable a millones de personas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/22.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Manglares
              p Protegen las costas de la erosión, actúan como barreras naturales frente a tormentas y marejadas, y son hábitat de numerosas especies marinas. Se encuentran especialmente en regiones como Nariño, Chocó y Magdalena.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/23.png")
            .col-lg-7.mb-3.mb-lg-0.order-lg-1
              h5 Ecosistemas de alta montaña
              p Funcionan como refugios de especies endémicas y cumplen una función importante como reguladores climáticos. Estos ecosistemas se caracterizan por su fragilidad y su vulnerabilidad frente al cambio climático y las actividades humanas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ecosistemas estratégicos en Colombia

    .row.align-items-center.mb-5
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left").mb-0 Colombia cuenta con una amplia diversidad de ecosistemas estratégicos que cumplen funciones ecológicas esenciales para el equilibrio ambiental, la seguridad hídrica, la biodiversidad y el bienestar de las comunidades humanas. A continuación, se describen los principales: 
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/25.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Humedales
              p Retienen y purifican el agua, albergan biodiversidad y controlan inundaciones. En Colombia existen numerosos complejos de humedales de gran relevancia ecológica, entre ellos: el complejo de humedales de la Sabana de Bogotá, el complejo de humedales de la Estrella Fluvial de Inírida y el complejo de humedales de la Laguna de Otún, entre muchos otros que conforman el sistema nacional de humedales. (Herrera, 2024)  
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/26.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Páramos
              p Los páramos son ecosistemas de alta montaña, ubicados entre la línea de bosque y la línea de nieves perpetuas. Son fundamentales para el suministro de agua dulce, ya que regulan el flujo hídrico y contribuyen a la seguridad hídrica de las comunidades. Algunos de los páramos más representativos de Colombia son: Sumapaz, Chingaza, Santurbán, Ocetá, Rabanal y Guerrero, entre otros. (Naranjo, 2020)
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/27.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Bosques tropicales y selvas
              p Funcionan como reservas de biodiversidad y capturan grandes cantidades de carbono. Las selvas colombianas, como las de la Amazonía, constituyen extensiones de bosques tropicales húmedos, caracterizados por su alta humedad, temperatura y pluviosidad. Estas condiciones convierten a las selvas en auténticos epicentros de biodiversidad. (Graziati, 2023)
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/28.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Manglares
              p Protegen las costas de la erosión y sirven como hábitat de una biodiversidad extraordinaria. Los manglares son considerados uno de los cinco ecosistemas más productivos del mundo, superando incluso a muchos sistemas agrícolas en productividad primaria. En Colombia, se encuentran principalmente en Nariño, Chocó y Magdalena. (Ministerio de Ambiente, 2015)
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/29.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Ecosistemas de alta montaña
              p Actúan como refugios de especies endémicas y como reguladores climáticos. Además, ofrecen servicios ambientales esenciales como el suministro de agua, suelo, biodiversidad y energía. Son fundamentales tanto para las comunidades que los habitan como para aquellas que viven en zonas de menor altitud, ya que influyen en la estabilidad ecológica de amplias regiones. (Ropero, 2022)
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/30.png")
            .col-lg-7.mb-3.mb-lg-0
              h5 Corales y ecosistemas marinos
              p Los corales y ecosistemas marinos son hábitats esenciales para la biodiversidad, ya que albergan numerosas especies, protegen las costas y regulan el clima marino. En Colombia, los arrecifes de San Andrés, Providencia y Santa Catalina son reconocidos como ecosistemas estratégicos debido a su riqueza ecológica y su contribución al desarrollo sostenible. Sin embargo, enfrentan amenazas como el calentamiento global y la contaminación, lo que exige acciones urgentes de conservación. (INVEMAR, 2020; PNUMA, 2019)
    
    separador
    
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Estructura ecológica principal
    
    .row
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/31.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-up") La Estructura Ecológica Principal (EEP) se entiende como el conjunto de ecosistemas naturales y seminaturales que garantizan la conservación de la biodiversidad, el mantenimiento de los procesos ecológicos esenciales y la provisión de servicios ambientales. En Colombia, este concepto es fundamental para orientar la planificación y el ordenamiento ambiental del territorio, ya que permite identificar las áreas que deben preservarse para mantener el equilibrio ecológico a largo plazo. La EEP actúa como la base sobre la cual se sustenta el funcionamiento ecológico del país y su sostenibilidad ambiental.
        .bg-color-17.tarjeta.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/32.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") “La Estructura Ecológica Principal define las áreas estratégicas que deben conservarse para asegurar la funcionalidad de los ecosistemas y la oferta de bienes y servicios ambientales esenciales para la sociedad” (MADS, 2018).
    
    separador
    
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.7 Ecorregiones
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/33.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-up") Las ecorregiones son áreas geográficas extensas que presentan condiciones ecológicas homogéneas, caracterizadas por similitudes en el clima, suelos, relieve, vegetación y fauna. Estas unidades permiten una mejor comprensión de la distribución de la biodiversidad y son clave para orientar estrategias de conservación, planificación ambiental y manejo sostenible.
        .bg-color-22.tarjeta.mb-3(data-aos="fade-donw")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/34.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") De acuerdo con el Instituto de Investigación de Recursos Biológicos Alexander von Humboldt (2013), las ecorregiones constituyen zonas con atributos biofísicos y ecológicos semejantes, lo que facilita la identificación de patrones de biodiversidad y la formulación de políticas de conservación eficaces. En ese mismo sentido, Wildlife (2001) señala que las ecorregiones ofrecen un marco útil para el diseño de acciones territoriales que respondan a los retos ecológicos y sociales de cada región.

         
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
