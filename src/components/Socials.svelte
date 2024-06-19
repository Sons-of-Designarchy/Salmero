<script>
  import PlaceholderImage from '../assets/img/placeholder.png';
</script>

<section class="socials" id="encuentranos">
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
  .socials {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    flex-direction: row;

    height: fit-content;

    background: var(--green-500);

    @media only screen and (min-width: 48em) {
      grid-template-columns: repeat(2, 50%);
      height: 55rem;
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
    gap: 1.5rem;

    padding: var(--spacing-lg);

    min-width: min-content;
  }

  .socials-links {
    display: flex;
    justify-content: space-between;
    gap: 5vw;

    @media only screen and (min-width: 48em) {
      gap: 3vw;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
