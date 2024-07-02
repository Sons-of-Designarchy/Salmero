<script lang="ts">
  import Header from '../../components/Header.svelte';
  import HorizontalCard from '../../components/mezcales/HorizontalCard.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';

  import HeaderImg from '../../assets/img/Salmero_header.png';
  import Original from '../../assets/img/Original.png';
  import Guadalupe from '../../assets/img/Guadalupe.png';
  import Panamericano from '../../assets/img/Panamericano.png';
</script>

<Header
  title="Nuestros mezcales"
  caption="Conoce la familia"
  description="El Mezcal Potosino Salmero respeta sus procesos ancestrales honrando su agave Salmiana silvestre, destilado con respeto y tradición."
>
  <ImageComponent slot="image" src={HeaderImg} />
</Header>
<section class="card-container">
  <HorizontalCard title="Original" id="card1" bgColor="green">
    <ImageComponent
      slot="image"
      className="horizontal-card-image"
      src={Original}
    />
    <section slot="description" class="horizontal-card-description">
      <p>Era mi destino.</p>
      <p>
        En una tierra de poca agua, apagaría algunas sedes, despertaría otras.
      </p>
      <p>De joven no tengo nada, pues más de 200 años llevo en mi andar.</p>
      <p>
        Fusión de dos mundos, tenacidad y supervivencia, arte agreste en
        evolución.
      </p>
      <p>
        Soy el mezcal del Altiplano Potosino, tradición mexicana por excelencia.
      </p>
    </section>
  </HorizontalCard>
  <HorizontalCard title="Guadalupe" id="card2" bgColor="salmon">
    <ImageComponent
      slot="image"
      src={Guadalupe}
      className="horizontal-card-image"
    />
    <section slot="description" class="horizontal-card-description">
      <p>Guadalupe, escuchaste la noticia del concurso.</p>
      <p>
        Sabías que tu novio Francisco Bocanegra tenía el talento para ganarlo.
      </p>
      <p>
        En tu honor, nombramos este mezcal que une dos regiones mezcaleras del
        país en un ensamble de Salmiana potosino con Espadin oaxaqueño.
      </p>
      <p>
        Por ti, y por el resto de mexicanas y mexicanos que siguen construyendo
        nuestra historia, ¡Brindamos con orgullo con este Salmero Guadalupe en
        mano!
      </p>
    </section>
  </HorizontalCard>
  <HorizontalCard title="Panamericano" id="card3" bgColor="red">
    <ImageComponent
      slot="image"
      src={Panamericano}
      className="horizontal-card-image"
    />
    <section slot="description" class="horizontal-card-description">
      <p>
        La carretera panamericana nace de un sueño colectivo de unir el
        continente más bello del mundo...
      </p>
      <p>
        Este ensamble de mezcales, como la carretera panamericana, unen el
        mezcal Salmiana potosino con el mezcal mexicano oaxaqueño, de tal forma,
        a las personas de dichos estados se les brinda respeto y admiración con
        este ensamble hecho para ti.
      </p>
    </section>
  </HorizontalCard>
</section>

<style>
  .card-container {
    z-index: 25;
    margin-top: 0;
    position: relative;
    margin-bottom: var(--spacing-xl);
  }
  .horizontal-card-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    height: 100%;
    max-width: 50ch;

    padding-top: 1rem;

    box-sizing: border-box;
  }
</style>
