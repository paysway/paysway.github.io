import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import ProductPageCover from '../../components/ProductPageCover/ProductPageCover'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import SeeAlso from '../../components/SeeAlso/SeeAlso'
import Footnotes from '../../components/Footnotes/Footnotes'
import Footer from '../../components/Footer/Footer'
import { productPagesContent } from '../../constants'
import PaymentPreparationIllustration from "../../components/PaymentPreparationIllustration/PaymentPreparationIllustration";

function PaymentPreparation() {
    return (
        <Fragment>
            <Header />
            <ProductPageCover content={productPagesContent.paymentPreparation.cover}/>
            <ProductDescription content={productPagesContent.paymentPreparation.description}>
                <PaymentPreparationIllustration />
            </ProductDescription>
            <SeeAlso otherProducts={productPagesContent.paymentPreparation.seeAlso}/>
            <Footnotes notes={[productPagesContent.paymentPreparation.footnote]}/>
            <Footer />
        </Fragment>
    )
}

export default PaymentPreparation
