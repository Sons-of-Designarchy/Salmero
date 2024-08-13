<script>
  import Logo from '../assets/svg/Logo.svelte';
  import HeaderJabali from '../assets/img/header-jabali.png';
  import { _ } from 'svelte-i18n';
</script>

<nav>
  <section class="nav-inner">
    <a href="/"> <Logo fill="#2F2F25" height="3.0rem" width="18rem" /></a>
    <img src={HeaderJabali} alt="Icono de Jabalí" height="50px" />
    <ul class="nav-links">
      <li><a href="/"><p>{$_('nav.home')}</p></a></li>
      <li>
        <a href="/nuestros-mezcales"><p>{$_('nav.nuestros_mezcales')}</p></a>
      </li>
      <li><a href="/origenes"><p>{$_('nav.origenes')}</p></a></li>
      <li><a href="/proceso"><p>{$_('nav.procesos')}</p></a></li>
      <li>
        <a href="https://linktr.ee/mezcalsalmero" target="_blank"
          ><p>{$_('nav.encuentranos')}</p></a
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
