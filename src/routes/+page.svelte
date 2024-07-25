<script lang="ts">
  import VerticalCardsGrid from '../components/home/VerticalCardsGrid.svelte';
  import Header from '../components/Header.svelte';
  import Origenes from '../components/home/Origenes.svelte';
  import Tradiciones from '../components/home/Tradiciones.svelte';
  import OrigenesDescription from '../components/home/OrigenesDescription.svelte';
  import VideoComponent from '../utils/VideoComponent.svelte';
  import Altiplano from '../assets/altiplano.mov';
</script>

<Header
  title="tradición y sabor auténtico
del Altiplano."
  caption="Hecho en México"
>
  <VideoComponent className="header-img" slot="image" src={Altiplano} />
  <p slot="custom-description" class="header-description">
    "El Mezcal Potosino Salmero respeta sus procesos ancestrales honrando su
    agave Salmiana silvestre, destilado con respeto y tradición."
  </p>
</Header>
<VerticalCardsGrid />
<Origenes />
<OrigenesDescription />
<Tradiciones />

<style>
  .header-description {
    height: 5vh;
  }
</style>
