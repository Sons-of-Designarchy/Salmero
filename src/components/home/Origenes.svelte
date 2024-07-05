<script lang="ts">
  import OrigenesImage from './OrigenesImage.svelte';

  import IntersectionObserver from 'svelte-intersection-observer';
  let element: HTMLElement;
  let intersecting: boolean;
</script>

<IntersectionObserver {element} bind:intersecting>
  <div class="origenes-wrapper" id="#origenes" bind:this={element}>
    <div class="origenes">
      <section class="container-min-paddings">
        <p class:animate={intersecting} class="caption">Del norte de México</p>
        <h1 class:animate={intersecting}>ORIGENES DEL ALTIPLANO POTOSINO</h1>
        <p class:animate={intersecting} class="origenes-intro">
          Hace más de 200 años, donde comienza el gran desierto de chihuahua, su
          gente comenzó a transformar un agave que sobrevivía al igual que ellos
          a esa dura tierra: el salmiana.
        </p>
      </section>
      <OrigenesImage />
    </div>
  </div>
</IntersectionObserver>

<style>
  .origenes-wrapper {
    background: var(--bg-light-yellow);
  }
  .origenes {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    text-align: center;
    overflow: hidden;

    margin: auto;

    @media only screen and (min-width: 48em) {
      padding-top: var(--spacing-xl);
    }
  }

  .origenes-intro {
    max-width: var(--max-width);
    box-sizing: border-box;
    letter-spacing: var(--letter-spacing-normal);

    @media only screen and (min-width: 48em) {
      padding: var(--spacing-sm) var(--spacing-md);
    }
  }

  .animate:nth-child(2) {
    animation-delay: 0.2s;
  }

  .animate:nth-child(3) {
    animation-delay: 0.4s;
  }
</style>
