<script>
  import Logo from '../assets/svg/Logo.svelte';
  import Hamburger from '../assets/svg/Hamburger.svelte';
  import Jabali from '../assets/svg/Jabali.svelte';
  import Close from '../assets/svg/Close.svelte';
  import { slide } from 'svelte/transition';
  import HeaderJabali from '../assets/img/header-jabali.png';
  import { _ } from 'svelte-i18n';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }
</script>

<div class="mobile-menu-container">
  <section class="mobile-menu-navbar">
    <a href="/">
      <Logo className="logo" width="14rem" height="2rem" fill="#2F2F25" />
      <img src={HeaderJabali} alt="Icono de Jabalí" height="40px" />
    </a>
    <button on:click={toggleMenu}>
      <Hamburger />
    </button>
  </section>
  <section class="mobile-menu-nav-inner">
    {#if isOpen}
      <nav transition:slide|local={{ axis: 'x' }} class="nav--open">
        <button on:click={toggleMenu}>
          <Close />
        </button>
        <ul class="mobile-menu-nav-links">
          <li><a href="/" on:click={closeMenu}><p>{$_('nav.home')}</p></a></li>
          <li>
            <a href="/nuestros-mezcales" on:click={closeMenu}
              ><p>{$_('nav.nuestros_mezcales')}</p></a
            >
          </li>
          <li>
            <a href="/origenes" on:click={closeMenu}
              ><p>{$_('nav.origenes')}</p></a
            >
          </li>
          <li>
            <a href="/proceso" on:click={closeMenu}
              ><p>{$_('nav.procesos')}</p></a
            >
          </li>
          <li>
            <a
              href="https://linktr.ee/mezcalsalmero"
              target="_blank"
              on:click={closeMenu}><p>{$_('nav.encuentranos')}</p></a
            >
          </li>
        </ul>
        <Jabali />
      </nav>
    {/if}
  </section>
</div>

<style>
  .mobile-menu-container {
    position: relative;

    background-color: var(--green-500);
    padding: var(--spacing-md);

    @media only screen and (min-width: 64em) {
      display: none;
    }
  }

  .mobile-menu-navbar {
    display: flex;
    width: 100%;
  }

  .mobile-menu-navbar a:first-child {
    flex: 1;
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
    font-size: 1.25rem;
    text-wrap: nowrap;
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
