import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../Product/ProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselWrapper } from './ProductCarousel.styled';
import {
  SLIDES_TO_SHOW_DEFAULT,
  AUTOPLAY_SPEED_MS,
  RESPONSIVE_BREAKPOINTS,
} from '../../constants/carousel';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routerPaths.js';

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

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    if (!id) return;
    navigate(ROUTES.PRODUCT_DETAILS.replace(ROUTES.ID, id));
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} onSelect={handleProductClick} />
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};
export default ProductCarousel;
