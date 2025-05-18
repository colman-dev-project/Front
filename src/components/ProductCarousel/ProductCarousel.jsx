import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../Product/ProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselWrapper } from './ProductCarousel.styled';

const SLIDES_TO_SHOW_DEFAULT = 4;
const AUTOPLAY_SPEED_MS = 2000;
const RESPONSIVE_BREAKPOINTS = [
  {
    breakpoint: 1200,
    settings: { slidesToShow: 3 },
  },
  {
    breakpoint: 900,
    settings: { slidesToShow: 2 },
  },
  {
    breakpoint: 600,
    settings: { slidesToShow: 1 },
  },
];

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: SLIDES_TO_SHOW_DEFAULT,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: AUTOPLAY_SPEED_MS,
    pauseOnHover: true,
    responsive: RESPONSIVE_BREAKPOINTS,
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
}
export default ProductCarousel;
