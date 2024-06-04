<script>
  import Logo from '../assets/svg/Logo.svelte';
</script>

<header>
  <section class="header-inner">
    <Logo fill="#2F2F25" height="4.5rem" width="28rem" />
    <div class="header-links">
      <a href="/"><p>Home</p></a>
      <a href="/nuestros-mezcales"><p>Nuestros mezcales</p></a>
      <a href="/nuestros-procesos"><p>Nuestros procesos</p></a>
      <a href="/encuentranos"><p>Encuentranos</p></a>
    </div>
  </section>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--green-500);

    padding: var(--spacing-sm);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: var(--max-width);
  }

  .header-links {
    display: flex;
    gap: var(--spacing-md);
  }
</style>
