<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  let visible: boolean;

  import Sociales_1 from '../assets/img/Sociales_1.png';
  import Sociales_2 from '../assets/img/Sociales_2.png';
  import Sociales_3 from '../assets/img/Sociales_3.png';
  import Sociales_4 from '../assets/img/Sociales_4.png';
</script>

<section
  use:inview={{ rootMargin: '-5%' }}
  on:inview_change={({ detail }) => {
    visible = detail.inView;
  }}
  class="socials"
  id="encuentranos"
>
  <article class="socials-content">
    {#if visible}
      <div class="socials-content-inner">
        <p in:fly={{ y: 100, duration: 2000 }} class="caption">
          Nuestros amigos
        </p>
        <h1 in:fly={{ y: 100, duration: 2000, delay: 100 }}>
          Siguenos en nuestras redes sociales
        </h1>
        <ul class="socials-links">
          <li in:fly={{ y: 100, duration: 2000, delay: 200 }}>
            <a
              href="https://www.instagram.com/mezcalsalmero?igsh=MXFkY21tMndnajYxNw%3D%3D&utm_source=qr"
              target="_blank"><p>Instagram</p></a
            >
          </li>
          <li in:fly={{ y: 100, duration: 2000, delay: 300 }}>
            <a
              href="https://www.facebook.com/profile.php?id=61557454914828"
              target="_blank"><p>Facebook</p></a
            >
          </li>
        </ul>
      </div>
    {/if}
  </article>
  <section class="socials-photo-grid">
    <img src={Sociales_1} alt="Mezcal Panamericano sobre mesa" />
    <img src={Sociales_2} alt="Panorama del altiplano" />
    <img src={Sociales_3} alt="Mezcal Original sobre mesa" />
    <img src={Sociales_4} alt="Shots de mezcal" />
  </section>
</section>

<style>
  .socials {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    flex-direction: row;

    height: 100%;

    background: var(--green-500);

    @media only screen and (min-width: 48em) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .socials-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;

    text-align: center;

    background-image: url('../assets/img/jabali.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 65%;
  }

  .socials-content-inner {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: calc(var(--spacing-lg) * 3) var(--spacing-md);

    box-sizing: border-box;

    @media only screen and (min-width: 48em) {
      min-width: min-content;
    }
  }

  .socials-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5vw;

    @media only screen and (min-width: 48em) {
      gap: 3vw;
    }
  }

  /* 
  Add only if there's more than 2 social links
  .socials-links li:last-child {
    width: auto;

    @media only screen and (max-width: 35em) {
      width: 100%;
    }
  } */

  .socials-links p {
    text-align: center;
  }

  .socials-photo-grid {
    display: grid;
    height: inherit;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);

    @media only screen and (min-width: 48em) {
      width: 100%;
    }
  }

  .socials-photo-grid > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
