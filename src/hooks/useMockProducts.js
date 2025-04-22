import { useEffect, useState } from 'react';

// TODO: Replace with real fetch/axios call to backend
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        setProducts([
          {
            id: 1,
            image: '/assets/photo.png',
            name: 'Phone Case',
            price: 129,
            rating: 4.5,
          },
          {
            id: 2,
            image: '/assets/photo.png',
            name: 'Thermos',
            price: 89,
            rating: 4,
          },
        ]);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }, 800);
  }, []);

  return { products, isLoading, error };
};
