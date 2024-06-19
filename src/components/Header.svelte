<script lang="ts">
  export let title: string = '';
  export let caption: string = '';
  export let description: string = '';
</script>

<header>
  <section class="header-img">
    <slot name="image"></slot>
  </section>
  <section class="header-content">
    <p class="caption">{caption}</p>
    <h1>{title}</h1>
    <p class="header-description">
      {description}
    </p>
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
    gap: 1.5rem;

    text-align: center;
  }

  .header-content {
    max-width: var(--max-width);

    padding: var(--spacing-xl);
    box-sizing: border-box;
  }

  .header-description {
    max-width: 110ch;
  }

  .header-img {
    width: 100%;
    height: 46rem;
    padding: 0.4rem;

    box-sizing: border-box;
    border-radius: 10px;

    object-fit: cover;
  }
</style>
