<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  import Jabali from '../../assets/svg/Jabali.svelte';
  import Agave from '../../assets/img/Agave.png';
  import Tradiciones_1 from '../../assets/img/Tradiciones_1.png';
  import Tradiciones_2 from '../../assets/img/Tradiciones_2.png';
  import Dron from '../../assets/img/Dron.png';

  let element: HTMLElement;
  let intersecting: boolean;
</script>

<IntersectionObserver {element} bind:intersecting rootMargin="-25%"
  ><div bind:this={element} class="tradiciones-wrapper" id="tradiciones">
    <section class="tradiciones">
      <section class="tradiciones-intro">
        <div class="tradiciones-intro-content container-min-paddings">
          <div class:animate={intersecting}><Jabali /></div>
          <p class:animate={intersecting} class="caption">
            Nuestro proceso de producción
          </p>
          <h1 class:animate={intersecting}>
            Expresión de nuestras tradiciones
          </h1>
          <p class:animate={intersecting}>
            Salmero se produce en el histórico límite de mesoamérica con
            aridoamérica, donde se unen las avanzadas civilizaciones con las
            nómadas.
          </p>
          <p class:animate={intersecting}>
            realizado con respeto a sus tradiciones, salmero es nuestro mezcal
            para el mundo.
          </p>
        </div>
        <img src={Agave} alt="Agave" />
      </section>

      <section class="tradiciones-images">
        <img src={Tradiciones_2} alt="placeholder" />
        <img src={Tradiciones_1} alt="placeholder" />
        <img src={Dron} alt="placeholder" />
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

    @media only screen and (min-width: 48em) {
      padding-top: 0;
      padding-bottom: calc(var(--spacing-xl) * 2);
    }
  }
  .tradiciones-intro {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 100%;
    align-items: center;

    gap: 2rem;

    text-align: center;

    @media only screen and (min-width: 48em) {
      grid-auto-flow: column;
      grid-template-columns: 50% 50%;
    }
  }
  .tradiciones-intro img {
    height: 100%;
    width: 100%;

    @media only screen and (min-width: 48em) {
      width: 100%;
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
    display: none;
    position: relative;
    padding-top: calc(var(--spacing-xl) * 3);

    @media only screen and (min-width: 64em) {
      display: block;
      overflow: hidden;
    }
  }

  .tradiciones-images img:first-child {
    width: 27rem;
    height: 42rem;
  }

  .tradiciones-images img:nth-child(2) {
    width: 42rem;
    height: 24rem;

    position: absolute;
    right: 0;
  }

  .tradiciones-images img:nth-child(3) {
    width: 40rem;
    height: 18rem;

    position: absolute;
    right: 24rem;
    bottom: 10rem;
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
