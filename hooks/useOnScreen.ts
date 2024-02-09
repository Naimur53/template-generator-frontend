import { useEffect, useState } from "react";

interface UseOnScreenProps {
  ref: React.RefObject<HTMLDivElement>;
  rootMargin?: string;
}

const useOnScreen = ({ ref, rootMargin = "0px" }: UseOnScreenProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(ref.current);

    // Capture the current value of ref.current
    const currentRef = ref.current;

    return () => {
      if (currentRef == null) return;
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]);

  return isVisible;
};

export default useOnScreen;
