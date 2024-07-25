import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import ProductPageCover from '../../components/ProductPageCover/ProductPageCover'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import SeeAlso from '../../components/SeeAlso/SeeAlso'
import Footnotes from '../../components/Footnotes/Footnotes'
import Footer from '../../components/Footer/Footer'
import {productPagesContent} from "../../constants";
import PennyTestingIllustration from "../../components/PennyTestingIllustration/PennyTestingIllustration";

function PennyTesting() {
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

export default PennyTesting
