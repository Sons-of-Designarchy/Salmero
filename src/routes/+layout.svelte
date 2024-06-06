<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import Socials from '../components/Socials.svelte';
  import '../globals.css';
</script>

<main>
  <Header />
  <slot></slot>
  <Socials />
  <Footer />
</main>
