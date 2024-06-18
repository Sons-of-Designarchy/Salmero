<script lang="ts">
  import Jabali from '../../assets/svg/Jabali.svelte';

  export let caption: string = 'Hecho en México';
  export let title: string = '';
  export let subtitle: string = '';
  export let bgColor: 'salmon' | 'green' | 'red' = 'salmon';
  export let id = '';

  let bgColors = {
    salmon: 'var(--salmon)',
    green: 'var(--green-500)',
    red: 'var(--red-300)',
  };
</script>

<article
  {id}
  class="horizontal-card"
  style="background-color: {bgColors[bgColor]}"
>
  <div class="image"><slot name="image"></slot></div>
  <div class="horizontal-card-inner">
    <p>{caption}</p>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <Jabali />
    <slot name="description"></slot>
  </div>
</article>

<style>
  #card1 {
    position: fixed;
  }
  .horizontal-card {
    display: flex;
    max-width: var(--max-width);
    height: 50rem;

    border-radius: 0 20px 20px 0;
    border: solid 1px var(--black-700);
  }

  .horizontal-card-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    margin: auto;
    padding: var(--spacing-lg);
  }

  .image {
    width: 50%;
  }
</style>
