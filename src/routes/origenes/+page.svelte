<script>
  import Header from '../../components/Header.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';
  import HeaderImg from '../../assets/img/Origenes_header.png';
</script>

<Header title="Nuestro Agave" caption="origenes salmero" textAlign="start">
  <ImageComponent src={HeaderImg} slot="image" />
  <section slot="custom-description" class="custom-description">
    <p>
      SAGRADO PARA NUESTROS ANCESTROS, EL AGAVE SALMIANA PERDURA EN EL DESIERTO
      COMO LAS LEYENDAS CONTADAS EN SU NOMBRE.
    </p>
    <p>
      CON SUS PENCAS GRUESAS Y CARNOSAS, QUE NACEN DEL TALLO Y REMATAN EN UNA
      ESPINA FUERTE Y OSCURA.
    </p>
    <p>
      PERFUMES FLORALES QUE TRASCIENDEN EN CUALQUIER LUGAR, FORMAN EL CARACTER Y
      ESENCIA DE NUESTRO MEZCAL SALMERO.
    </p>
  </section>
</Header>

<style>
  .custom-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: 48em) {
      flex-direction: row;
    }
  }

  p {
    max-width: 55ch;
  }
</style>
