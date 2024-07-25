import Lottie from 'react-lottie-player'
import paymentPreparation1Lottie from '../../assets/lotties/paymentPreparationPart1.json'
import paymentPreparation2Lottie from '../../assets/lotties/paymentPreparationPart2.json'
import pennyTesting1Lottie from '../../assets/lotties/pennyTestingPart1.json'
import pennyTesting2Lottie from '../../assets/lotties/pennyTestingPart2.json'
import { Fragment, useEffect, useRef, useState } from 'react'
import stl from './HomePageAnimation.module.scss'
import EmbeddedForms from "./EmbeddedForms/EmbeddedForms";

const transitionDuration = 500

export const Stages = {
    INITIAL: 0,
    PAYMENT_PREPARATION_1: 1,
    PAYMENT_PREPARATION_2: 2,
    PENNY_TESTING_1: 3,
    PENNY_TESTING_2: 4,
    EMBEDDED_FORMS: 5,
}

function HomePageAnimation({ stage }) {
    const [currentStage, setCurrentStage] = useState(stage)
    const initialRef = useRef()
    const paymentPreparation1Ref = useRef()
    const paymentPreparation2Ref = useRef()
    const pennyTesting1Ref = useRef()
    const pennyTesting2Ref = useRef()


    const runStage = (stage) => {
        if (stage === Stages.INITIAL) {
            return
        }
        if (stage === Stages.PAYMENT_PREPARATION_1) {
            paymentPreparation1Ref.current.goToAndStop(0)
            return setTimeout(() => {
                paymentPreparation1Ref.current.goToAndPlay(0)
            }, transitionDuration)
        }
        if (stage === Stages.PAYMENT_PREPARATION_2) {
            paymentPreparation2Ref.current.goToAndStop(0)
            return setTimeout(() => {
                paymentPreparation2Ref.current.goToAndPlay(0)
            }, transitionDuration)
        }
        if (stage === Stages.PENNY_TESTING_1) {
            pennyTesting1Ref.current.goToAndStop(0)
            return setTimeout(() => {
                pennyTesting1Ref.current.goToAndPlay(0)
            }, transitionDuration)
        }
        if (stage === Stages.PENNY_TESTING_2) {
            pennyTesting2Ref.current.goToAndStop(0)
            return setTimeout(() => {
                pennyTesting2Ref.current.goToAndPlay(0)
            }, transitionDuration)
        }
        if (stage === Stages.EMBEDDED_FORMS) {
            return;
        }
        console.warn('Unknown stage:', stage)
    }

    useEffect(() => {
        runStage(currentStage)
    }, [currentStage])

    useEffect(() => {
        if (stage !== currentStage) {
            setCurrentStage(stage)
        }
    }, [stage])

    return (
        <Fragment>
            <Lottie
                ref={paymentPreparation1Ref}
                animationData={paymentPreparation1Lottie}
                className={`${stl.content} ${(currentStage === Stages.PAYMENT_PREPARATION_1 || currentStage === Stages.INITIAL) ? '' : stl.hidden}`}
                loop={false}
                play={false}
            />
            <Lottie
                ref={paymentPreparation2Ref}
                animationData={paymentPreparation2Lottie}
                className={`${stl.content} ${currentStage === Stages.PAYMENT_PREPARATION_2 ? '' : stl.hidden}`}
                loop={false}
                play={false}
            />
            <Lottie
                ref={pennyTesting1Ref}
                animationData={pennyTesting1Lottie}
                className={`${stl.content} ${currentStage === Stages.PENNY_TESTING_1 ? '' : stl.hidden}`}
                loop={false}
                play={false}
            />
            <Lottie
                ref={pennyTesting2Ref}
                animationData={pennyTesting2Lottie}
                className={`${stl.content} ${currentStage === Stages.PENNY_TESTING_2 ? '' : stl.hidden}`}
                loop={false}
                play={false}
            />
            <div
                className={`${stl.content} ${currentStage === Stages.EMBEDDED_FORMS ? '' : stl.hidden}`}
            >
                <EmbeddedForms />
            </div>
        </Fragment>
    )
}

export default HomePageAnimation
