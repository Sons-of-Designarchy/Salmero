<script lang="ts">
  export let src: string;
</script>

<video playsinline autoplay loop muted width="100%" height="100%">
  <source {src} />
</video>

<style>
  video {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
</style>
