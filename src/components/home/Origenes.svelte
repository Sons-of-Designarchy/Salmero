<script lang="ts">
  import OrigenesImage from './OrigenesImage.svelte';
  import { _ } from 'svelte-i18n';

  import IntersectionObserver from 'svelte-intersection-observer';
  let element: HTMLElement;
  let intersecting: boolean;
</script>

<IntersectionObserver {element} bind:intersecting rootMargin="-10%">
  <div class="origenes-wrapper" id="#origenes" bind:this={element}>
    <div class="origenes">
      <section class="container-min-paddings">
        {#if intersecting}
          <p class="caption animate">{$_('common.norte_de_mex')}</p>
          <h1 class="animate">{$_('homepage_origenes.title')}</h1>
          <p class="origenes-intro animate">
            {$_('homepage_origenes.description')}
          </p>
        {/if}
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
