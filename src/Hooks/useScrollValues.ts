import { useEffect, useState } from "react";

const useScrollValues = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [smoothedScrollY, setSmoothedScrollY] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    // You can adjust the smoothing factor to control how fast the smoothed value follows the actual value.
    const smoothingFactor = 0.4;
    const smoothedValue =
      smoothedScrollY + (currentScrollY - smoothedScrollY) * smoothingFactor;
    setSmoothedScrollY(smoothedValue);
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure the event listener is set up and cleaned up correctly

  return { scrollY, smoothedScrollY };
};

export default useScrollValues;
