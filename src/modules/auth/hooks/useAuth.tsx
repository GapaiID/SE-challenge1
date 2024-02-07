import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const doAuthCheck = () => {
    setIsLoading(true);

    const access = localStorage.getItem('access');
    if (!access) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  };

  const doLogout = () => {
    localStorage.removeItem('access');
  };

  useEffect(() => {
    doAuthCheck();
  }, []);

  return { doAuthCheck, doLogout, isAuthenticated, isLoading };
};
