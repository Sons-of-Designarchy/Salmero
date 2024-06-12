<script>
  import Header from '../../components/Header.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';
  import Placeholder from '../../assets/img/placeholder.png';
</script>

<Header>
  <ImageComponent slot="image" src={Placeholder} />
</Header>
