import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';

function ScrollToTop() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350) {
        scrollRef.current?.classList.add('show-scroll');
      } else {
        scrollRef.current?.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a href="#" className="scrollup w-14 h-14 rounded-full fixed z-[1000] right-4 bottom-[-50%] bg-[var(--footer-bg)] shadow-[0_4px_12px_hsla(0,0%,0%,0.2)] text-[var(--text-color)] flex justify-center items-center px-1.5 py-1 text-[1.5rem] transition-[bottom,transform] duration-400 hover:-translate-y-1.5" id="scrollup" ref={scrollRef}>
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
}

export default ScrollToTop;

