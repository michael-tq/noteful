import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Item extends Component {
  click() {
    console.log(this.props.item.id);
    this.props.filterNote(this.props.item.id);
  }
  render() {
    const folderId = this.props.item.id;
    return (      
      <div>
        <NavLink to={`/folder/${folderId}`} className="noteItem">{this.props.item.name}</NavLink>
      </div>
    )
  }
}

export default Item;