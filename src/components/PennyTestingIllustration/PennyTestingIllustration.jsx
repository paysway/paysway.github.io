import stl from "./PennyTestingIllustration.module.scss";
import pennyTestingFullLottie from "../../../public/lotties/pennyTestingFull.json";
import Lottie from "react-lottie-player";
import React, { useRef, useState } from "react";

const initialFrame = 45;
const playFrom = 45;

function PennyTestingIllustration() {
  const boxRef = useRef();
  const lottieRef = useRef();
  const [playedOnce, setPlayedOnce] = useState(false);

  const observe = () => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!playedOnce) {
            setTimeout(() => lottieRef.current.goToAndPlay(playFrom, true), 2000);
            setPlayedOnce(true);
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: [0.5],
      },
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }
  };

  return (
    <div className={stl.mainBox} ref={boxRef}>
      <Lottie
        ref={lottieRef}
        animationData={pennyTestingFullLottie}
        loop={false}
        play={false}
        onLoad={observe}
        goTo={initialFrame}
      />
    </div>
  );
}

export default PennyTestingIllustration;
