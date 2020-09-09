import { useState, useEffect } from 'react';

interface WindowDimensions {
  width: number | undefined;
  height: number | undefined;
}

const useWindowDimensions = (): WindowDimensions => {
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : undefined;
    const height = hasWindow ? window.innerHeight : undefined;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    // eslint-disable-next-line
  }, [hasWindow]);

  return windowDimensions;
};

export default useWindowDimensions;
