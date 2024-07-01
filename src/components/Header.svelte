<script lang="ts">
  export let title: string = '';
  export let textAlign: 'start' | 'center' = 'center';
  export let caption: string = '';
  export let description: string = '';
</script>

<header>
  <section class="header-img">
    <slot name="image"></slot>
  </section>
  <section class="header-content" style="text-align: {textAlign}">
    <p class="caption" style="align-self: {textAlign}">{caption}</p>
    <h1 style="align-self: {textAlign}">{title}</h1>
    <p class="header-description">
      {description}
    </p>
    <slot class="custom-description" name="custom-description"></slot>
  </section>
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

    padding: 0.4rem;

    box-sizing: border-box;
    border-radius: 10px;

    object-fit: cover;
    pointer-events: none;

    @media only screen and (min-width: 48em) {
      height: 36rem;
    }
  }
</style>
