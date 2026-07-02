import { useState, useEffect } from "react";
import noFoundImage from "../../public/images/no-found.png";

export function LazyImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  fallback = noFoundImage,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    // Reset image state when the source changes so the new image shows the loading placeholder.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoaded(false);
    setImageSrc(src);
  }, [src]);

  const handleLoad = () => setLoaded(true);
  const handleError = () => {
    if (imageSrc !== fallback) {
      setImageSrc(fallback);
      setLoaded(false);
      return;
    }
    setLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-slate-200/80 animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`block w-full h-full object-cover transition duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
}
