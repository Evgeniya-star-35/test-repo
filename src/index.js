import './sass/main.scss';

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
// Initialise Carousel
const newsCarousel = new Carousel(document.querySelector("#newsCarousel"), {
    infinite: false,
    Dots: false,
    friction: 0.89,
    slidesToSlide: 3,
    fill: false,
  });
  const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/'
  const KEY = 'PzrzbFx6KOLu93UpjkE0jgoi6XvAmcaG'
  function fetchTickets () {
    fetch(`https://app.ticketmaster.com/discovery/v2/suggest.json?attractionId=K8vZ917Gku7&countryCode=CA&apikey=${KEY}`)
  }