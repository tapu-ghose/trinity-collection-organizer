import React from "react";
import { Card, Thumbnail } from "@shopify/polaris";

export default function Product(props) {
    const item = props.item;
    return (
        <div className="productItem">
            <Card title={item.title} sectioned>
                <Thumbnail
                    source={item.image.src}
                    size="large"
                    alt={item.title}
                />
            </Card>
        </div>
    );
}
