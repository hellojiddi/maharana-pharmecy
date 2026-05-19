import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useCountUp(end: number, duration: number = 1.5, suffix: string = '') {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { value: 0 };

    const tween = gsap.to(obj, {
      value: end,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        setDisplayValue(Math.round(obj.value).toLocaleString() + suffix);
      },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        onEnter: () => {
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            tween.play();
          }
        },
      },
    });

    tween.pause();

    return () => {
      tween.kill();
    };
  }, [end, duration, suffix]);

  return { ref, displayValue };
}
