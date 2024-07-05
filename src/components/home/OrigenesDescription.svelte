<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  import Altiplano_1 from '../../assets/img/Altiplano_1.png';
  import Altiplano_2 from '../../assets/img/Altiplano_2.png';
  import Altiplano_3 from '../../assets/img/Altiplano_3.png';

  let element: HTMLElement;
  let intersecting: boolean;
</script>

<section class="origenes-description">
  <div class="origenes-description-inner container-min-paddings">
    <div class="origenes-description-section">
      <section>
        <p>
          En El Altiplano, el <span class="bold-text accent-text"
            >agave Salmiana
          </span>
          vive
          <span class="bold-text">besando el rocío de cada mañana</span>, porque
          sabe que no contarÁ con lluvia.
        </p>
        <p>
          Amanece siempre a dos mil metros de altura, donde pasa frio en el alba
          y donde aguanta el sol de esas alturas.
        </p>
      </section>
      <img class="vertical-img" src={Altiplano_3} alt="placeholder" />
    </div>
    <div class="origenes-description-section">
      <img class="vertical-img" src={Altiplano_2} alt="placeholder" />
      <section>
        <p>
          En este <span class="bold-text accent-text">Idilio Salvaje</span>, el
          Agave Salmiana
          <span class="bold-text">se nutre por mas de 12 años</span> de la rica tierra
          Agreste que tiene a sus pies.
        </p>
        <p>
          Así, solo así, se logra tener un agave capaz de darnos el <span
            class="bold-text accent-text"
          >
            Mezcal Salmero</span
          >, digno representante del
          <span class="bold-text">Altiplano</span>.
        </p>
      </section>
      <img class="horizontal-img" src={Altiplano_1} alt="placeholder" />
    </div>
  </div>
</section>

<style>
  .vertical-img {
    width: 100%;
    max-width: 25rem;
    @media only screen and (min-width: 48em) {
      min-width: 26rem;
      height: 15rem;
    }
  }

  .horizontal-img {
    width: 100%;
    max-width: 25rem;
    @media only screen and (min-width: 48em) {
      width: 12rem;
      height: 19rem;
    }
  }

  .origenes-description {
    background-color: var(--bg-default);
    position: relative;

    @media only screen and (min-width: 48em) {
      max-width: var(--max-width);
      margin: auto;
    }
  }
  .origenes-description-inner {
    display: grid;
    gap: 2rem;
    align-items: center;
    position: relative;

    max-width: var(--max-width);

    margin: auto;

    box-sizing: border-box;
  }

  section {
    display: grid;
  }

  .origenes-description-section {
    display: grid;
    gap: var(--spacing-md);
    justify-items: center;

    align-items: center;
    max-width: var(--max-width);

    position: relative;
    z-index: 1;

    @media only screen and (min-width: 48em) {
      gap: var(--spacing-lg);
      grid-auto-flow: column;
    }
  }

  .origenes-description-section:nth-child(2) {
    gap: 2rem;
    @media only screen and (min-width: 64em) {
      grid-template-columns: repeat(2, auto);
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

  .origenes-description-section:nth-child(2) img:nth-child(3) {
    z-index: -1;
    display: none;
    @media only screen and (min-width: 64em) {
      display: block;
      position: relative;
      top: -10rem;
    }
  }
</style>
