<script>
  import Header from '../../components/Header.svelte';
  import ImageComponent from '../../utils/ImageComponent.svelte';
  import HeaderImg from '../../assets/img/Origenes_header.png';
  import FeaturedImage from '../../components/FeaturedImage.svelte';
  import NuestraTierraImg from '../../assets/img/Nuestra_tierra.png';
  import NuestraHistoriaImg from '../../assets/img/Nuestra_historia.png';
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

<FeaturedImage title="Nuestra tierra" caption="Expresion pura de tradiciones">
  <ImageComponent slot="image" src={NuestraTierraImg} />
  <section
    slot="featured-description"
    class="nuestra-tierra featured-description"
  >
    <p>
      EL LÍMITE DE MESOAMÉRICA Y ARIDOAMÉRICA, DONDE LOS BRAVOS SE JUNTAN CON
      LOS CIVILIZADOS, DONDE EL DESIERTO IMPONE SU LEY Y DEJA VIVIR SOLO A LOS
      MÁS RESILIENTES.
    </p>
    <p>
      ORgULLO POTOSINO QUE RINDE HOMENAJE A LA UNIÓN DE DOS MUNDOS COMO EL MISMO
      SAN LUIS. SALMERO ES LA REPRESENTACIÓN COMPLETA DEL ALTIPLANO.
    </p>
  </section>
</FeaturedImage>

<FeaturedImage title="Nuestra historia" caption="Expresion pura de tradiciones">
  <ImageComponent slot="image" src={NuestraHistoriaImg} />
  <section
    slot="featured-description"
    class="nuestra-historia featured-description"
  >
    <p>
      Fue en el Siglo XVII que los Monjes Carmelitos Descalzos llegaron al
      Altiplano Potosino, y ahí, introdujeron el primer alambique para procesar
      Mezcal en México, donde no solamente fue el primer Mezcal de Mexico, si no
      probablemente el primer destilado en todo el continente americano. De esta
      forma, San Luis Potosí se convirtió hasta las épocas de la revolución en
      el productor mas grande de destilados en el país y en el continente. Como
      toda buena historia, sufre su tragedia después de la revolución, donde mas
      de 200 fabricas se vieron forzadas a cerrar sus puertas ya que la reforma
      agraria no fue compatible con el modelo económico que terminaba, el de las
      Haciendas.
    </p>
    <p>
      Ahora, 100 años después, Mezcal Salmero está presente para recordar
      Nuestra Historia y no dejarnos olvidar de dónde viene este Mezcal tan
      tradicional no solo en su elaboración, sino en la cultura de nuestro
      Estado y nuestro Pais.
    </p>
  </section>
</FeaturedImage>

<style>
  .custom-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: 48em) {
      flex-direction: row;
    }
  }

  .custom-description p,
  .nuestra-tierra p {
    max-width: 55ch;
  }

  .nuestra-tierra.featured-description {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    text-align: start;

    @media only screen and (min-width: 48em) {
      flex-direction: row;
    }
  }

  .nuestra-historia.featured-description {
    max-width: 150ch;
  }
</style>
