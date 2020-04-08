import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NotesPreview from './NotesPreview';

class FolderId extends Component {
<<<<<<< HEAD
  click() {
    console.log(this.props.item.id);
    console.log(this.props.filterNote(this.props.item.id));
  }
=======

>>>>>>> temp
  render() {
    // console.log('folderpage', this.props.routerProps) 
    // console.log(this.props.notes)
    // elements={this.props.notes.find(note => note.folderId === folders.match.params.id)}
    //folderId = //find folder id
    // console.log(this.props.notes.folderId)
    const folderId = this.props.routerProps.match.params.FolderId;
    // console.log(this.props.routerProps)
    const notes = this.props.notes.filter(note => note.folderId === folderId)
    // console.log(notes)
    return (
      <main className="App">
        <div className="title">
          <Link to={`/HomePage`}><h1>Noteful</h1></Link>
        </div>
        {notes.map((item, key) => {
          // console.log(item.id, key)
          return <NotesPreview key={item.id} id={item.id} itemName={item.name} itemcontent={item.content}></NotesPreview>
        }
          //note component should be here
        )}
        {/* <NavLink to={`/note/${noteId}`} className="noteItem">{notes}</NavLink> */}
      </main>
    );
  }
}

export default FolderId;
