<script>
  import Logo from '../assets/svg/Logo.svelte';
  import Hamburger from '../assets/svg/Hamburger.svelte';
  import Jabali from '../assets/svg/Jabali.svelte';
  import Close from '../assets/svg/Close.svelte';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<div class="mobile-menu-container">
  <section class="mobile-menu-navbar">
    <Logo className="logo" height="2rem" width="15rem" fill="#2F2F25" />
    <button on:click={toggleMenu}>
      <Hamburger />
    </button>
  </section>
  <section class="mobile-menu-nav-inner">
    <nav class={`${isOpen ? 'nav--open' : ''}`}>
      <button on:click={toggleMenu}>
        <Close />
      </button>
      <ul class="mobile-menu-nav-links">
        <li><a href="/"><p>Home</p></a></li>
        <li><a href="/nuestros-mezcales"><p>Nuestros mezcales</p></a></li>
        <li><a href="/origenes"><p>Origenes</p></a></li>
        <li><a href="/proceso"><p>Nuestros procesos</p></a></li>
        <li><a href="#encuentranos"><p>Encuentranos</p></a></li>
      </ul>
      <Jabali />
    </nav>
  </section>
</div>

<style>
  .mobile-menu-container {
    position: relative;

    background-color: var(--green-500);
    padding: var(--spacing-lg);

    @media only screen and (min-width: 64em) {
      display: none;
    }
  }

  .mobile-menu-navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  nav {
    display: none;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;

    padding: var(--spacing-lg);
    box-sizing: border-box;

    text-align: right;

    background-color: var(--green-500);
  }

  nav.nav--open {
    display: flex;
    align-items: end;
    gap: var(--spacing-lg);
    position: fixed;
    z-index: 2;
  }

  nav p {
    font-size: 1.5rem;
  }

  .mobile-menu-nav-links {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  button {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
  }
</style>
