<script lang="ts">
  import VerticalCardsGrid from '../components/home/VerticalCardsGrid.svelte';
</script>

<header>
  <p class="caption">Hecho en México</p>
  <h1>Tradición y sabor auténtico del Altiplano.</h1>
  <p class="header-description">
    El Mezcal Potosino Salmero respeta sus procesos ancestrales honrando su
    agave Salmiana silvestre, destilado con respeto y tradición.
  </p>
</header>

<VerticalCardsGrid />

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
