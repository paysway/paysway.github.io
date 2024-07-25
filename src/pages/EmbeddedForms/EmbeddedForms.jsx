import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import ProductPageCover from '../../components/ProductPageCover/ProductPageCover'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import SeeAlso from '../../components/SeeAlso/SeeAlso'
import Footnotes from '../../components/Footnotes/Footnotes'
import Footer from '../../components/Footer/Footer'
import {productPagesContent} from "../../constants";
import EmbeddedFormsIllustration from "../../components/EmbeddedFormsIllustration/EmbeddedFormsIllustration";

function EmbeddedForms() {
    return (
        <Fragment>
            <Header />
            <ProductPageCover content={productPagesContent.embeddedForms.cover}/>
            <ProductDescription content={productPagesContent.embeddedForms.description}>
                <EmbeddedFormsIllustration />
            </ProductDescription>
            <SeeAlso otherProducts={productPagesContent.embeddedForms.seeAlso} />
            <Footnotes notes={[productPagesContent.embeddedForms.footnote]}/>
            <Footer />
        </Fragment>
    )
}

export default EmbeddedForms
