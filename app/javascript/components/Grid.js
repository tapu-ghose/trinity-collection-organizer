import React, { Component } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

import Product from "./Product";

class Grid extends Component {
  constructor(props) {
    super(props);
    console.log('props2', props);
    this.state = {
      items: props.items
    };
  }
  render() {
    const SortableItem = SortableElement(({ value }) => (
      <Product item={value} />
    ));

    const SortableList = SortableContainer(({ items }) => {
      return (
        <div className="listContainer">
          {items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} value={value} />
          ))}
        </div>
      );
    });

    return (
      <SortableList
        items={this.state.items}
        onSortEnd={this.onSortEnd}
        axis={"xy"}
      />
    );
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
    console.log("Items:", this.state.items);
  };
}

export default Grid;
