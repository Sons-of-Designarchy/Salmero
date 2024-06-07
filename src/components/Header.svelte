<script lang="ts">
  export let title: string = '';
  export let caption: string = '';
  export let description: string = '';
</script>

<header>
  <p class="caption">{caption}</p>
  <h1>{title}</h1>
  <p class="header-description">
    {description}
  </p>
</header>

<style>
  header {
    display: flex;
    margin: auto;
    max-width: var(--max-width);

    justify-content: center;
    align-items: center;

    text-align: center;
  }

  header {
    flex-direction: column;
    gap: 1.5rem;
    padding: var(--spacing-xl);
  }

  .header-description {
    max-width: 110ch;
  }
</style>
