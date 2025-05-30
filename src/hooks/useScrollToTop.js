import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop(dependencies = []) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, ...dependencies]);
}

export default useScrollToTop;
