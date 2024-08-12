<script lang="ts">
  import { locale } from 'svelte-i18n';

  function changeLocale(newLocale: string) {
    locale.set(newLocale);
  }
</script>

<button on:click={() => changeLocale('en')}>En</button>
<button on:click={() => changeLocale('es')}>Es</button>
