import React from "react";
import { Card, Thumbnail, Heading } from "@shopify/polaris";

export default function Product(props) {
    const item = props.item;
    return (
        <div className="productItem">
            <Card sectioned>
                <div className="productContainer">
                    <img src={item.image.src} className="productImage" />
                    <p className="productDescription">{item.title}</p>
                    {/* <Heading>{item.title}</Heading> */}
                </div>
            </Card>
        </div>
    );
}
