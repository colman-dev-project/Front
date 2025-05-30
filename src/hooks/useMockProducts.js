import { useEffect, useState } from 'react';

const MOCK_PRODUCTS = [
  {
    id: 1,
    image: null,
    name: 'Phone Case',
    price: 129,
    rating: 4.5,
  },
  {
    id: 2,
    image: null,
    name: 'Thermos',
    price: 89,
    rating: 4,
  },
];

const LOADING_DELAY_MS = 800;

// TODO: Replace with real fetch/axios call to backend
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      try {
        setProducts(MOCK_PRODUCTS);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }, LOADING_DELAY_MS);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return { products, isLoading, error };
};
