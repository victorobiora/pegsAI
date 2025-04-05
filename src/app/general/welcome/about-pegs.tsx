import { useRef, useEffect, useState } from "react";

const AboutPegsAI = () => {
  const [slideAnimation, setSlideAnimation] = useState<boolean>(false);

  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSlideAnimation(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <section className="flex justify-center" id="AboutPegsAI">
      <div
        className={`w-[70%] md:w-[40%] mt-10 ${
          slideAnimation && "animate-slideInAndBounce"
        }`}
      >
        <h1 className="text-[4rem] font-bold italic my-5 text-center drop-shadow-lg" >
         <span className="text-orange-500">
            Pegs
         </span><span className="text-blue-400">
            AI
         </span>
        </h1>

        <ul className={`flex flex-wrap w-full justify-center text-lg font-bold text-white italic `} ref={divRef}>
        PegsAi is the only link joining the natural order of humanity + meme + AI by the use of decentralized networks to create new, self-sustaining economies.
        </ul>
      </div>
    </section>
  );
};

export default AboutPegsAI;
