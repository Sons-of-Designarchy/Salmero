<script lang="ts">
  import VerticalCardsGrid from '../components/home/VerticalCardsGrid.svelte';
  import Header from '../components/Header.svelte';
  import Origenes from '../components/home/Origenes.svelte';
  import Tradiciones from '../components/home/Tradiciones.svelte';
  import OrigenesDescription from '../components/home/OrigenesDescription.svelte';
  import VideoComponent from '../utils/VideoComponent.svelte';
  import Altiplano from '../assets/altiplano.mp4';
</script>

<Header
  title="tradición y sabor auténtico
del Altiplano."
  caption="Hecho en México"
  description="El Mezcal Potosino Salmero respeta sus procesos ancestrales honrando su
    agave Salmiana silvestre, destilado con respeto y tradición."
>
  <VideoComponent className="header-img" slot="image" src={Altiplano} />
</Header>
<VerticalCardsGrid />
<Origenes />
<OrigenesDescription />
<Tradiciones />
