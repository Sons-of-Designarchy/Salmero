<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import Logo from '../assets/svg/Logo.svelte';
  import Jabali from '../assets/svg/Jabali.svelte';

  let agreement: boolean | null;

  const dispatch = createEventDispatcher();

  const setAgreement = (bool: boolean | null) => {
    agreement = bool;
    dispatch('agreementSet', { agreement });
  };
</script>

<section class="age-wall">
  <div class="content">
    <Logo fill="#E7E7E7" width="100%" />
    <div class="logo">
      <Jabali fill="#E7E7E7" width="100%" height="100%" />
    </div>
    <div class="content__inner">
      <p>Hecho en México</p>
      <h1>Bienvenido al altiplano</h1>
      <p>¿Eres mayor de edad para beber en tu país?</p>
      <section class="content__buttons">
        <button on:click={() => setAgreement(true)}>Si</button>
        <a href="https://www.google.com">
          <button>No</button>
        </a>
      </section>
    </div>
  </div>
  <p class="age-wall__cookies">
    Al ingresar a este sitio web, aceptas el uso de cookies. Conoce más sobre
    nuestra Política de privacidad y uso de tu información.
  </p>
</section>

<style>
  .age-wall {
    position: sticky;

    width: 100%;
    min-height: fit-content;

    inset: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: var(--spacing-lg);
    box-sizing: border-box;

    z-index: 10;

    background: url('../assets/age-wall-bg.jpeg') 50% 80% no-repeat;

    @media only screen and (min-width: 48em) {
      position: fixed;
      min-height: 100%;
    }
  }

  .age-wall::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    gap: var(--spacing-lg);

    text-align: center;

    margin: auto;
    margin-top: var(--spacing-xl);

    z-index: 2;
  }

  .content p,
  .content h1 {
    color: var(--text-color-light);
  }

  .content h1 {
    font-size: 4rem;

    @media only screen and (min-width: 48em) {
      font-size: 5.8rem;
    }
  }

  .logo {
    width: 8rem;

    @media only screen and (min-width: 48em) {
      width: 12rem;
    }
  }

  button {
    background-color: var(--green-500);

    border: none;

    padding: var(--spacing-xs) var(--spacing-sm);
    padding-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    letter-spacing: 0.2rem;
    line-height: 2.5rem;

    border-radius: 4px;

    cursor: pointer;

    font-family: 'Univers LT Std 59';
    font-size: 2.56rem;
    text-transform: uppercase;
    color: var(--text-color-black);

    &:hover {
      background-color: var(--text-color-black);
      color: var(--green-500);
    }
  }

  a {
    text-decoration: none;
  }

  .content__buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: var(--spacing-sm);

    margin: var(--spacing-sm);
  }

  .age-wall__cookies {
    color: var(--text-color-light);
    z-index: 2;
    max-width: 100ch;
    text-align: center;
  }
</style>
