<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { _ } from 'svelte-i18n';

  let element: HTMLElement;
  let intersecting: boolean;
</script>

<IntersectionObserver {element} bind:intersecting rootMargin="-15%"
  ><section bind:this={element} class="origenes-image container-min-paddings">
    {#if intersecting}
      <h1 class="animate">
        {$_('homepage_origenes.second_title')}
      </h1>
      <p class="origenes-image-description animate">
        {$_('homepage_origenes.second_description')}
      </p>
    {/if}
  </section>
</IntersectionObserver>

<style>
  .origenes-image h1,
  .origenes-image p {
    color: var(--text-color-light);
  }

  .origenes-image {
    width: 100%;
    height: 43rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: var(--spacing-lg);

    max-width: var(--max-width);

    background: url('../../assets/img/Agave_2.png');
    background-size: cover;
    background-repeat: no-repeat;

    box-sizing: border-box;
  }

  .origenes-image-description {
    max-width: 50ch;
  }

  .animate:first-child {
    animation-delay: 0.2s;
  }

  .animate:nth-child(2) {
    animation-delay: 0.4s;
  }
</style>
