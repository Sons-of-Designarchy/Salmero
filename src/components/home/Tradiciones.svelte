<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  let visible: boolean;

  import Jabali from '../../assets/svg/Jabali.svelte';
  import Agave from '../../assets/img/Agave.png';
  import Tradiciones_1 from '../../assets/img/Tradiciones_1.png';
  import Tradiciones_2 from '../../assets/img/Tradiciones_2.png';
  import Dron from '../../assets/img/Dron.png';
</script>

<div
  use:inview={{}}
  on:inview_change={({ detail }) => {
    visible = detail.inView;
  }}
  class="tradiciones-wrapper"
  id="tradiciones"
>
  <section class="tradiciones">
    <section class="tradiciones-intro">
      {#if visible}
        <div class="tradiciones-intro-content container-min-paddings">
          <div in:fly={{ y: 100, duration: 2000 }}><Jabali /></div>
          <p in:fly={{ y: 100, duration: 2000 }} class="caption">
            Nuestro proceso de producción
          </p>
          <h1 in:fly={{ y: 100, duration: 2000, delay: 100 }}>
            Expresión de nuestras tradiciones
          </h1>
          <p in:fly={{ y: 100, duration: 2000, delay: 200 }}>
            Salmero se produce en el histórico límite de mesoamérica con
            aridoamérica, donde se unen las avanzadas civilizaciones con las
            nómadas.
          </p>
          <p in:fly={{ y: 100, duration: 2000, delay: 300 }}>
            realizado con respeto a sus tradiciones, salmero es nuestro mezcal
            para el mundo.
          </p>
        </div>
      {/if}
      <img src={Agave} alt="Agave" />
    </section>

    <section class="tradiciones-images">
      <img src={Tradiciones_2} alt="placeholder" />
      <img src={Tradiciones_1} alt="placeholder" />
      <img src={Dron} alt="placeholder" />
    </section>
  </section>
</div>

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
</style>
