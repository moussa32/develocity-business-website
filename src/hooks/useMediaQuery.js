import { useEffect, useState } from "react";

const useMediaQuery = query => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    setIsMatch(mediaQuery.matches);

    const handleMediaQueryChange = event => {
      setIsMatch(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, [window]);

  return [isMatch];
};

export default useMediaQuery;
