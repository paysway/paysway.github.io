'use client'
import '../../globals.css'
import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
const Header = dynamic(() => import('../../../components/Header/Header'), {ssr:false});
const ProductPageCover = dynamic(() => import("../../../components/ProductPageCover/ProductPageCover"), {ssr:false});
const ProductDescription = dynamic(() => import("../../../components/ProductDescription/ProductDescription"), {ssr:false});
const PennyTestingIllustration = dynamic(() => import("../../../components/PennyTestingIllustration/PennyTestingIllustration"), {ssr:false});
const SeeAlso = dynamic(() => import("../../../components/SeeAlso/SeeAlso"), {ssr:false});
const Footnotes = dynamic(() => import("../../../components/Footnotes/Footnotes"), {ssr:false});
const Footer = dynamic(() => import("../../../components/Footer/Footer"), {ssr:false});
import {productPagesContent} from "../../../constants";


function Page() {
    return (
        <Fragment>
            <Header/>
            <ProductPageCover content={productPagesContent.pennyTesting.cover}/>
            <ProductDescription content={productPagesContent.pennyTesting.description}>
                <PennyTestingIllustration/>
            </ProductDescription>
            <SeeAlso otherProducts={productPagesContent.pennyTesting.seeAlso}/>
            <Footnotes notes={[productPagesContent.pennyTesting.footnote]}/>
            <Footer />
        </Fragment>
    )
}

export default Page
