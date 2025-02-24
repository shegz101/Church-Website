import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  texts: string[];
  styling?: string;
  typingSpeed?: number;
  pauseDuration?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  styling = "",
  typingSpeed = 100,
  pauseDuration = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [textIndex, setTextIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: any | null = null; // Explicitly type timeout

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed / 2);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, pauseDuration]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <p className={`${styling} flex items-center`}>
      {displayedText}
      <span
        className="ml-1"
        style={{ visibility: showCursor ? "visible" : "hidden" }}
      >
        |
      </span>
    </p>
  );
};

export default TypeWriter;
