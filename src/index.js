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