<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallbackSrc: string = '../assets/img/placeholder.png';
  export let styles: string;
  let imageSrc: string;

  // Update the image source based on the given src
  $: imageSrc = src;

  // Error handling function
  function handleError() {
    imageSrc = fallbackSrc;
  }
</script>

<img {src} {alt} on:error={handleError} style={styles} />

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
