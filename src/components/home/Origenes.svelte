<script>
  import Altiplano_1 from '../../assets/img/Altiplano_1.png';
  import Altiplano_2 from '../../assets/img/Altiplano_2.png';
  import Altiplano_3 from '../../assets/img/Altiplano_3.png';
</script>

<div class="origenes-wrapper" id="#origenes">
  <div class="origenes">
    <section>
      <p class="caption">Del norte de México</p>
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
              En El Altiplano, el <span class="bold-text accent-text"
                >agave Salmiana
              </span>
              vive
              <span class="bold-text">besando el rocío de cada mañana</span>,
              porque sabe que no contarÁ con lluvia.
            </p>
            <p>
              Amanece siempre a dos mil metros de altura, donde pasa frio en el
              alba y donde aguanta el sol de esas alturas.
            </p>
          </section>
          <img class="vertical-img" src={Altiplano_3} alt="placeholder" />
        </div>
        <div class="origenes-description-section">
          <img class="vertical-img" src={Altiplano_2} alt="placeholder" />
          <section>
            <p>
              En este <span class="bold-text accent-text">Idilio Salvaje</span>,
              el Agave Salmiana
              <span class="bold-text">se nutre por mas de 12 años</span> de la rica
              tierra Agreste que tiene a sus pies.
            </p>
            <p>
              Así, solo así, se logra tener un agave capaz de darnos el <span
                class="bold-text accent-text"
              >
                Mezcal Salmero</span
              >, digno representante del
              <span class="bold-text">Altiplano</span>.
            </p>
            <img class="horizontal-img" src={Altiplano_1} alt="placeholder" />
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

    padding-top: calc(var(--spacing-xl));

    @media only screen and (min-width: 48em) {
      padding-top: calc(var(--spacing-xl) * 2);
    }
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
    margin-top: var(--spacing-lg);

    max-width: var(--max-width);

    background: url('../../assets/img/Agave_2.png');
    background-size: cover;
    background-repeat: no-repeat;

    box-sizing: border-box;

    @media only screen and (min-width: 48em) {
      margin: var(--spacing-xl) 0;
    }
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

    box-sizing: border-box;

    overflow: hidden;

    @media only screen and (min-width: 48em) {
      gap: calc(var(--spacing-xl) * 2);
    }
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
    padding: var(--spacing-sm) 0;

    @media only screen and (min-width: 48em) {
      max-width: 45ch;
    }
  }

  .origenes-description-section img:first-child {
    width: 100%;
    @media only screen and (min-width: 48em) {
      width: auto;
    }
  }

  .origenes-description-section img:nth-child(2) {
    width: 100%;
    @media only screen and (min-width: 48em) {
      width: auto;
      left: 60%;
      position: absolute;
    }
  }

  .origenes-description-section img:nth-child(3) {
    width: 100%;
    @media only screen and (min-width: 64em) {
      display: block;
      margin-top: -30rem;
      left: 78%;
      position: absolute;
      width: auto;
    }
  }
</style>
