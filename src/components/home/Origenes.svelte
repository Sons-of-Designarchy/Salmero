<script lang="ts">
  import { inview } from 'svelte-inview';
  import { fly } from 'svelte/transition';
  let visible: boolean;
</script>

<div
  class="origenes-wrapper"
  use:inview={{}}
  on:inview_change={({ detail }) => {
    visible = detail.inView;
  }}
  id="#origenes"
>
  {#if visible}
    <div class="origenes">
      <section
        in:fly={{ y: 100, duration: 2000 }}
        class="container-min-paddings"
      >
        <p class="caption">Del norte de México</p>
        <h1>ORIGENES DEL ALTIPLANO POTOSINO</h1>
        <p class="origenes-intro">
          Hace más de 200 años, donde comienza el gran desierto de chihuahua, su
          gente comenzó a transformar un agave que sobrevivía al igual que ellos
          a esa dura tierra: el salmiana.
        </p>
      </section>

      <section class="origenes-image container-min-paddings">
        <h1 in:fly={{ y: 100, duration: 2000, delay: 100 }}>
          nuestro agave salmiana es enaltecido por su esencia resiliente,
        </h1>
        <p
          in:fly={{ y: 100, duration: 2000, delay: 100 }}
          class="origenes-image-description"
        >
          Los Sabores que puedes apreciar en el Mezcal Salmero son fruto de las
          condiciones donde crece el Salmiana de forma Silvestre
        </p>
      </section>
    </div>
  {/if}
</div>

<style>
  .origenes-image h1,
  .origenes-image p {
    color: var(--text-color-light);
  }
  .origenes-wrapper {
    background: var(--bg-light-yellow);
  }
  .origenes {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    text-align: center;
    overflow: hidden;

    margin: auto;

    @media only screen and (min-width: 48em) {
      padding-top: var(--spacing-xl);
    }
  }

  .origenes-intro {
    max-width: var(--max-width);
    box-sizing: border-box;
    letter-spacing: var(--letter-spacing-normal);

    @media only screen and (min-width: 48em) {
      padding: var(--spacing-sm) var(--spacing-md);
    }
  }

  .origenes-image {
    width: 100%;
    min-height: 43rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: var(--spacing-lg);

    max-width: var(--max-width);

    background: url('../../assets/img/Agave_2.png');
    background-size: cover;
    background-repeat: no-repeat;

    box-sizing: border-box;
  }

  .origenes-image-description {
    max-width: 50ch;
  }
</style>
