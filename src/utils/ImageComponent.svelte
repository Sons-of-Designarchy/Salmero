<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallbackSrc: string = '../assets/img/placeholder.png';
  export let styles: string = '';
  export let className: string = '';
  let imageSrc: string = '';

  // Update the image source based on the given src
  $: imageSrc = src;

  // Error handling function
  function handleError() {
    imageSrc = fallbackSrc;
  }
</script>

<img {src} {alt} on:error={handleError} style={styles} class={className} />

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .horizontal-card-image {
    border-radius: 20px 20px 0 0;

    @media only screen and (min-width: 48em) {
      border-radius: 20px 0 0 20px;
    }
  }

  .header-img-top {
    object-position: top center;
  }
</style>
