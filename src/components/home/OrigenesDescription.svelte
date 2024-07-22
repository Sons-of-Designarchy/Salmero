<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  import Altiplano_1 from '../../assets/img/Altiplano_1.png';
  import Altiplano_2 from '../../assets/img/Altiplano_2.png';
  import Altiplano_3 from '../../assets/img/Altiplano_3.png';

  let element: HTMLElement;
  let secondElement: HTMLElement;

  let intersecting: boolean;
  let intersectingSecondElement: boolean;

  let scrollY: number;
  let screenSize: 'large' | 'medium' | 'small';

  const getScreenSize = () => {
    const width = window.innerWidth;
    if (width > 1200) {
      screenSize = 'large';
    } else if (width > 768) {
      screenSize = 'medium';
    } else {
      screenSize = 'small';
    }
  };

  const handleScroll = () => {
    if (intersectingSecondElement) {
      const rect = secondElement.getBoundingClientRect();
      scrollY = rect.top;
    }
    getScreenSize();
  };
</script>

<svelte:window on:scroll={handleScroll} />

<section class="origenes-description">
  <div class="origenes-description-inner container-min-paddings">
    <div class="origenes-description-section">
      <IntersectionObserver {element} bind:intersecting>
        <section bind:this={element}>
          {#if intersecting}
            <p class="animate">
              En El Altiplano, el <span class="bold-text accent-text"
                >agave Salmiana
              </span>
              vive
              <span class="bold-text">besando el rocío de cada mañana</span>,
              porque sabe que no contarÁ con lluvia.
            </p>
            <p class="animate">
              Amanece siempre a dos mil metros de altura, donde pasa frío en el
              alba y donde aguanta el sol de esas alturas.
            </p>
          {/if}
        </section>
      </IntersectionObserver>
      <img
        style={`${screenSize == 'medium' && `transform: translate3d(0, ${intersectingSecondElement ? scrollY * 0.2 : 0}px, 0)`}`}
        class="vertical-img"
        src={Altiplano_3}
        alt="placeholder"
      />
    </div>
    <div class="origenes-description-section">
      <IntersectionObserver
        element={secondElement}
        bind:intersecting={intersectingSecondElement}
        rootMargin={screenSize == 'small' ? '100%' : '15%'}
      >
        <section bind:this={secondElement}>
          {#if intersectingSecondElement}
            <p class="animate">
              En este <span class="bold-text accent-text">Idilio Salvaje</span>,
              el Agave Salmiana
              <span class="bold-text">se nutre por más de 12 años</span> de la rica
              tierra Agreste que tiene a sus pies.
            </p>
            <p class="animate">
              Así, solo así, se logra tener un agave capaz de darnos el <span
                class="bold-text accent-text"
              >
                Mezcal Salmero</span
              >, digno representante del
              <span class="bold-text">Altiplano</span>.
            </p>
          {/if}
        </section>
        <img
          class="vertical-img img-start parallax"
          src={Altiplano_2}
          alt="placeholder"
          style={`transform: translate3d(0, ${intersectingSecondElement ? scrollY * (screenSize == 'small' ? -0.2 : 0.2) : 0}px, 0)`}
        />
      </IntersectionObserver>
    </div>
    <img
      class="horizontal-img"
      src={Altiplano_1}
      style={`transform: translate3d(0, ${intersectingSecondElement ? scrollY * -0.2 : 0}px, 0)`}
      alt="placeholder"
    />
  </div>
</section>

<style>
  .origenes-description {
    background-color: var(--bg-default);
    position: relative;
    overflow: hidden;

    @media only screen and (min-width: 48em) {
      max-width: var(--max-width);
      margin: auto;
    }
  }
  .origenes-description-inner {
    display: grid;

    grid-template-columns: 100%;
    gap: 2rem;
    align-items: center;
    position: relative;

    max-width: var(--max-width);

    margin: auto;

    box-sizing: border-box;

    @media only screen and (min-width: 48em) {
      grid-template-rows: repeat(2, 1fr);
    }
  }

  section {
    display: grid;
  }

  .origenes-description-section {
    display: grid;
    gap: var(--spacing-md);
    align-items: center;

    max-width: var(--max-width);
    width: 100%;

    position: relative;
    z-index: 1;

    @media only screen and (min-width: 48em) {
      grid-auto-flow: column;
      grid-template-columns: repeat(2, 1fr);
      width: calc(var(--max-width) - 25rem);
    }
  }

  .origenes-description-section section p {
    text-align: start;
    padding: var(--spacing-sm) 0;
    z-index: 2;
    font-size: 1.5rem;
    font-family: 'Univers LT Std 59';

    @media only screen and (min-width: 48em) {
      max-width: 60ch;
    }
  }

  .origenes-description-section section p .bold-text {
    letter-spacing: var(--letter-spacing-extended);
  }

  .origenes-description-section:nth-child(2) section {
    display: grid;
    box-sizing: border-box;
    @media only screen and (min-width: 48em) {
      grid-area: 1 / 2;
    }
  }

  /* -- IMAGES -- */

  .horizontal-img,
  .vertical-img {
    transition: transform 0.1s ease-out;
  }
  .vertical-img {
    width: 100%;
    max-width: 25rem;
    justify-self: end;
    @media only screen and (min-width: 48em) {
      min-width: 26rem;
      height: 15rem;
    }
  }

  .vertical-img.img-start {
    justify-self: start;
  }

  .horizontal-img {
    width: 100%;
    max-width: 25rem;
  }

  .origenes-description-section:nth-child(2) img {
    grid-area: 1/1;
    position: static;

    @media only screen and (min-width: 48em) {
      position: relative;
      top: -8rem;
    }
  }

  .origenes-description-inner .horizontal-img {
    display: none;
    @media only screen and (min-width: 48em) {
      display: block;
      width: 12rem;
      height: 19rem;
      position: absolute;
      top: 10rem;
      right: -8rem;
      z-index: 1;
    }
  }

  /* IMAGES END */

  .origenes-description-section:first-child .animate:nth-child(2) {
    animation-delay: 0.2s;
  }

  .origenes-description-section:nth-child(2) .animate:first-child {
    animation-delay: 0.4s;
  }

  .origenes-description-section:nth-child(2) .animate:nth-child(2) {
    animation-delay: 0.6s;
  }
</style>
