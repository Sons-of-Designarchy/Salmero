<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  import Jabali from '../../assets/svg/Jabali.svelte';
  import Agave from '../../assets/img/Agave.png';
  import Tradiciones_1 from '../../assets/img/Tradiciones_1.png';
  import Tradiciones_2 from '../../assets/img/Tradiciones_2.png';
  import Dron from '../../assets/img/Dron.png';
  import { getScreenSize } from '../../utils/utils';

  let element: HTMLElement;
  let intersecting: boolean;
  let screenSize: 'large' | 'medium' | 'small';
  let scrollY: number;

  const handleScroll = () => {
    if (intersecting) {
      const rect = element.getBoundingClientRect();
      scrollY = rect.top;
    }
    screenSize = getScreenSize();
  };
</script>

<svelte:window on:scroll={handleScroll} />

<IntersectionObserver {element} bind:intersecting rootMargin="50%"
  ><div bind:this={element} class="tradiciones-wrapper" id="tradiciones">
    <section class="tradiciones">
      <section class="tradiciones-intro">
        <div class="tradiciones-intro-content container-min-paddings">
          {#if intersecting}
            <div class="animate"><Jabali /></div>
            <p class="caption animate">Nuestro proceso de producción</p>
            <h1 class="animate">Expresión de nuestras tradiciones</h1>
            <p class="animate">
              Salmero se produce en el histórico límite de mesoamérica con
              aridoamérica, donde se unen las avanzadas civilizaciones con las
              nómadas.
            </p>
            <p class="animate">
              realizado con respeto a sus tradiciones, salmero es nuestro mezcal
              para el mundo.
            </p>
          {/if}
        </div>
        <img src={Agave} alt="Agave" />
      </section>

      <section class="tradiciones-images">
        <img
          style={`transform: translate3d(0, ${intersecting && screenSize == 'large' ? scrollY * 0.2 : 0}px, 0)`}
          src={Tradiciones_2}
          alt="placeholder"
        />
        <img
          style={`transform: translate3d(0, ${intersecting ? scrollY * -0.2 : 0}px, 0)`}
          src={Tradiciones_1}
          alt="placeholder"
        />
        <img
          style={`${screenSize !== 'large' && `transform: translate3d(0, ${intersecting ? scrollY * 0.2 : 0}px, 0)`}`}
          src={Dron}
          alt="placeholder"
        />
      </section>
    </section>
  </div></IntersectionObserver
>

<style>
  .tradiciones-wrapper {
    background-color: var(--bg-light-yellow);
    background-image: url('../../assets/img/jabali.svg');
    background-repeat: repeat-x;
    background-position: center;
    background-size: 55% 50%;
  }

  .tradiciones {
    max-width: var(--max-width);
    margin: auto;

    padding-bottom: 0;
    overflow: hidden;

    padding-bottom: calc(var(--spacing-xl) * 2);

    @media only screen and (min-width: 80em) {
      padding-top: 0;
    }
  }
  .tradiciones-intro {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 100%;
    align-items: center;

    gap: 2rem;

    text-align: center;

    @media only screen and (min-width: 80em) {
      grid-auto-flow: column;
      grid-template-columns: 50% 50%;
    }
  }
  .tradiciones-intro img {
    height: 100%;
    width: 100%;
    display: none;
    @media only screen and (min-width: 80em) {
      width: 100%;
      display: block;
    }
  }

  .tradiciones-intro-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    box-sizing: border-box;
  }

  .tradiciones-intro-content p,
  .tradiciones-intro-content h1 {
    max-width: 80ch;
    word-wrap: break-word;
  }

  .tradiciones-images {
    position: relative;

    @media only screen and (min-width: 80em) {
      display: block;
      overflow: hidden;
      padding-top: calc(var(--spacing-xl) * 3);
    }
  }

  .tradiciones-images img:first-child {
    display: block;
    position: relative;

    height: 80vh;
    width: 20rem;
    height: 30rem;

    left: 0;
    right: 0;

    margin: auto;
    @media only screen and (min-width: 64em) {
      width: 27rem;
      height: 42rem;

      margin: initial;
    }
  }

  .tradiciones-images img:nth-child(2) {
    position: absolute;
    top: 1rem;
    left: 0;

    width: 18rem;

    z-index: 3;

    @media only screen and (min-width: 48em) {
      right: 0;
      left: auto;
      top: 3rem;
      width: 28rem;
      height: 18rem;
    }
  }

  .tradiciones-images img:nth-child(3) {
    position: absolute;
    top: 80%;
    right: 2rem;

    width: 20rem;
    height: 10rem;

    z-index: 2;
    @media only screen and (min-width: 64em) {
      display: block;

      width: 40rem;
      height: 20rem;

      margin: auto;

      left: 0;
      right: 0;
      top: 30%;

      z-index: 3;
    }
  }

  .animate:first-child {
    animation-delay: 0.2s;
  }

  .animate:nth-child(2) {
    animation-delay: 0.4s;
  }

  .animate:nth-child(3) {
    animation-delay: 0.6s;
  }

  .animate:nth-child(4) {
    animation-delay: 0.8s;
  }
  .animate:nth-child(5) {
    animation-delay: 1s;
  }
</style>
