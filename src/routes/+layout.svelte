<script lang="ts">
  import Navigation from '../components/Navigation.svelte';
  import MobileMenu from '../components/MobileMenu.svelte';
  import Footer from '../components/Footer.svelte';
  import Socials from '../components/Socials.svelte';
  import '../globals.css';

  import AgeWall from '../components/AgeWall.svelte';
  import { onMount } from 'svelte';
  import LocaleSwitcher from '../components/LocaleSwitcher.svelte';

  let minAgeAgreement: boolean | null = null;

  function setMinAge(event: CustomEvent) {
    minAgeAgreement = event.detail.agreement;
    if (minAgeAgreement)
      sessionStorage.setItem('minAge', minAgeAgreement.toString());
  }

  onMount(() => {
    const getSessionAge = sessionStorage.getItem('minAge');
    if (getSessionAge) {
      const minAge = JSON.parse(getSessionAge);
      minAgeAgreement = minAge;
    }
    return;
  });
</script>

{#if minAgeAgreement}
  <main>
    <LocaleSwitcher />
    <Navigation />
    <MobileMenu />
    <slot></slot>
    <Socials />
    <Footer />
  </main>
{:else}
  <AgeWall on:agreementSet={setMinAge} />
{/if}
