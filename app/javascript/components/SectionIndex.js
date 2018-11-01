import React from "react";
import {Page, Card, Button, Thumbnail, AppProvider, PageActions} from '@shopify/polaris';
import Grid from './Grid';

export default function SectionIndex(props) {
    return (
            <Page title="Collection Name">
                <PageActions
                    primaryAction={{
                        content: "Save"
                    }}
                    secondaryActions={[
                        {
                            content: "Delete"
                        }
                    ]}
                />
                <Grid products={props.products} />

                {/* {props.products.map((collection, index) => (
    <Card key={index}
      title={collection.title}
      primaryFooterAction={{
        content: 'View',
        url: 'https://${shop_session.url}/admin/collection/${collection.id}',
      }}
      sectioned
    >
        <Thumbnail
          source={collection.images[0].src}
          alt={collection.title}
          size="large"
        />
      
    </Card>   
    ))} */}
            </Page>
    );
}
