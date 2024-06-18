<script>
  // @ts-nocheck

  import Header from '../../components/Header.svelte';
  import HorizontalCard from '../../components/mezcales/HorizontalCard.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';
  import Placeholder from '../../assets/img/placeholder.png';
  import enterView from 'enter-view';

  import { onMount } from 'svelte';

  let container = [];

  onMount(() => {
    container = document.querySelectorAll('#card');

    enterView({
      selector: container,
      enter: function (el) {
        el.classList.add('entered');
        // count.innerHTML = el.id;
      },
      exit: function (el) {
        el.classList.remove('entered');
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
<section class="cards-container" id="upper-container">
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
    height: 800px; /* Example height */
    position: relative; /* Needed for sticky positioning */
  }
  .cards-container {
    position: relative;
    height: 50rem;
    overflow: scroll;
  }
  .horizontal-card-description {
    display: flex;
    flex-direction: column;
    max-width: 50ch;

    padding: 2rem 0;
  }
</style>
