<script lang="ts">
  import Jabali from '../../assets/svg/Jabali.svelte';

  export let caption: string = 'Hecho en México';
  export let title: string = '';
  export let subtitle: string = '';
  export let bgColor: 'salmon' | 'green' | 'red' = 'salmon';
  export let id = '';
  export let additionalClass = '';

  let bgColors = {
    salmon: 'var(--salmon)',
    green: 'var(--green-500)',
    red: 'var(--red-300)',
  };
</script>

<article
  {id}
  class="horizontal-card {additionalClass}"
  style="background-color: {bgColors[bgColor]}"
>
  <div class="image"><slot name="image"></slot></div>
  <div class="horizontal-card-inner">
    <p class="caption">{caption}</p>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <Jabali />
    <slot class="horizontal-card-description" name="description"></slot>
  </div>
</article>

<style>
  #card1,
  #card2,
  #card3 {
    position: sticky;
  }

  #card1 {
    top: 0;
  }

  #card2 {
    top: 5rem;
  }

  #card3 {
    top: 10rem;
  }
  .horizontal-card {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 20% fit-content;

    width: 85%;
    max-width: var(--max-width);
    height: fit-content;

    margin: 0 auto;

    border-radius: 0 0 20px 20px;
    border: solid 1px var(--black-700);

    @media only screen and (min-width: 48em) {
      grid-template-rows: 1fr;
      grid-auto-flow: columns;
      grid-template-columns: 50% 1fr;
      width: 80vw;

      border-radius: 0 20px 20px 0;
    }
  }

  .horizontal-card-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    margin: auto;
    padding: var(--spacing-md);

    @media only screen and (min-width: 48em) {
      padding: var(--spacing-lg);
      box-sizing: border-box;
    }
  }

  .image {
    height: 10rem;
    width: 100%;
    @media only screen and (min-width: 48em) {
      height: 100%;
      width: 100%;
    }
  }
</style>
