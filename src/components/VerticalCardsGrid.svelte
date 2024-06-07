<script lang="ts">
  import VerticalCard from '../components/VerticalCard.svelte';

  interface Card {
    index: number;
    color: 'salmon' | 'green' | 'red';
    caption: string;
    title: string;
    description: string;
  }
  let cards: Card[] = [
    {
      index: 1,
      color: 'salmon',
      caption: 'Hecho en México',
      title: 'Guadalupe',
      description:
        '50% Salmiana, 50% Espadin. Un exuberante olor floral con notas herbales.',
    },
    {
      index: 2,
      color: 'green',
      caption: 'Hecho en México',
      title: 'Original',
      description:
        '100% Salmiana. Un mezcal brillante, cristalino como el cielo del Altiplano Potosino.',
    },
    {
      index: 3,
      color: 'red',
      caption: 'Hecho en México',
      title: 'Panamericano',
      description:
        '50% Salmiana, 25% Espadin, 25% Mexicano. Intenso, de carácter fuerte, con un sabor único.',
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
    />
  {/each}
</section>

<style>
  .vertical-cards-grid {
    display: flex;
    margin: auto;
    max-width: var(--max-width);

    justify-content: center;
    align-items: center;

    text-align: center;
  }
</style>
