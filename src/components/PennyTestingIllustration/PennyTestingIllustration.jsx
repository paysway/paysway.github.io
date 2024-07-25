import stl from './PennyTestingIllustration.module.scss'
import pennyTestingFullLottie from "../../assets/lotties/pennyTestingFull.json";
import Lottie from "react-lottie-player";
import React, {useEffect, useRef} from "react";

const initialFrame = 45;
const playFrom = 10;


function PennyTestingIllustration() {
    const boxRef = useRef();
    const lottieRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    lottieRef.current.goToAndPlay(playFrom, true);
                }
            },
            {
                threshold: 1
            }
        );
        if (boxRef.current) observer.observe(boxRef.current);
        return () => {
            if (boxRef.current) observer.unobserve(boxRef.current);
        };
    }, [boxRef, lottieRef]);


    return (
        <div className={stl.mainBox} ref={boxRef}>
            <Lottie
                ref={lottieRef}
                animationData={pennyTestingFullLottie}
                loop={false}
                play={false}
                goTo={initialFrame}
            />
        </div>
    )
}

export default PennyTestingIllustration
