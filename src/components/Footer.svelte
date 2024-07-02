<script>
  import Logo from '../assets/svg/Logo.svelte';
  import Jabali from '../assets/svg/Jabali.svelte';
</script>

<footer>
  <section>
    <div class="head">
      <div>
        <p>Original</p>
        <p>Guadalupe</p>
        <p>Panamericano</p>
      </div>
      <Jabali fill="#ECECE9" />
      <div class="head-socials">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/mezcalsalmero?igsh=MXFkY21tMndnajYxNw%3D%3D&utm_source=qr"
              target="_blank"><p>Instagram</p></a
            >
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61557454914828"
              target="_blank"><p>Facebook</p></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-logo-container">
      <Logo width="100%" height="100%" fill="#ECECE9" />
    </div>
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

  p {
    color: var(--text-color-light);
  }
  .head {
    width: 100%;
    align-items: center;

    @media only screen and (min-width: 48em) {
      display: flex;
      justify-content: space-between;
    }
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

  .head-socials ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    justify-items: start;
  }
  .footer-logo-container {
    padding: var(--spacing-xl) var(--spacing-sm);
  }
</style>
