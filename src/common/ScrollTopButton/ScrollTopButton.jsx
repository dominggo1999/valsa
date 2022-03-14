import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { animateScroll } from 'react-scroll';
import { ScrollTopButtonWrapper } from './ScrollTopButton.style';

const ScrollTopButton = () => {
  const [display, setDisplay] = useState(false);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 1800,
      smooth: 'easeInOutQuint',
    });
  };

  useEffect(() => {
    const watchAnchor = () => {
      const anchor = document.getElementById('scroll-top-anchor');
      const { top } = anchor.getBoundingClientRect();
      if(top <= 0) {
        setDisplay(true);
      }else{
        setDisplay(false);
      }
    };

    // on first render
    watchAnchor();

    window.addEventListener('scroll', watchAnchor);
    return () => {
      window.removeEventListener('scroll', watchAnchor);
    };
  }, []);

  return (
    <ScrollTopButtonWrapper
      className={display ? 'display' : null}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp />
    </ScrollTopButtonWrapper>
  );
};

export default ScrollTopButton;
