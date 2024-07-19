<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  import Header from '../../components/Header.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';

  import ProcesoImg from '../../assets/img/Proceso_header.png';
  import Jabali from '../../assets/svg/Jabali.svelte';
  import Proceso_1 from '../../assets/img/Proceso_1.png';
  import Proceso_2 from '../../assets/img/Proceso_2.png';
  import Proceso_3 from '../../assets/img/Proceso_3.png';
  import HotStones from '../../assets/svg/HotStones.svelte';
  import Destilacion from '../../assets/svg/Destilacion.svelte';
  import Fermentacion from '../../assets/svg/Fermentacion.svelte';
  import Agave from '../../assets/svg/Agave.svelte';

  let element: HTMLElement;
  let header: HTMLElement;

  let intersecting: boolean;
  let intersectingHeader: boolean;
</script>

<Header>
  <ImageComponent className="header-img-top" src={ProcesoImg} slot="image" />
  <section slot="custom-description" class="proceso-intro">
    <IntersectionObserver
      element={header}
      bind:intersecting={intersectingHeader}
    >
      <div bind:this={header}>
        {#if intersectingHeader}
          <h1 class="animate">Nuestro proceso</h1>
          <div class="animate"><Jabali /></div>
          <p class="animate">
            Nuestro proceso de producción respeta las <span class="bold-text"
              >tradiciones de más de 200 años,</span
            >
            nuestro mezcal está hecho por las manos de esta tierra.
          </p>
        {/if}
        <div class="bg-image" />
      </div>
    </IntersectionObserver>
  </section>
</Header>

<section class="proceso-images-grid">
  <ImageComponent src={Proceso_1} />
  <ImageComponent src={Proceso_2} />
  <ImageComponent src={Proceso_3} />
</section>

<IntersectionObserver {element} bind:intersecting rootMargin="-25%">
  <section class="proceso-steps container-min-paddings" bind:this={element}>
    {#if intersecting}
      <article class="animate">
        <div class="proceso-steps-img"><Agave /></div>
        <p>1</p>
        <h3>Selección</h3>
        <p>
          el Agave Salmiana madura en 10 a 12 años. Luego de un año más de
          espera, los campesinos cosechan el agave para llevarlo al horno. Este
          proceso permite al Salmiana concentrar más azúcar en su piña, esencial
          para la fabricación artesanal del mezcal.
        </p>
      </article>
      <article class="animate">
        <div class="proceso-steps-img"><HotStones /></div>
        <p>2</p>
        <h3>Cocción</h3>
        <p>
          La cocción se realiza en hornos de mampostería de más de 200 años,
          utilizando vapor durante aproximadamente 3 días, dando al mezcal del
          Altiplano Potosino un perfil herbal y vegetal. Además, preserva el
          delicado equilibrio de la flora y fauna del Altiplano.
        </p>
      </article>
      <article class="animate">
        <div class="proceso-steps-img"><Fermentacion /></div>
        <p>3</p>
        <h3>Fermentación</h3>
        <p>
          Nuestro proceso 100% Natural se ve determinado por las fluctuaciones
          de temperatura en el Altiplano y por consecuencia la fermentación se
          logra desde 2 días en los veranos, hasta 5 días en los inviernos.
        </p>
      </article>
      <article class="animate">
        <div class="proceso-steps-img"><Destilacion /></div>
        <p>4</p>
        <h3>Destilación</h3>
        <p>
          La destilación se realiza en Alambiques de Cobre y Alambiques de
          Platillos. Con este método se logra la separación de alcoholes óptimos
          para crear el sabor que hace único a Mezcal Salmero en sus tres
          presentaciones.
        </p>
      </article>
    {/if}
  </section>
</IntersectionObserver>

<style>
  .proceso-intro div:first-child {
    display: grid;
    gap: var(--spacing-md);

    text-align: start;
    box-sizing: border-box;

    @media only screen and (min-width: 48em) {
      grid-auto-flow: column;
      grid-template-columns: 1fr 30% 30%;
      justify-items: center;
      align-items: center;

      max-width: var(--max-width);
      margin: auto;

      padding: calc(var(--spacing-xl) * 2);
    }
  }

  .proceso-intro p {
    letter-spacing: var(--letter-spacing-normal);
    max-width: 80ch;
  }

  .proceso-intro .bold-text {
    font-family: 'Univers LT Std 75 Black';
  }

  .proceso-intro h1 {
    grid-row: 2/3;

    @media only screen and (min-width: 48em) {
      grid-row: inherit;
    }
  }

  .bg-image {
    width: 95%;
    height: 100%;
    position: absolute;
    background-image: url('../../assets/img/agave_bg.png');
    background-repeat: no-repeat;
    background-position: 25% -2rem;
    background-size: cover;
    mix-blend-mode: darken;

    @media only screen and (min-width: 48em) {
      background-position: 45vw 85%;
      width: 100%;
    }
  }

  .proceso-images-grid {
    display: grid;

    grid-template-columns: 100%;
    @media only screen and (min-width: 48em) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 100%;
      height: 30rem;
    }
  }

  .proceso-steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: var(--spacing-lg);
    box-sizing: border-box;

    @media only screen and (min-width: 64em) {
      flex-wrap: nowrap;
      width: auto;
      padding: calc(var(--spacing-lg) * 3) var(--spacing-md);
      margin: auto;
      justify-content: center;
    }
  }

  .proceso-steps article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media only screen and (min-width: 48em) {
      text-align: center;
      align-items: center;
      justify-content: start;
    }
  }

  .proceso-steps article p {
    font-size: 0.8rem;
    width: 100%;

    @media only screen and (min-width: 40em) {
      width: 80%;
    }
    @media only screen and (min-width: 48em) {
      max-width: 50ch;
      width: 100%;
    }
  }

  .proceso-steps-img {
    width: 5rem;
    height: 5rem;

    @media only screen and (min-width: 48em) {
      width: 6.5rem;
      height: 6.5rem;
    }
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
