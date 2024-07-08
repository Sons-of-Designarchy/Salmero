<script lang="ts">
  export let src: string;
  export let className: string;
</script>

<video class={className} playsinline autoplay loop width="100%" height="100%">
  <source {src} />
  <track kind="captions" />
</video>

<style>
  video {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .header-img {
    background-image: url('../assets/img/altiplano.png');
    background-size: cover;
  }
</style>
