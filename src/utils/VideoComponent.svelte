<script lang="ts">
  export let src: string;
</script>

<video autoplay loop muted width="100%" height="100%">
  <source {src} />
  <track kind="captions" />
</video>

<style>
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
