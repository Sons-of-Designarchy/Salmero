<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  import Header from '../../components/Header.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';
  import HeaderImg from '../../assets/img/Origenes_header.png';
  import FeaturedImage from '../../components/FeaturedImage.svelte';
  import NuestraTierraImg from '../../assets/img/Nuestra_tierra.png';
  import NuestraHistoriaImg from '../../assets/img/Nuestra_historia.png';

  let header: HTMLElement;
  let historia: HTMLElement;
  let nuestraTierra: HTMLElement;

  let intersectingHeader: boolean;
  let intersectingHistoria: boolean;
  let intersectingNuestraTierra: boolean;
</script>

<Header title="Nuestro Agave" caption="origenes salmero" textAlign="start">
  <ImageComponent className="header-img-top" src={HeaderImg} slot="image" />
  <section slot="custom-description" class="custom-description">
    <IntersectionObserver
      element={header}
      bind:intersecting={intersectingHeader}
    >
      <div bind:this={header}>
        <p class:animate={intersectingHeader}>
          SAGRADO PARA NUESTROS ANCESTROS, <span class="accent-text bold-text"
            >AGAVE SALMIANA</span
          > PERDURA EN EL DESIERTO COMO LAS LEYENDAS CONTADAS EN SU NOMBRE.
        </p>
        <p class:animate={intersectingHeader}>
          CON SUS <span class="bold-text">PENCAS GRUESAS Y CARNOSAS</span>, QUE
          NACEN DEL TALLO Y REMATAN EN UNA ESPINA FUERTE Y OSCURA.
        </p>
        <p class:animate={intersectingHeader}>
          PERFUMES FLORALES QUE TRASCIENDEN EN CUALQUIER LUGAR, FORMAN <span
            class="bold-text accent-text">CARÁCTER Y ESENCIA</span
          >
          EL DE NUESTRO <span class="bold-text">MEZCAL SALMERO</span>.
        </p>
      </div>
    </IntersectionObserver>
  </section>
</Header>

<FeaturedImage title="Nuestra tierra" caption="Expresión pura de tradiciones">
  <ImageComponent slot="image" src={NuestraTierraImg} />

  <section
    slot="featured-description"
    class="nuestra-tierra featured-description"
  >
    <IntersectionObserver
      element={nuestraTierra}
      bind:intersecting={intersectingNuestraTierra}
    >
      <div bind:this={nuestraTierra}>
        <p class:animate={intersectingNuestraTierra}>
          EL LÍMITE DE <span class="bold-text">MESOAMÉRICA Y ARIDOAMÉRICA</span
          >, DONDE LOS BRAVOS SE JUNTAN CON LOS CIVILIZADOS, DONDE EL DESIERTO
          IMPONE SU LEY Y DEJA VIVIR SOLO A LOS MÁS RESILIENTES.
        </p>
        <p class:animate={intersectingNuestraTierra}>
          <span class="bold-text">ORgULLO POTOSINO</span> QUE RINDE HOMENAJE A
          LA UNIÓN DE DOS MUNDOS COMO EL MISMO SAN LUIS.
          <span class="bold-text accent-text">SALMERO</span> ES LA
          REPRESENTACIÓN COMPLETA DEL <span class="bold-text">ALTIPLANO</span>.
        </p>
      </div>
    </IntersectionObserver>
  </section>
</FeaturedImage>

<FeaturedImage title="Nuestra historia" caption="Expresión pura de tradiciones">
  <ImageComponent
    className="header-img-top"
    slot="image"
    src={NuestraHistoriaImg}
  />
  <section
    slot="featured-description"
    class="nuestra-historia featured-description"
  >
    <IntersectionObserver
      element={historia}
      bind:intersecting={intersectingHistoria}
    >
      <div bind:this={historia}>
        <p class:animate={intersectingHistoria}>
          Fue en el <span class="bold-text">Siglo XVII</span> que los Monjes
          Carmelitos Descalzos llegaron al
          <span class="bold-text accent-text">Altiplano Potosino</span>, y ahí,
          introdujeron el primer alambique para procesar Mezcal en México, donde
          no solamente fue el primer Mezcal de México, si no probablemente el
          primer destilado en todo el continente americano. De esta forma,
          <span class="bold-text">San Luis Potosí se convirtió</span> hasta las
          épocas de la revolución
          <span class="bold-text"
            >en el productor más grande de destilados en el país y en el
            continente</span
          >. Como toda buena historia, sufre su tragedia después de la
          revolución, donde más de 200 fábricas se vieron forzadas a cerrar sus
          puertas ya que la reforma agraria no fue compatible con el modelo
          económico que terminaba, el de las Haciendas.
        </p>
        <p class:animate={intersectingHistoria}>
          Ahora, 100 años después, <span class="bold-text"
            >Mezcal Salmero está presente para recordar Nuestra Historia</span
          > y no dejarnos olvidar de dónde viene este Mezcal tan tradicional no solo
          en su elaboración, sino en la cultura de nuestro Estado y nuestro País.
        </p>
      </div>
    </IntersectionObserver>
  </section>
</FeaturedImage>

<style>
  .custom-description div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: 48em) {
      flex-direction: row;
    }
  }

  .custom-description p,
  .nuestra-tierra p {
    max-width: 55ch;
    letter-spacing: var(--letter-spacing-normal);
  }

  .bold-text {
    font-family: 'Univers LT Std 65 Bold';
  }

  .nuestra-tierra.featured-description div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    text-align: start;

    @media only screen and (min-width: 48em) {
      flex-direction: row;
    }
  }

  .nuestra-historia.featured-description {
    display: flex;
    flex-direction: column;
    max-width: 150ch;
    gap: var(--spacing-lg);
  }

  .animate:nth-child(2) {
    animation-delay: 0.2s;
  }

  .animate:nth-child(3) {
    animation-delay: 0.4s;
  }

  .animate:nth-child(4) {
    animation-delay: 0.6s;
  }
</style>
