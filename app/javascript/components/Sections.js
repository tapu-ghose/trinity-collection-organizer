import React, { Component } from "react";
import { Page, Card, Button, Thumbnail, AppProvider, PageActions, Heading } from '@shopify/polaris';
import APIService from '../packs/api';
import Grid from './Grid';

class Sections extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);
        this.state = {
            collection: null
        };
    }

    render() {
        return (
            this.state.collection == null ? this.renderCollections() : this.renderProducts()
        );
    }

    renderCollections() {
        return (
            <Page title="Collections">
                {this.props.props.collections.map((collection, index) => (
                    <Card key={index}
                        sectioned
                    >
                        <div className="sectionHeading" onClick={() => this.gotoProducts(collection)}>
                            <img src={collection.img} className="collectionImage" />
                            <Heading>{collection.title}</Heading>
                        </div>

                    </Card>
                ))}
            </Page>
        )
    }

    renderProducts() {
        return (
            <div className="gridContainer">
                <Button icon="arrowLeft" onClick={this.gotoCollections.bind(this)} className="gridContainerButton">Back</Button>
                <Grid items={this.state.collection.products} />
            </div>

            // <div>List of products here... <div }> go back </div> </div>
        )
    }

    gotoProducts(collection) {
        this.setState({ collection });
    }

    gotoCollections() {
        this.setState({ collection: null });
    }

}

export default Sections;


{/* <Page title="Collections">

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
</Page> */}