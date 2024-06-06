<script>
  import PlaceholderImage from '../assets/img/placeholder.png';
  import Jabali from '../assets/svg/Jabali.svelte';
</script>

<section class="socials">
  <article class="socials-content">
    <div class="socials-content-inner">
      <p>Nuestros amigos</p>
      <h1>Siguenos en nuestras redes sociales</h1>
      <ul class="socials-links">
        <li><a href="/"><p>Instagram</p></a></li>
        <li><a href="/"><p>Facebook</p></a></li>
        <li><a href="/"><p>YouTube</p></a></li>
      </ul>
    </div>
  </article>
  <img src={PlaceholderImage} alt="placeholder" />
</section>

<style>
  h1 {
    width: 40rem;
  }

  .socials {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    align-items: center;

    background: var(--green-500);
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
    gap: 1.5rem;

    width: min-content;
  }

  .socials-links {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
  }

  img {
    width: 100%;
  }
</style>
