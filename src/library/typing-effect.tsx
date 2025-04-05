"use client";

import React, { useEffect, useState, ReactNode } from "react";

interface TypingEffectProps {
  text: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState<ReactNode[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textArray = text.split(""); // Split into characters for typing effect

    if (index < textArray.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => [...prev, textArray[index]]);
        setIndex(index + 1);
      }, 20); // Adjust time delay for typing speed
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return (
    <div className="whitespace-pre-wrap">
      {displayedText.map((char, i) => (char === "\n" ? <br key={i} /> : char))}
    </div>
  );
};

export default TypingEffect;
