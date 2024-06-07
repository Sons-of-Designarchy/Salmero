<script lang="ts">
  import PlaceholderImage from '../../assets/img/placeholder.png';
  export let title: string = 'Guadalupe';
  export let description: string =
    '50% Salmiana, 50% Espadin. Un exuberante olor floral con notas herbales.';
  export let caption: string = 'Hecho en México';
  export let bgColor: 'salmon' | 'green' | 'red' = 'salmon';

  let bgColors = {
    salmon: 'var(--salmon)',
    green: 'var(--green-500)',
    red: 'var(--red-300)',
  };
</script>

<article style="background-color: {bgColors[bgColor]}">
  <img src={PlaceholderImage} alt="Placeholder" />
  <section class="vertical-card-inner">
    <p class="vertical-card-caption">{caption}</p>
    <h2>{title}</h2>
    <p class="vertical-card-description">{description}</p>
  </section>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;

    max-width: 30rem;
    max-height: 40rem;

    border-radius: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
  }

  .vertical-card-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

    border: solid 1px var(--black-700);
    border-radius: 0 0 20px 20px;

    padding: 1rem;

    text-align: center;
  }

  .vertical-card-caption {
    font-size: var(--caption);
  }

  .vertical-card-description {
    max-width: 80%;
  }
</style>
