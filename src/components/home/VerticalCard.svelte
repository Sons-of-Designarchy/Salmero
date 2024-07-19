<script lang="ts">
  export let title: string = 'Guadalupe';
  export let description: string =
    '50% Salmiana, 50% Espadín. Un exuberante olor floral con notas herbales.';
  export let caption: string = 'Hecho en México';
  export let bgColor: 'salmon' | 'green' | 'red' = 'salmon';
  export let intersecting: boolean;

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
    {#if intersecting}
      <p class="caption animate">{caption}</p>
      <h2 class="animate">{title}</h2>
      <p class="vertical-card-description animate">
        {description}
      </p>
    {/if}
  </section>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    position: relative;

    width: 100%;
    height: 100%;

    border-radius: 20px;
  }

  .vertical-card-inner {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: solid 1px var(--black-700);
    border-radius: 0 0 20px 20px;

    padding: 1rem 0.5rem;
    height: 100%;

    text-align: center;
    @media only screen and (min-width: 48em) {
      min-height: 8rem;
    }
  }

  h2 {
    word-break: break-word;
  }

  .caption {
    padding-bottom: 0rem;
  }

  .image {
    width: 100%;
    height: 12rem;

    position: relative;

    @media only screen and (min-width: 48em) {
      height: 100%;
    }
  }

  .animate:nth-child(2) {
    animation-delay: 0.2s;
  }

  .animate:nth-child(3) {
    animation-delay: 0.4s;
  }
</style>
