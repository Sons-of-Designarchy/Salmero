<script>
  import Navigation from '../components/Navigation.svelte';
  import MobileMenu from '../components/MobileMenu.svelte';
  import Footer from '../components/Footer.svelte';
  import Socials from '../components/Socials.svelte';
  import '../globals.css';
</script>

<main>
  <Navigation />
  <MobileMenu />
  <slot></slot>
  <Socials />
  <Footer />
</main>
