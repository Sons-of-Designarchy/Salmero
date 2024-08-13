<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { _, t } from 'svelte-i18n';
  import '../../i18n';

  import Header from '../../components/Header.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';
  import HeaderImg from '../../assets/img/Origenes_header.png';
  import FeaturedImage from '../../components/FeaturedImage.svelte';
  import NuestraTierraImg from '../../assets/img/Nuestra_tierra.png';
  import NuestraHistoriaImg from '../../assets/img/Nuestra_historia.png';

  let header: HTMLElement;
  let historia: HTMLElement;
  let nuestraTierra: HTMLElement;

  let intersectingHeader: boolean;
  let intersectingHistoria: boolean;
  let intersectingNuestraTierra: boolean;
</script>

<Header
  title={$_('origenes.title')}
  caption={$_('origenes.caption')}
  textAlign="start"
>
  <ImageComponent className="header-img-top" src={HeaderImg} slot="image" />
  <section slot="custom-description" class="custom-description">
    <IntersectionObserver
      element={header}
      bind:intersecting={intersectingHeader}
    >
      <div bind:this={header}>
        {#if intersectingHeader}
          <p class="animate">
            {@html $t('origenes.first_paragraph')}
          </p>
          <p class="animate">
            {@html $t('origenes.second_paragraph')}
          </p>
          <p class="animate">
            {@html $t('origenes.third_paragraph')}
          </p>
        {/if}
      </div>
    </IntersectionObserver>
  </section>
</Header>

<FeaturedImage
  title={$_('origenes.second_title')}
  caption={$_('origenes.second_caption')}
>
  <ImageComponent slot="image" src={NuestraTierraImg} />

  <section
    slot="featured-description"
    class="nuestra-tierra featured-description"
  >
    <IntersectionObserver
      element={nuestraTierra}
      bind:intersecting={intersectingNuestraTierra}
    >
      <div bind:this={nuestraTierra}>
        {#if intersectingNuestraTierra}
          <p class="animate">
            {@html $t('origenes.fourth_paragraph')}
          </p>
          <p class="animate">
            {@html $t('origenes.fifth_paragraph')}
          </p>
        {/if}
      </div>
    </IntersectionObserver>
  </section>
</FeaturedImage>

<FeaturedImage
  title={$_('origenes.third_title')}
  caption={$_('origenes.third_caption')}
>
  <ImageComponent
    className="header-img-top"
    slot="image"
    src={NuestraHistoriaImg}
  />
  <section
    slot="featured-description"
    class="nuestra-historia featured-description"
  >
    <IntersectionObserver
      element={historia}
      bind:intersecting={intersectingHistoria}
    >
      <div bind:this={historia}>
        {#if intersectingHistoria}
          {@html $t('origenes.sixth_paragraph')}
        {/if}
      </div>
    </IntersectionObserver>
  </section>
</FeaturedImage>

<style>
  .custom-description div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: 48em) {
      flex-direction: row;
    }
  }

  .custom-description p,
  .nuestra-tierra p {
    max-width: 55ch;
    letter-spacing: var(--letter-spacing-normal);
  }

  .bold-text {
    font-family: 'Univers LT Std 65 Bold';
  }

  .nuestra-tierra.featured-description div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    text-align: start;

    @media only screen and (min-width: 48em) {
      flex-direction: row;
    }
  }

  .nuestra-historia.featured-description {
    display: flex;
    flex-direction: column;
    max-width: 150ch;
    gap: var(--spacing-lg);
  }

  .animate:nth-child(2) {
    animation-delay: 0.2s;
  }

  .animate:nth-child(3) {
    animation-delay: 0.4s;
  }

  .animate:nth-child(4) {
    animation-delay: 0.6s;
  }
</style>
