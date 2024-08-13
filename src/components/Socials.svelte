<script lang="ts">
  import IntersectionObserver from 'svelte-intersection-observer';
  import { _ } from 'svelte-i18n';

  import Sociales_1 from '../assets/img/Sociales_1.png';
  import Sociales_2 from '../assets/img/Sociales_2.png';
  import Sociales_3 from '../assets/img/Sociales_3.png';
  import Sociales_4 from '../assets/img/Sociales_4.png';
  import { onMount } from 'svelte';

  type MediaItem = {
    id: string;
    media_type: 'CAROUSEL_ALBUM' | 'VIDEO' | 'IMAGE';
    permalink: string;
    media_url: string;
    username: string;
    caption: string;
    timestamp: string;
    children?: {
      data: {
        media_url: string;
        thumbnail_url: string;
        id: string;
      }[];
    };
  };

  type FetchResponse = {
    data: MediaItem[];
  };

  let element: HTMLElement;
  let intersecting: boolean;

  let data: MediaItem[];

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  async function fetchData() {
    let requestOptions = {
      method: 'get',
      headers: myHeaders,
      caches: 'force-cache',
    };

    fetch(
      'https://v1.nocodeapi.com/mezcalsalmero/instagram/tcyplVDduepbfJTz?limit=10',
      requestOptions
    )
      .then((response) => response.json())
      .then((result: FetchResponse) => {
        data = result.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }

  onMount(() => fetchData());
</script>

<section class="socials" id="encuentranos">
  <IntersectionObserver {element} bind:intersecting>
    <article bind:this={element} class="socials-content">
      <div class="socials-content-inner">
        <p class:animate={intersecting} class="caption">
          {$_('socials.caption')}
        </p>
        <h1 class:animate={intersecting}>
          {$_('socials.title')}
        </h1>
        <ul class="socials-links">
          <li class:animate={intersecting}>
            <a
              href="https://www.instagram.com/mezcalsalmero?igsh=MXFkY21tMndnajYxNw%3D%3D&utm_source=qr"
              target="_blank"><p>{$_('common.ig')}</p></a
            >
          </li>
          <li class:animate={intersecting}>
            <a
              href="https://www.facebook.com/profile.php?id=61557454914828"
              target="_blank"><p>{$_('common.fb')}</p></a
            >
          </li>
        </ul>
      </div>
    </article>
  </IntersectionObserver>

  <section class="socials-photo-grid">
    {#if data}
      {#each data
        .filter((item) => item.media_type !== 'VIDEO')
        .slice(0, 4) as item (item.id)}
        <a
          href="https://www.instagram.com/mezcalsalmero?igsh=MXFkY21tMndnajYxNw%3D%3D&utm_source=qr"
          target="_blank"
        >
          <img
            src={item.media_url ? item.media_url : Sociales_1}
            alt={item.caption}
          />
        </a>
      {/each}
    {:else}
      <a
        href="https://www.instagram.com/mezcalsalmero?igsh=MXFkY21tMndnajYxNw%3D%3D&utm_source=qr"
        target="_blank"
      >
        <img src={Sociales_1} alt="Mezcal Panamericano sobre mesa" />
      </a>
      <a
        href="https://www.instagram.com/mezcalsalmero?igsh=MXFkY21tMndnajYxNw%3D%3D&utm_source=qr"
        target="_blank"
      >
        <img src={Sociales_2} alt="Panorama del altiplano" />
      </a>

      <a
        href="https://www.instagram.com/mezcalsalmero?igsh=MXFkY21tMndnajYxNw%3D%3D&utm_source=qr"
        target="_blank"
      >
        <img src={Sociales_3} alt="Mezcal Original sobre mesa" />
      </a>
      <a
        href="https://www.instagram.com/mezcalsalmero?igsh=MXFkY21tMndnajYxNw%3D%3D&utm_source=qr"
        target="_blank"
      >
        <img src={Sociales_4} alt="Shots de mezcal" />
      </a>
    {/if}
  </section>
</section>

<style>
  .socials {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    flex-direction: row;

    width: 100%;

    background: var(--green-500);

    @media only screen and (min-width: 48em) {
      grid-template-columns: repeat(2, 1fr);
      height: 80vh;
    }
  }

  .socials-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;

    text-align: center;

    background-image: url('../assets/img/jabali.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 65%;
  }

  .socials-content-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 60vh;

    padding: calc(var(--spacing-lg) * 3) var(--spacing-md);

    box-sizing: border-box;

    @media only screen and (min-width: 48em) {
      min-width: min-content;
      height: 50vh;
    }
  }

  .socials-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5vw;

    @media only screen and (min-width: 48em) {
      gap: 3vw;
    }
  }

  /* 
  Add only if there's more than 2 social links
  .socials-links li:last-child {
    width: auto;

    @media only screen and (max-width: 35em) {
      width: 100%;
    }
  } */

  .socials-links p {
    text-align: center;
  }

  .socials-photo-grid {
    display: grid;
    height: inherit;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);

    @media only screen and (min-width: 48em) {
      width: 100%;
    }
  }

  .socials-photo-grid > a > img,
  .socials-photo-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .animate:first-child {
    animation-delay: 0.2s;
  }

  .animate:nth-child(2) {
    animation-delay: 0.4s;
  }

  .socials-links .animate:first-child {
    animation-delay: 0.6s;
  }

  .socials-links .animate:nth-child(2) {
    animation-delay: 0.8s;
  }
</style>
