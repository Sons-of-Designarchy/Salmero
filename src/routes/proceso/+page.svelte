<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { _, t } from 'svelte-i18n';
  import '../../i18n';

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
          <h1 class="animate">{$_('nuestro_proceso.title')}</h1>
          <div class="animate"><Jabali /></div>
          <p class="animate">
            {@html $t('nuestro_proceso.subtitle')}
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
        <h3>{$_('nuestro_proceso.seleccion_title')}</h3>
        <p>
          {$_('nuestro_proceso.seleccion_description')}
        </p>
      </article>
      <article class="animate">
        <div class="proceso-steps-img"><HotStones /></div>
        <p>2</p>
        <h3>{$_('nuestro_proceso.coccion_title')}</h3>
        <p>
          {$_('nuestro_proceso.coccion_description')}
        </p>
      </article>
      <article class="animate">
        <div class="proceso-steps-img"><Fermentacion /></div>
        <p>3</p>
        <h3>{$_('nuestro_proceso.fermentacion_title')}</h3>
        <p>
          {$_('nuestro_proceso.fermentacion_description')}
        </p>
      </article>
      <article class="animate">
        <div class="proceso-steps-img"><Destilacion /></div>
        <p>4</p>
        <h3>{$_('nuestro_proceso.destilacion_title')}</h3>
        <p>
          {$_('nuestro_proceso.destilacion_description')}
        </p>
      </article>
    {/if}
  </section>
</IntersectionObserver>

<style>
  .proceso-intro div:first-child {
    display: grid;

    text-align: start;
    box-sizing: border-box;

    grid-template-rows: repeat(3, fit-content);
    align-content: center;

    height: 20rem !important;

    @media only screen and (min-width: 48em) {
      grid-auto-flow: column;
      grid-template-columns: 1fr 30% 30%;
      justify-items: center;
      align-items: center;
      gap: var(--spacing-md);

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

    height: 100rem;

    @media only screen and (min-width: 48em) {
      height: 50rem;
    }

    @media only screen and (min-width: 64em) {
      flex-wrap: nowrap;
      width: auto;
      padding: calc(var(--spacing-lg) * 3) var(--spacing-md);
      margin: auto;
      justify-content: center;

      height: 40rem;
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
