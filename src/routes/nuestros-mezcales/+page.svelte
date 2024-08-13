<script lang="ts">
  import { onMount } from 'svelte';
  import { _, t } from 'svelte-i18n';
  import '../../i18n';

  import Header from '../../components/Header.svelte';
  import HorizontalCard from '../../components/mezcales/HorizontalCard.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';

  import HeaderImg from '../../assets/img/Salmero_header.png';
  import Original from '../../assets/img/Original.png';
  import Guadalupe from '../../assets/img/Guadalupe.png';
  import Panamericano from '../../assets/img/Panamericano.png';

  let activeSlide = 1;

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;

    if (scrollTop < 1750) activeSlide = 1;
    if (scrollTop >= 1750) activeSlide = 2;
    if (scrollTop >= 2750) activeSlide = 3;
  };

  onMount(() => {
    if (window) {
      window.addEventListener('scroll', handleScroll);
    }
  });
</script>

<Header
  title={$_('nuestros_mezcales.title')}
  caption={$_('nuestros_mezcales.caption')}
  description={$_('nuestros_mezcales.description')}
>
  <ImageComponent className="header-img-top" slot="image" src={HeaderImg} />
</Header>
<section class="card-container">
  <section class="active-slides"><h3>{activeSlide} / 3</h3></section>
  <HorizontalCard title="Guadalupe" id="card2" bgColor="salmon">
    <ImageComponent
      slot="image"
      src={Guadalupe}
      className="horizontal-card-image"
    />
    <section slot="description" class="horizontal-card-description">
      {@html $t('nuestros_mezcales.guadalupe_description')}
    </section>
  </HorizontalCard>
  <HorizontalCard title="Panamericano" id="card3" bgColor="red">
    <ImageComponent
      slot="image"
      src={Panamericano}
      className="horizontal-card-image"
    />
    <section slot="description" class="horizontal-card-description">
      {@html $t('nuestros_mezcales.panamericano_description')}
    </section>
  </HorizontalCard>
  <HorizontalCard title="Original" id="card1" bgColor="green">
    <ImageComponent
      slot="image"
      className="horizontal-card-image"
      src={Original}
    />
    <section slot="description" class="horizontal-card-description">
      {@html $t('nuestros_mezcales.original_description')}
    </section>
  </HorizontalCard>
</section>

<style>
  .card-container {
    z-index: 5;
    margin-top: 0;
    position: relative;
    margin-bottom: var(--spacing-xl);
  }
  .horizontal-card-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    max-width: 50ch;

    padding-top: 1rem;

    box-sizing: border-box;
  }

  .active-slides {
    display: none;
    position: sticky;
    max-width: var(--max-width);
    margin-bottom: -4rem;
    left: 1.5vw;
    top: 8rem;

    @media only screen and (min-width: 84em) {
      display: block;
    }
  }
</style>
