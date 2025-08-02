import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

const CountUpOnView = ({ end, suffix = "", duration = 2 }) => {
  const [hasViewed, setHasViewed] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasViewed) {
          setHasViewed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasViewed]);

  return (
    <div ref={ref}>
      {hasViewed ? (
        <CountUp end={end} duration={duration} suffix={suffix} />
      ) : (
        0
      )}
    </div>
  );
};

export default CountUpOnView;
