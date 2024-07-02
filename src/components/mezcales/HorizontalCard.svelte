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
    <div class="icon"><Jabali width="100%" height="100%" /></div>
    <slot class="horizontal-card-description" name="description"></slot>
  </div>
</article>

<style>
  #card1,
  #card2,
  #card3 {
    position: sticky;
    top: 0;
    margin-bottom: 5rem;
  }

  #card2 {
    @media only screen and (min-width: 48em) {
      top: 5rem;
    }
  }

  #card3 {
    @media only screen and (min-width: 48em) {
      top: 10rem;
    }
  }
  .horizontal-card {
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: 20% 80%;
    grid-template-columns: 100%;

    max-width: var(--max-width);
    height: 100%;
    width: 90%;

    margin: 0 auto;

    border-radius: 20px;
    border: solid 1px var(--black-700);

    @media only screen and (min-width: 48em) {
      grid-template-rows: 1fr;
      grid-auto-flow: columns;
      grid-template-columns: 50% 1fr;
      width: 80vw;
    }
  }

  .horizontal-card-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    margin: auto;
    padding: var(--spacing-sm);
    padding-top: var(--spacing-lg);

    word-break: break-word;
    border-radius: 20px;

    @media only screen and (min-width: 48em) {
      padding: var(--spacing-lg);
      box-sizing: border-box;
      width: 100%;
    }
  }

  .icon {
    height: 4rem;

    @media only screen and (min-width: 48em) {
      height: 5rem;
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

  .caption {
    padding-top: var(--spacing-sm);
    padding-bottom: 0;
  }
</style>
