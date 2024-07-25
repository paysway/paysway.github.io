import stl from './HomePageProductsList.module.scss'
import HomePageProductsListItem from '../HomePageProductsListItem/HomePageProductsListItem'
import HomePageAnimation, {
    Stages,
} from '../HomePageAnimation/HomePageAnimation'
import React, { useEffect, useRef, useState } from 'react'
import { productsListContent } from '../../constants'

const factor = 0.75

const resolveBreakpoints = (items) => {
    return items.current.flatMap((item, index, arr) => {
        const offsetTop = item.offsetTop
        if (index < arr.length - 1) {
            const nextOffsetTop = arr[index + 1].offsetTop
            return [offsetTop, (offsetTop + nextOffsetTop) / 2]
        } else {
            return [offsetTop]
        }
    })
}

const resolveAnimationStage = (breakpoints) => {
    const isMobile = window.innerWidth <= 700
    const freeHeight = isMobile
        ? window.innerHeight - window.innerWidth // on mobiles, we have a sticky animation container at the bottom
        : window.innerHeight
    const pointer =  window.scrollY + freeHeight * factor
    return breakpoints.filter((y) => pointer > y).length
}

function HomePageProductsList() {
    const [currentBreakpoints, setCurrentBreakpoints] = useState([])
    const [animationStage, setAnimationStage] = useState(Stages.INITIAL)
    const items = useRef([])

    useEffect(() => {
        const handleScroll = () => {
            const number = resolveAnimationStage(currentBreakpoints)
            setAnimationStage(number)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [currentBreakpoints])

    useEffect(() => {
        const handleResize = () => {
            const newBreakpoints = resolveBreakpoints(items)
            setCurrentBreakpoints(newBreakpoints)
            setAnimationStage(resolveAnimationStage(newBreakpoints))
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [items])

    useEffect(() => {
        setCurrentBreakpoints(resolveBreakpoints(items))
    }, [items])

    return (
        <section id="productsList">
            <div className={stl.sectionBox}>
                <div className={stl.mainBox}>
                    <h2 className={stl.header}>Products</h2>
                    <div className={stl.productsListBox}>
                        <div className={stl.list}>
                            {productsListContent.map((product, idx) => {
                                return (
                                    <div
                                        ref={(el) => (items.current[idx] = el)}
                                    >
                                        <HomePageProductsListItem
                                            content={product}
                                        ></HomePageProductsListItem>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={stl.animationBox}>
                            <div className={stl.animationContent}>
                                <HomePageAnimation stage={animationStage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageProductsList
