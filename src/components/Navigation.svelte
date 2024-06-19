<script>
  import Logo from '../assets/svg/Logo.svelte';
</script>

<nav>
  <section class="nav-inner">
    <Logo fill="#2F2F25" height="4.5rem" width="28rem" />
    <ul class="nav-links">
      <li><a href="/"><p>Home</p></a></li>
      <li><a href="/nuestros-mezcales"><p>Nuestros mezcales</p></a></li>
      <li><a href="/#tradiciones"><p>Nuestros procesos</p></a></li>
      <li><a href="#encuentranos"><p>Encuentranos</p></a></li>
    </ul>
  </section>
</nav>

<style>
  nav {
    display: none;
    align-items: center;
    justify-content: center;

    background: var(--green-500);

    padding: var(--spacing-sm);

    @media only screen and (min-width: 64em) {
      display: flex;
    }
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: var(--max-width);
  }

  .nav-links {
    display: flex;
    gap: var(--spacing-md);
  }

  ul {
    list-style: none;
  }
</style>
