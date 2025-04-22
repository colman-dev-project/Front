import { useEffect, useState } from 'react';

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        setProduct({
          id,
          image: '/assets/photo.png',
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
        });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }, 1200);
  }, [id]);

  return { product, isLoading, error };
};
