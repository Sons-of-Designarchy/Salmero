<script>
  import Header from '../../components/Header.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';

  import ProcesoImg from '../../assets/img/Proceso_header.png';
  import Jabali from '../../assets/svg/Jabali.svelte';
  import Proceso_1 from '../../assets/img/Proceso_1.png';
  import Proceso_2 from '../../assets/img/Proceso_2.png';
  import Proceso_3 from '../../assets/img/Proceso_3.png';
  import HotStones from '../../assets/svg/HotStones.svelte';
  import Agave from '../../assets/svg/Agave.svelte';
</script>

<Header>
  <ImageComponent src={ProcesoImg} slot="image" />
  <section slot="custom-description" class="proceso-intro">
    <h1>Nuestro proceso</h1>
    <Jabali />
    <p>
      Nuestro proceso de producción respeta las <span class="bold-text"
        >tradiciones de más de 200 años,</span
      >
      nuestro mezcal está hecho por las manos de esta tierra.
    </p>
    <div class="bg-image" />
  </section>
</Header>

<section class="proceso-images-grid">
  <ImageComponent src={Proceso_1} />
  <ImageComponent src={Proceso_2} />
  <ImageComponent src={Proceso_3} />
</section>

<section class="proceso-steps">
  <article>
    <div class="proceso-steps-img"><Agave /></div>
    <p>1</p>
    <h3>Selección</h3>
    <p>
      el Agave Salmiana madura en 10 a 12 años. Luego de un año más de espera,
      los campesinos cosechan el agave para llevarlo al horno. Este proceso
      permite al Salmiana concentrar más azúcar en su piña, esencial para la
      fabricación artesanal del mezcal.
    </p>
  </article>
  <article>
    <div class="proceso-steps-img"><HotStones /></div>
    <p>2</p>
    <h3>Cocción</h3>
    <p>
      el Agave Salmiana madura en 10 a 12 años. Luego de un año más de espera,
      los campesinos cosechan el agave para llevarlo al horno. Este proceso
      permite al Salmiana concentrar más azúcar en su piña, esencial para la
      fabricación artesanal del mezcal.
    </p>
  </article>
  <article>
    <div class="proceso-steps-img"><HotStones /></div>
    <p>3</p>
    <h3>Fermentación</h3>
    <p>
      Nuestro proceso 100% Natural se ve determinado por las fluctuaciones de
      temperatura en el Altiplano y por consecuencia la fermentación se logra
      desde 2 días en los veranos, hasta 5 días en los inviernos.
    </p>
  </article>
  <article>
    <div class="proceso-steps-img"><HotStones /></div>
    <p>4</p>
    <h3>Destilación</h3>
    <p>
      La destilación se realiza en Alambiques de Cobre y Alambiques de
      Platillos. Con este método se logra la separación de alcoholes óptimos
      para crear el sabor que hace único a Mezcal Salmero en sus tres
      presentaciones.
    </p>
  </article>
</section>

<style>
  .proceso-intro {
    display: grid;
    gap: var(--spacing-md);
    margin: auto;
    text-align: start;
    box-sizing: border-box;

    @media only screen and (min-width: 48em) {
      grid-auto-flow: column;
      grid-template-columns: 1fr 30% 30%;
      justify-items: center;
      align-items: center;

      max-width: var(--max-width);

      padding: calc(var(--spacing-xl) * 2);
    }
  }

  .proceso-intro p {
    max-width: 80ch;
  }

  .proceso-intro h1 {
    grid-row: 2/3;

    @media only screen and (min-width: 48em) {
      grid-row: inherit;
    }
  }

  .bg-image {
    width: 95%;
    height: 100%;
    position: absolute;
    background-image: url('../../assets/img/agave_bg.png');
    background-repeat: no-repeat;
    background-position: 10% -10rem;
    background-size: cover;
    mix-blend-mode: darken;

    @media only screen and (min-width: 48em) {
      background-position: 45vw 85%;
      width: 100%;
    }
  }

  .proceso-images-grid {
    display: grid;

    grid-template-columns: 100%;
    @media only screen and (min-width: 48em) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 100%;
      height: 30rem;
    }
  }

  .proceso-steps {
    display: flex;
    row-gap: 4rem;
    flex-wrap: wrap;
    justify-content: center;

    margin: auto;
    padding: calc(var(--spacing-xl) * 2) 0;
  }

  .proceso-steps article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    width: 25rem;

    text-align: center;
  }

  .proceso-steps article p {
    max-width: 35ch;
  }

  .proceso-steps-img {
    width: 8rem;
  }
</style>