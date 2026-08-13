"use client";

import { useEffect, useState, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function CountUp({ end, duration = 2, suffix = '', prefix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toString());
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
