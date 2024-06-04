<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import '../globals.css';
</script>

<main>
  <Header />
  <slot></slot>
  <Footer />
</main>
