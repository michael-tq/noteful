import React, { Component } from 'react';

class Item extends Component {
  click() {
    // console.log(this.props.item.id);
    this.props.filterNote(this.props.item.id);
  }
  render() {
    return (
      <div>
        <button className="noteItem" onClick={() => this.click()}>{this.props.item.name}</button>
      </div>
    )
  }
}

export default Item;