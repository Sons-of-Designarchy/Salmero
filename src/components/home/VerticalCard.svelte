<script lang="ts">
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
  <div class="image">
    <slot name="image"></slot>
  </div>
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
    position: relative;

    width: 100%;
    max-width: 30rem;
    height: fit-content;

    border-radius: 20px;
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

  .image {
    width: 100%;
    height: 36rem;
    position: relative;
  }
</style>
