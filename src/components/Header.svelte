<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  export let title: string = '';
  export let textAlign: 'start' | 'center' = 'center';
  export let caption: string = '';
  export let description: string = '';

  import { inview } from 'svelte-inview';
  let visible: boolean;
</script>

<header>
  <section
    use:inview={{}}
    on:inview_change={({ detail }) => {
      visible = detail.inView;
    }}
    class="header-img"
  >
    <slot name="image"></slot>
  </section>
  {#if visible}
    <section
      in:fly={{ y: 100, duration: 2000 }}
      class="header-content"
      style="text-align: {textAlign}"
    >
      <p class="caption" style="align-self: {textAlign}">
        {caption}
      </p>
      <h1 style="align-self: {textAlign}">{title}</h1>
      <p class="header-description">
        {description}
      </p>
      <slot class="custom-description" name="custom-description"></slot>
    </section>
  {/if}
</header>

<style>
  header {
    width: 100%;
  }

  header,
  .header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-align: center;
  }

  .header-content {
    max-width: var(--max-width);

    padding: var(--spacing-xl) var(--spacing-md);
    box-sizing: border-box;
  }
  .header-description,
  .custom-description {
    max-width: 110ch;
    letter-spacing: var(--letter-spacing-normal);
  }

  .header-img {
    width: 100%;
    height: 20rem;

    box-sizing: border-box;
    border-radius: 10px;

    object-fit: cover;
    pointer-events: none;

    @media only screen and (min-width: 48em) {
      height: 36rem;
    }
  }
</style>
