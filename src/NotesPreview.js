import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

class NotesPreview extends Component {
  render() {
    // console.log(this.props)
    let noteId = this.props.id;
    // console.log(this.props)
    let notes = this.props.itemcontent;
    return (
      <main className="App">
        {/* <Link to="NotePage" className="displayedNotes" >{this.props.itemName}</Link> */}
        {/* <div className="collectedNotes">
          <div className="notesDisplayed"> */}
        <NavLink to={`/note/${noteId}`} itemcontent={this.props.itemContent} noteid={this.props.id}>{this.props.itemName}</NavLink>
        {/* </div>
        </div> */}
      </main>
    );
  }
}
export default NotesPreview;



///make notes selectable
///back button
///homepage should have first folder open as default
///css,   get rid of list of folders at bottom of every page


