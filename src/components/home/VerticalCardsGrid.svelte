<script lang="ts">
  import VerticalCard from './VerticalCard.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';
  import Panamericano from '../../assets/img/Panamericano.png';
  import Guadalupe from '../../assets/img/Guadalupe.png';
  import Original from '../../assets/img/Original.png';

  import IntersectionObserver from 'svelte-intersection-observer';
  import { _ } from 'svelte-i18n';

  let element: HTMLElement;
  let intersecting: boolean;

  interface Card {
    index: number;
    color: 'salmon' | 'green' | 'red';
    caption: any;
    title: string;
    description: string;
    image: string;
  }
  let cards: Card[] = [
    {
      index: 1,
      color: 'salmon',
      caption: `${$_('common.hecho_en_mex')}`,
      title: `${$_('common.guadalupe')}`,
      description: `${$_('homepage_vertical_cards.guadalupe_description')}`,
      image: Guadalupe,
    },
    {
      index: 3,
      color: 'red',
      caption: `${$_('common.hecho_en_mex')}`,
      title: `${$_('common.panamericano')}`,
      description: `${$_('homepage_vertical_cards.panamericano_description')}`,
      image: Panamericano,
    },
    {
      index: 2,
      color: 'green',
      caption: `${$_('common.hecho_en_mex')}`,
      title: 'Original',
      description: `${$_('homepage_vertical_cards.original_description')}`,
      image: Original,
    },
  ];
</script>

<IntersectionObserver {element} bind:intersecting rootMargin="-15%">
  <section class="vertical-cards-grid" bind:this={element}>
    {#each cards as card}
      <VerticalCard
        title={card.title}
        description={card.description}
        caption={card.caption}
        bgColor={card.color}
        {intersecting}
      >
        <ImageComponent
          slot="image"
          src={card.image}
          alt={card.title}
          styles={'border-radius: 20px 20px 0 0'}
        />
      </VerticalCard>
    {/each}
  </section>
</IntersectionObserver>

<style>
  .vertical-cards-grid {
    display: grid;
    gap: var(--spacing-sm);

    grid-template-columns: 100%;
    margin: auto;
    max-width: var(--max-width);

    justify-content: center;
    align-items: center;

    text-align: center;

    padding: 0 var(--spacing-md);

    @media only screen and (min-width: 40em) {
      grid-template-columns: repeat(3, 33.33%);
      gap: 0;
    }
  }
</style>
