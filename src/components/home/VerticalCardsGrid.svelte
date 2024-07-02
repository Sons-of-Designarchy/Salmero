<script lang="ts">
  import VerticalCard from './VerticalCard.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';
  import Panamericano from '../../assets/img/Panamericano.png';
  import Guadalupe from '../../assets/img/Guadalupe.png';
  import Original from '../../assets/img/Original.png';

  interface Card {
    index: number;
    color: 'salmon' | 'green' | 'red';
    caption: string;
    title: string;
    description: string;
    image: string;
  }
  let cards: Card[] = [
    {
      index: 1,
      color: 'salmon',
      caption: 'Hecho en México',
      title: 'Guadalupe',
      description:
        '50% Salmiana, 50% Espadin. Un exuberante olor floral con notas herbales.',
      image: Guadalupe,
    },
    {
      index: 2,
      color: 'green',
      caption: 'Hecho en México',
      title: 'Original',
      description:
        '100% Salmiana. Un mezcal brillante, cristalino como el cielo del Altiplano Potosino.',
      image: Original,
    },
    {
      index: 3,
      color: 'red',
      caption: 'Hecho en México',
      title: 'Panamericano',
      description:
        '50% Salmiana, 25% Espadin, 25% Mexicano. Intenso, de carácter fuerte, con un sabor único.',
      image: Panamericano,
    },
  ];
</script>

<section class="vertical-cards-grid">
  {#each cards as card}
    <VerticalCard
      title={card.title}
      description={card.description}
      caption={card.caption}
      bgColor={card.color}
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

<style>
  .vertical-cards-grid {
    display: grid;

    grid-template-columns: 100%;
    margin: auto;
    max-width: var(--max-width);

    justify-content: center;
    align-items: center;

    text-align: center;

    padding: 0 var(--spacing-md);

    @media only screen and (min-width: 40em) {
      grid-template-columns: repeat(3, 33.33%);
    }
  }
</style>
