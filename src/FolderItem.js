import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Item extends Component {
  // click() {
  //   console.log(this.props.item.id);
  //   console.log(this.props.filterNote(this.props.item.id));
  // }
  render() {
    const folderdid = this.props.item.id;
    return (      
      <div>
        {/* <NavLink to={`/folder/${folderId}`} className="noteItem">{this.props.item.name}</NavLink> */}
        {/* <Link to='/folder/:FolderId'>{this.props.item.name}</Link> */}
        <Link to={`/folder/${folderId}`} folderid={folderid} className="noteItem">{this.props.item.name}</Link>
        
      </div>
    )
  }
}

export default Item;