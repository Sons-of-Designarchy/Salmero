<script lang="ts">
  import { onMount } from 'svelte';
  export let src: string;

  let videoElement: HTMLVideoElement;

  function playVideo() {
    if (videoElement) {
      videoElement.play();
    }
  }

  // Automatically play the video when the component is mounted
  onMount(() => {
    playVideo();
  });
</script>

<video bind:this={videoElement} loop muted width="100%" height="100%">
  <source {src} />
</video>

<style>
  video {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
</style>
