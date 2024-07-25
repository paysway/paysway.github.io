import stl from './HomePageProductsListItem.module.scss'
import {Link} from "react-router-dom";

function HomePageProductsListItem({
    content: {
        productName,
        productIcon,
        title,
        description,
        buttonText,
        path,
    },
}) {
    return (
        <div className={stl.productContent}>
            <div className={stl.header}>
                <div className={stl.productNameBox}>
                    <img
                        className={stl.productIcon}
                        src={productIcon}
                        alt={`${productName} icon`}
                    />
                    <h4 className={stl.productName}>{productName}</h4>
                </div>
                <h3 className={stl.title}>{title}</h3>
            </div>
            <p className={stl.productDescription}>{description}</p>
            <Link to={path} className={stl.textDecorationNone}>
                <button className={stl.button}>{buttonText}</button>
            </Link>
        </div>
    )
}

export default HomePageProductsListItem
