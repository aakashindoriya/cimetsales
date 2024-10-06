import { useEffect, useRef, useState } from "react";

const Carosal = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let refrence = useRef(null);
  function resetInterval() {
    refrence.current = setInterval(() => {
      setCurrentIndex((pre) => (pre === images.length - 1 ? 0 : pre + 1));
    }, 3000);
  }

  function handleNext() {
    clearInterval(refrence.current); 
    setCurrentIndex((pre) => (pre === images.length - 1 ? 0 : pre + 1));
    resetInterval(); 
  }

  function handlePrevious() {
    clearInterval(refrence.current); 
    setCurrentIndex((pre) => (pre === 0 ? images.length - 1 : pre - 1));
    resetInterval(); 
  }

  useEffect(() => {
    refrence.current = setInterval(() => {
      setCurrentIndex((pre) => (pre === images.length - 1 ? 0 : pre + 1));
    }, 3000);

    return () => clearInterval(refrence.current); 
  }, [images]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={currentIndex === currentIndex ? "active" : ""}
      />
      <button className="carousel-button prev" onClick={handlePrevious}>
        &lt;
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carosal;
