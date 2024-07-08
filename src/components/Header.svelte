<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';

  let element: HTMLElement;
  let intersecting: boolean;

  export let title: string = '';
  export let textAlign: 'start' | 'center' = 'center';
  export let caption: string = '';
  export let description: string = '';
</script>

<header>
  <section class="header-img">
    <slot name="image"></slot>
  </section>
  <IntersectionObserver {element} bind:intersecting>
    <section
      bind:this={element}
      class="header-content"
      style="text-align: {textAlign}"
    >
      <p
        class:animate={intersecting}
        class="caption"
        style="align-self: {textAlign}"
      >
        {caption}
      </p>
      <h1 class:animate={intersecting} style="align-self: {textAlign}">
        {title}
      </h1>
      <p class:animate={intersecting} class="header-description">
        {description}
      </p>
      <slot class="custom-description" name="custom-description"></slot>
    </section>
  </IntersectionObserver>
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
    @media only screen and (min-width: 48em) {
      height: 36rem;
    }

    @media only screen and (min-width: 64em) {
      padding-top: 3.5rem;
    }
  }

  .animate:nth-child(2) {
    animation-delay: 0.2s;
  }

  .animate:nth-child(3) {
    animation-delay: 0.4s;
  }
</style>
