<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { getScreenSize } from '../../utils/utils';
  import { _, t } from 'svelte-i18n';

  import Altiplano_1 from '../../assets/img/Altiplano_1.png';
  import Altiplano_2 from '../../assets/img/Altiplano_2.png';
  import Altiplano_3 from '../../assets/img/Altiplano_3.png';

  let element: HTMLElement;
  let secondElement: HTMLElement;

  let intersecting: boolean;
  let intersectingSecondElement: boolean;

  let scrollY: number;
  let screenSize: 'large' | 'medium' | 'small';

  const handleScroll = () => {
    if (intersectingSecondElement) {
      const rect = secondElement.getBoundingClientRect();
      scrollY = rect.top;
    }
    screenSize = getScreenSize();
  };
</script>

<svelte:window on:scroll={handleScroll} />

<section class="origenes-description">
  <div class="origenes-description-inner container-min-paddings">
    <div class="origenes-description-section">
      <IntersectionObserver {element} bind:intersecting rootMargin="80%">
        <section bind:this={element}>
          <p>
            {@html $t('homepage_origenes_extended.first_paragraph')}
          </p>
          <p>
            {$_('homepage_origenes_extended.second_paragraph')}
          </p>
        </section>
      </IntersectionObserver>
      <img
        style={`${screenSize !== 'large' && `transform: translate3d(0, ${intersectingSecondElement ? scrollY * -0.2 : 0}px, 0)`}`}
        class="vertical-img"
        src={Altiplano_3}
        alt="placeholder"
      />
    </div>
    <div class="origenes-description-section">
      <IntersectionObserver
        element={secondElement}
        bind:intersecting={intersectingSecondElement}
        rootMargin={screenSize !== 'large' ? '-50%' : '-25%'}
      >
        <section bind:this={secondElement}>
          <p>
            {@html $t('homepage_origenes_extended.third_paragraph')}
          </p>
          <p>
            {@html $t('homepage_origenes_extended.fourth_paragraph')}
          </p>
        </section>
        <img
          class="vertical-img img-start"
          src={Altiplano_2}
          alt="placeholder"
          style={`transform: translate3d(0, ${intersectingSecondElement ? scrollY * 0.2 : 0}px, 0)`}
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

  .origenes-description-section:first-child img {
    top: 12rem;
    position: relative;
    @media only screen and (min-width: 48em) {
      top: 0;
    }
  }

  .origenes-description-section:nth-child(2) img {
    position: relative;
    top: -10rem;
    left: 2rem;
    grid-area: 1/1;
    @media only screen and (min-width: 64em) {
      top: -5rem;
      left: 0;
    }
  }

  .origenes-description-inner .horizontal-img {
    display: none;
    @media only screen and (min-width: 48em) {
      display: block;
      width: 12rem;
      height: 19rem;
      position: absolute;
      top: 20rem;
      right: -8rem;
      z-index: 1;
    }
  }

  /* IMAGES END */
</style>
