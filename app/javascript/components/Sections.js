import React from "react";
import { Page, Card, Button, Thumbnail, AppProvider, PageActions, Heading } from '@shopify/polaris';

export default function Sections({ props }) {
    console.log('props', props)
    return (
        <Page title="Collections">

            {props.collections.map((collection, index) => (
                <Card key={index}
                    // title={collection.title}
                    // primaryFooterAction={{
                    //     content: 'View',
                    //     url: 'https://${shop_session.url}/admin/collection/${collection.id}',
                    // }}
                    sectioned
                >
                 <div className="sectionHeading">
                    <a href={`https://${props.shop_session.url}/admin/collection/${collection.id}`} className="sectionLink">
                        <img src={collection.image.src} className="collectionImage" />
                        <Heading>{collection.title}</Heading>
                    </a>
                    </div>
                </Card>
            ))}
        </Page>
    );
}
