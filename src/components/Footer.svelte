<script>
  import Logo from '../assets/svg/Logo.svelte';
</script>

<footer>
  <section>
    <div class="head">
      <div>
        <p>Original</p>
        <p>Guadalupe</p>
        <p>Panamericano</p>
      </div>
      <div class="head-socials">
        <a href="/">Instagram</a>
        <a href="/">Facebook</a>
        <a href="/">YouTube</a>
      </div>
    </div>
    <Logo width="100%" />
  </section>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center;

    background: var(--bg-black);
    color: var(--gray-100);

    padding: var(--spacing-sm);
  }

  section {
    width: var(--max-width);
  }

  a {
    letter-spacing: 2.25px;
  }

  .head {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .head div {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);

    padding: var(--spacing-xl) 0;
  }

  .head-socials {
    text-align: right;
  }
</style>
