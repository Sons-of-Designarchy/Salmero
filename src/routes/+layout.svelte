<script>
  import Navigation from '../components/Navigation.svelte';
  import Footer from '../components/Footer.svelte';
  import Socials from '../components/Socials.svelte';
  import '../globals.css';
</script>

<main>
  <Navigation />
  <slot></slot>
  <Socials />
  <Footer />
</main>
