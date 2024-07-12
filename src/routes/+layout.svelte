<script lang="ts">
  import Navigation from '../components/Navigation.svelte';
  import MobileMenu from '../components/MobileMenu.svelte';
  import Footer from '../components/Footer.svelte';
  import Socials from '../components/Socials.svelte';
  import '../globals.css';

  import AgeWall from '../components/AgeWall.svelte';

  let minAgeAgreement: boolean | null = null;

  function setMinAge(event: CustomEvent) {
    minAgeAgreement = event.detail.agreement;
  }
</script>

{#if minAgeAgreement}
  <main>
    <Navigation />
    <MobileMenu />
    <slot></slot>
    <Socials />
    <Footer />
  </main>
{:else}
  <AgeWall on:agreementSet={setMinAge} />
{/if}
