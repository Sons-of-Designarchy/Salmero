<script>
  import Logo from '../assets/svg/Logo.svelte';
</script>

<nav>
  <section class="nav-inner">
    <a href="/"> <Logo fill="#2F2F25" height="4.5rem" width="28rem" /></a>
    <ul class="nav-links">
      <li><a href="/"><p>Home</p></a></li>
      <li><a href="/nuestros-mezcales"><p>Nuestros mezcales</p></a></li>
      <li><a href="/origenes"><p>Orígenes</p></a></li>
      <li><a href="/proceso"><p>Nuestros procesos</p></a></li>
      <li>
        <a href="https://linktr.ee/mezcalsalmero" target="_blank"
          ><p>Encuéntranos</p></a
        >
      </li>
    </ul>
  </section>
</nav>

<style>
  nav {
    display: none;
    align-items: center;
    justify-content: center;

    position: fixed;
    width: 100%;
    z-index: 6;

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
    align-items: center;

    padding: 0 var(--spacing-lg);
  }

  ul {
    list-style: none;
  }
</style>
