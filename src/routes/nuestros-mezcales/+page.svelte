<script>
  // @ts-nocheck

  import Header from '../../components/Header.svelte';
  import HorizontalCard from '../../components/mezcales/HorizontalCard.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';
  import Placeholder from '../../assets/img/placeholder.png';
  import enterView from 'enter-view';

  import { onMount } from 'svelte';

  let container = [];
  let cardHeight = '590';

  onMount(() => {
    container = document.querySelectorAll('#card');

    enterView({
      selector: container,
      enter: function (el) {
        cardHeight = el.cardHeight;
        el.classList.add('entered');
        el.classList.remove('removed');
        // count.innerHTML = el.id;
      },
      exit: function (el) {
        el.classList.remove('entered');
        el.classList.add('removed');
        // count.innerHTML = el.id - 1;
      },
    });
  });
</script>

<Header
  title="Nuestros mezcales"
  caption="Conoce la familia"
  description="El Mezcal Potosino Salmero respeta sus procesos ancestrales honrando su agave Salmiana silvestre, destilado con respeto y tradición."
>
  <ImageComponent slot="image" src={Placeholder} />
</Header>
<section id="upper-container">
  <HorizontalCard title="Original" id="card" additionalClass="card1">
    <ImageComponent slot="image" src={Placeholder} />
    <section slot="description" class="horizontal-card-description">
      <p>Era mi destino.</p>
      <p>
        En una tierra de poca agua, apagaría algunas sedes, despertaría otras.
      </p>
      <p>De joven no tengo nada, pues más de 200 años llevo en mi andar.</p>
      <p>
        Fusión de dos mundos, tenacidad y supervivencia, arte agreste en
        evolución.
      </p>
      <p>
        Soy el mezcal del Altiplano Potosino, tradición mexicana por excelencia.
      </p>
    </section>
  </HorizontalCard>
  <HorizontalCard title="Original" id="card">
    <ImageComponent slot="image" src={Placeholder} />
    <section slot="description" class="horizontal-card-description">
      <p>Era mi destino.</p>
      <p>
        En una tierra de poca agua, apagaría algunas sedes, despertaría otras.
      </p>
      <p>De joven no tengo nada, pues más de 200 años llevo en mi andar.</p>
      <p>
        Fusión de dos mundos, tenacidad y supervivencia, arte agreste en
        evolución.
      </p>
      <p>
        Soy el mezcal del Altiplano Potosino, tradición mexicana por excelencia.
      </p>
    </section>
  </HorizontalCard>
  <HorizontalCard title="Original" id="card">
    <ImageComponent slot="image" src={Placeholder} />
    <section slot="description" class="horizontal-card-description">
      <p>Era mi destino.</p>
      <p>
        En una tierra de poca agua, apagaría algunas sedes, despertaría otras.
      </p>
      <p>De joven no tengo nada, pues más de 200 años llevo en mi andar.</p>
      <p>
        Fusión de dos mundos, tenacidad y supervivencia, arte agreste en
        evolución.
      </p>
      <p>
        Soy el mezcal del Altiplano Potosino, tradición mexicana por excelencia.
      </p>
    </section>
  </HorizontalCard>
</section>

<style>
  #upper-container {
    position: relative; /* Needed for sticky positioning */
    overflow: scroll;
    height: 40.2rem;

    align-items: center;

    margin: var(--spacing-lg);

    -ms-overflow-style: none; /* IE */
    scrollbar-width: none; /* Firefox */
  }
  #upper-container::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  .horizontal-card-description {
    display: flex;
    flex-direction: column;
    max-width: 50ch;

    padding: 2rem 0;
  }
</style>
