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
      Nuestro proceso de producción respeta las tradiciones de más de 200 años,
      nuestro mezcal está hecho por las manos de esta tierra.
    </p>
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
    <p>
      el Agave Salmiana madura en 10 a 12 años. Luego de un año más de espera,
      los campesinos cosechan el agave para llevarlo al horno. Este proceso
      permite al Salmiana concentrar más azúcar en su piña, esencial para la
      fabricación artesanal del mezcal.
    </p>
  </article>
  <article>
   <div class="proceso-steps-img"> <HotStones /></div>
   <p>2</p>
    <p>
      el Agave Salmiana madura en 10 a 12 años. Luego de un año más de espera,
      los campesinos cosechan el agave para llevarlo al horno. Este proceso
      permite al Salmiana concentrar más azúcar en su piña, esencial para la
      fabricación artesanal del mezcal.
    </p>
  </article>
</section>

<style>

 .proceso-intro {
  display: flex;
  align-content: center;
 }

  .proceso-images-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .proceso-steps {
    display: flex;
    flex-wrap: wrap;

    max-width: var(--max-width);
    margin: auto;

    padding: calc(var(--spacing-xl) * 2);
    gap: calc(var(--spacing-xl) * 2);
  }

  .proceso-steps article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 20rem;

    text-align: center;
  }

  .proceso-steps-img {
   width: 8rem;
  }
</style>
