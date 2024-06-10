<div class="origenes-wrapper">
  <div class="origenes">
    <section>
      <p>Del norte de México</p>
      <h1>ORIGENES DEL ALTIPLANO POTOSINO</h1>
      <p class="origenes-description">
        Hace más de 200 años, donde comienza el gran desierto de chihuahua, su
        gente comenzó a transformar un agave que sobrevivía al igual que ellos a
        esa dura tierra: el salmiana.
      </p>
    </section>

    <section class="origenes-image">
      <h1>nuestro agave salmiana es enaltecido por su esencia resiliente,</h1>
      <p class="origenes-image-description">
        Los Sabores que puedes apreciar en el Mezcal Salmero son fruto de las
        condiciones donde crece el Salmiana de forma Silvestre
      </p>
    </section>

    <section class="origenes-intro">
      <p>
        En El Altiplano, el <span class="bold accent-text"
          >agave Salmiana
        </span>
        vive
        <span>besando el rocío de cada mañana</span>, porque sabe que no contarÁ
        con lluvia.
      </p>
      <p>
        Amanece siempre a dos mil metros de altura, donde pasa frio en el alba y
        donde aguanta el sol de esas alturas.
      </p>
    </section>
  </div>
</div>

<style>
  .origenes-wrapper {
    background: var(--bg-light-yellow);
    padding: var(--spacing-lg) 0;
  }
  .origenes {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 1rem;

    max-width: var(--max-width);

    text-align: center;

    padding: var(--spacing-lg);
    margin: auto;
  }

  .origenes-description {
    margin: auto;
    max-width: 110ch;
  }

  .origenes-image {
    width: 100%;
    min-height: 43rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: var(--spacing-lg);

    background: url('../../assets/img/placeholder.png') lightgray 0px -760.454px /
      100% 241.766% no-repeat;
  }

  .origenes-image-description {
    max-width: 50ch;
  }

  .origenes-image h1,
  .origenes-image p {
    color: var(--text-color-light);
  }

  .bold {
    font-family: 'Univers LT Std 67';
    font-weight: 500;
  }

  .accent-text {
    color: var(--green-500);
  }
</style>
