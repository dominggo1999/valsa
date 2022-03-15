import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  LoadingTransitionWrapper, LoadingCardWrapper, LoadingCard, Mask,
} from './LoadingTransition.style';
import { rand } from '../../util/random';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const numOfChar = 5;
const finalWord = 'valsa';

const scrambleStrings = () => {
  let result = '';

  for (let i = 0; i < numOfChar; i += 1) {
    const id = rand(alphabet.length - 1);
    result += alphabet[id];
  }

  return result;
};

const initialText = scrambleStrings();

const LoadingTransition = () => {
  const [text, setText] = useState(initialText);
  const scrambleTimerRef = useRef();
  const loadingTimerRef = useRef();
  const cardRef = useRef();
  const wrapperRef = useRef();
  const maskRef = useRef();
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    gsap.to(wrapperRef.current, {
      y: '-100%',
      delay: 2.9,
      duration: 0.55,
    });

    gsap.to(maskRef.current, {
      y: '-100%',
      delay: 3.18,
      duration: 0.45,
      onComplete: () => {
        setAnimationFinished(true);
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      {
        scale: 2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.7,
      });

    scrambleTimerRef.current = setInterval(() => {
      const newWord = scrambleStrings();
      setText(newWord);
    }, 60);

    loadingTimerRef.current = setTimeout(() => {
      setText(finalWord);
      clearInterval(scrambleTimerRef.current);
    }, 1200);

    return () => {
      clearInterval(scrambleTimerRef.current);
      clearInterval(loadingTimerRef.current);
    };
  }, []);

  if(animationFinished) return null;

  return (
    <>
      <LoadingTransitionWrapper ref={wrapperRef}>
        <LoadingCardWrapper>
          <LoadingCard ref={cardRef}>
            {text}
          </LoadingCard>
        </LoadingCardWrapper>
      </LoadingTransitionWrapper>
      <Mask ref={maskRef} />
    </>
  );
};

export default LoadingTransition;
