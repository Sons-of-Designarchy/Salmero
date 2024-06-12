<script lang="ts">
  import Jabali from '../../assets/svg/Jabali.svelte';

  export let caption: string = 'Hecho en México';
  export let title: string = '';
  export let subtitle: string = '';
  export let description: string = '';
</script>

<article>
  <slot class="image"></slot>
  <p>{caption}</p>
  <h1>{title}</h1>
  <p>{subtitle}</p>
  <Jabali />
  <p>{description}</p>
</article>
