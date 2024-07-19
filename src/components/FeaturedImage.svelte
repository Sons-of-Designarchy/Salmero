<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  export let title: string = '';
  export let caption: string = '';

  let element: HTMLElement;
  let intersecting: boolean;
</script>

<section>
  <section class="featured-img"><slot name="image"></slot></section>
  <IntersectionObserver {element} bind:intersecting
    ><section bind:this={element} class="featured-content">
      {#if intersecting}
        <p class="caption animate">{caption}</p>
        <h1 class="animate">{title}</h1>
        <slot name="featured-description" />
      {/if}
    </section></IntersectionObserver
  >
</section>

<style>
  .featured-content {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 1rem;

    text-align: start;
    max-width: var(--max-width);

    padding: var(--spacing-xl) var(--spacing-md);
    box-sizing: border-box;

    margin: auto;

    @media only screen and (min-width: 48em) {
      text-align: center;
      align-items: center;
    }
  }

  .featured-img {
    width: 100%;
    height: 30rem;
    padding: var(--spacing-md);

    box-sizing: border-box;
    border-radius: 10px;

    object-fit: cover;
  }
</style>
