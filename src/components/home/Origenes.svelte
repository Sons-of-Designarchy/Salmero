<script>
  import PlaceholderImg from '../../assets/img/placeholder.png';
</script>

<div class="origenes-wrapper" id="#origenes">
  <div class="origenes">
    <section>
      <p>Del norte de México</p>
      <h1>ORIGENES DEL ALTIPLANO POTOSINO</h1>
      <p class="origenes-intro">
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

    <section class="origenes-description">
      <div class="origenes-description-inner">
        <div class="origenes-description-section">
          <section>
            <p>
              En El Altiplano, el <span class="bold accent-text"
                >agave Salmiana
              </span>
              vive
              <span class="bold">besando el rocío de cada mañana</span>, porque
              sabe que no contarÁ con lluvia.
            </p>
            <p>
              Amanece siempre a dos mil metros de altura, donde pasa frio en el
              alba y donde aguanta el sol de esas alturas.
            </p>
          </section>
          <img class="vertical-img" src={PlaceholderImg} alt="placeholder" />
        </div>
        <div class="origenes-description-section">
          <img class="vertical-img" src={PlaceholderImg} alt="placeholder" />
          <section>
            <p>
              En este <span class="bold accent-text">Idilio Salvaje</span>, el
              Agave Salmiana
              <span class="bold">se nutre por mas de 12 años</span> de la rica tierra
              Agreste que tiene a sus pies.
            </p>
            <p>
              Así, solo así, se logra tener un agave capaz de darnos el <span
                class="bold accent-text"
              >
                Mezcal Salmero</span
              >, digno representante del <span class="bold">Altiplano</span>.
            </p>
            <img
              class="horizontal-img"
              src={PlaceholderImg}
              alt="placeholder"
            />
          </section>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
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
  .origenes-wrapper {
    background: var(--bg-light-yellow);
  }
  .origenes {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: calc(var(--spacing-xl) * 2);

    text-align: center;
    overflow: hidden;

    padding: calc(var(--spacing-xl) * 2) 0;

    margin: auto;
  }

  .origenes-intro {
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
    max-width: var(--max-width);

    background: url('../../assets/img/placeholder.png');
    background-size: cover;
    background-repeat: no-repeat;

    box-sizing: border-box;
  }

  .origenes-image-description {
    max-width: 50ch;
  }

  .vertical-img {
    height: 15rem;

    @media only screen and (min-width: 48em) {
      min-width: 26rem;
    }
  }

  .horizontal-img {
    width: 12rem;
    height: 19rem;
  }

  .origenes-description {
    background-color: var(--bg-default);
    width: 100%;
  }
  .origenes-description-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    padding: calc(var(--spacing-xl) * 2) var(--spacing-lg);
    max-width: var(--max-width);
    margin: auto;

    gap: calc(var(--spacing-xl) * 2);
    box-sizing: border-box;
  }

  .origenes-description-section {
    display: grid;
    width: 100%;
    gap: var(--spacing-lg);
  }

  .origenes-description-section:first-child {
    grid-template-columns: 1fr;
    @media only screen and (min-width: 48em) {
      grid-template-columns: minmax(300px, 80%) 1fr;
    }
  }

  .origenes-description-section:nth-child(2) {
    grid-template-columns: 1fr;
    @media only screen and (min-width: 48em) {
      grid-template-columns: 1fr minmax(100px, 80%);
    }
  }

  .origenes-description-section section p {
    text-align: start;
    font-size: 1.6rem;

    @media only screen and (min-width: 48em) {
      max-width: 45ch;
    }
  }

  .origenes-description-section img:nth-child(2) {
    @media only screen and (min-width: 48em) {
      left: 60%;
      position: absolute;
    }
  }

  .origenes-description-section img:nth-child(3) {
    display: none;
    @media only screen and (min-width: 64em) {
      display: block;
      margin-top: -20rem;
      left: 78%;
      position: absolute;
    }
  }
</style>
