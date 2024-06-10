<script lang="ts">
  import VerticalCardsGrid from '../components/home/VerticalCardsGrid.svelte';
  import Header from '../components/Header.svelte';
  import Origenes from '../components/home/Origenes.svelte';
  import Altiplano from '../components/home/Altiplano.svelte';
</script>

<Header
  title="tradición y sabor auténtico
del Altiplano."
  caption="Hecho en México"
  description="El Mezcal Potosino Salmero respeta sus procesos ancestrales honrando su agave Salmiana silvestre, destilado con respeto y tradición."
  ImageComponent={Altiplano}
/>
<VerticalCardsGrid />
<Origenes />
