<script lang="ts">
  import Header from '../../components/Header.svelte';
  import HorizontalCard from '../../components/mezcales/HorizontalCard.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';
  import Placeholder from '../../assets/img/placeholder.png';
</script>

<Header
  title="Nuestros mezcales"
  caption="Conoce la familia"
  description="El Mezcal Potosino Salmero respeta sus procesos ancestrales honrando su agave Salmiana silvestre, destilado con respeto y tradición."
>
  <ImageComponent slot="image" src={Placeholder} />
</Header>
<!-- <div><h2>{count}<span>/3</span></h2></div> -->
<section class="card-container">
  <HorizontalCard title="Original" id="card1" additionalClass="card1">
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
  <HorizontalCard title="Original" id="card2" additionalClass="card2">
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
  <HorizontalCard title="Original" id="card3" additionalClass="card3">
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
  .card-container {
    z-index: 25;
    margin-top: 0;
    position: relative;
  }
  .horizontal-card-description {
    display: flex;
    flex-direction: column;
    max-width: 50ch;

    padding: 2rem 0;
  }
</style>
