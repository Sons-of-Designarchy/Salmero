<script lang="ts">
  import { locale } from "svelte-i18n";
  import { get } from "svelte/store";

  let currentLocale = get(locale);

  $: {
    // Subscribe to the locale store to keep currentLocale updated
    const unsubscribe = locale.subscribe((value) => {
      currentLocale = value;
    });
  }

  function changeLocale(newLocale: string) {
    locale.set(newLocale);
  }
</script>

<div class="locale-switcher">
  <button
    class:active={currentLocale === "en"}
    on:click={() => changeLocale("en")}
  >
    En
  </button>
  |
  <button
    class:active={currentLocale === "es"}
    on:click={() => changeLocale("es")}
  >
    Es
  </button>
</div>

<style>
  .locale-switcher {
    background: var(--salmon);
    position: fixed;
    padding: 0;
    bottom: 0;
    right: 0;
    color: #666;
    z-index: 1000;
    border-top-left-radius: 8px;
  }

  .locale-switcher button {
    padding: 0.75rem 1rem;
    border: none;
    cursor: pointer;
  }

  .locale-switcher button.active {
    font-weight: bold;
    text-decoration: underline;
  }
</style>
