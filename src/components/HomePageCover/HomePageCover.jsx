import React, { useEffect, useRef } from 'react'
import stl from './HomePageCover.module.scss'
import officeBuildingAnimation from '../../../public/lotties/officeBuilding.json'
import Lottie from 'react-lottie-player'
import officeBuilding from '../../../public/images/officeBuilding.webp'
import Image from 'next/image'

const initialFrame = 50;
const playFrom = 50;

function HomePageCover() {

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
        <section id="cover">
            <div className={stl.sectionBox}>
                <div className={stl.mainBox}>
                    <div className={stl.textBox}>
                        <h1 className={stl.title}>
                            Radically improve bank payments
                        </h1>
                        <p className={stl.subtitle}>
                            Ensure successful transfers, enhance user experience, and minimize maintenance with our range of APIs and SDKs.
                        </p>
                    </div>
                    <div className={stl.officeBuildingBox} ref={boxRef} >
                        <Image fill={true} src={officeBuilding} alt="office building" />
                        <Lottie
                            ref={lottieRef}
                            animationData={officeBuildingAnimation}
                            loop={false}
                            play={false}
                            goTo={initialFrame}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageCover
