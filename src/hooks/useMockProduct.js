import { useEffect, useState } from 'react';
import item1Image from '../assets/item1.jpg';

const LOADING_DELAY_MS = 1200;

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const mockProduct = {
    id,
    image: item1Image,
    name: `Product #${id}`,
    description:
      'High-quality short description. Ready for pickup within 3 days.',
    price: 299,
    rating: 4.5,
    reviewCount: 35,
    lockerLocation: 'Locker #0000, Tel Aviv',
    reviews: [
      { name: 'Yossi', text: 'Great seller, very responsive!' },
      { name: 'Dana', text: 'Fast delivery and amazing quality!' },
    ],
  };

  useEffect(() => {
    setIsLoading(true);
    const timerId = setTimeout(() => {
      try {
        setProduct(mockProduct);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }, LOADING_DELAY_MS);

    return () => {
      clearTimeout(timerId);
    };
  }, [id]);

  return { product, isLoading, error };
};
