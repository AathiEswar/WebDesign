import './horizontal-gallery.scss'
import gsap from 'gsap';
import { useEffect, useRef, useState } from "react";

function HorizontalGallery() {
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);
  const [slides, setSlides] = useState(Array.from({ length: 5 }));
  let target = 0;
  let current = 0;
  const ease = 0.075;
  let maxScroll;

  useEffect(() => {
    const slider = sliderRef.current;
    const wrapper = wrapperRef.current;
    if (!slider || !wrapper) return;

    maxScroll = wrapper.offsetWidth / 2;

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function updateScaleAndPosition() {
      const slideElements = wrapper.querySelectorAll(".hg-slide");
      slideElements.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const centerPosition = (rect.left + rect.right) / 2;
        const distanceFromCenter = centerPosition - window.innerWidth / 2;
        let scale, offsetX;
        if (distanceFromCenter > 0) {
          scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth);
          offsetX = (scale - 1) * 300;
        } else {
          scale = Math.max(0.5, 1 - Math.abs(distanceFromCenter) / window.innerWidth);
          offsetX = 0;
        }
        gsap.set(slide, {
          scale: scale,
          x: offsetX,
        });
      });
    }

    function update() {
      current = lerp(current, target, ease);
      if (target >= maxScroll) {
        target -= maxScroll;
        current -= maxScroll;
      } else if (target <= 0) {
        target += maxScroll;
        current += maxScroll;
      }
      gsap.set(wrapper, { x: -current });
      updateScaleAndPosition();
      requestAnimationFrame(update);
    }

    window.addEventListener("resize", () => {
      maxScroll = wrapper.offsetWidth / 2;
    });

    window.addEventListener("wheel", (e) => {
      target += e.deltaY;
    });

    update();
  }, []);

  return (
    <div className="hg-body" ref={sliderRef}>
      <div className="hg-slider">
        <div className="hg-slider-wrapper" ref={wrapperRef}>
          {[...slides, ...slides].map((_, index) => (
            <div key={index} className="hg-slide">
              <img src={`/src/assets/gallery/img${(index) % (slides.length)}.jpg`} alt="slide" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalGallery;