import React, { Component } from "react";
import { Page, Card, Button, Thumbnail, AppProvider, PageActions, Heading, ButtonGroup } from '@shopify/polaris';
import APIService from '../packs/api';
import Grid from './Grid';

class Sections extends Component {
    constructor(props) {
        super(props);
        // console.log('props', props);
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
                <ButtonGroup>
                    <Button icon="arrowLeft" onClick={this.gotoCollections.bind(this)} className="gridContainerButton">Back</Button>
                    <Button primary onClick={this.gotoCollections.bind(this)}>Save</Button>
                </ButtonGroup>
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
