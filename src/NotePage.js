import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class NotePage extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.routerProps.history.goBack();
  }

  render() {
    // console.log(this.props.routerProps.match.params.NotesPreview)
    let route = this.props.routerProps.match.params.NotesPreview
    // console.log(this.props.routerProps.history.goBack())
    let note = this.props.notes;

    // let second = first.id;
    // let entry = this.props.notes.filter(function (el) {
    //   return el.id === route;
    // });
    const entry = note.find(el => el.id === route)
    let val = '';
    if (entry) {
      console.log(entry);
      val = entry;
    } else {
      console.log('entry is undefined')
    }

    // console.log(entry);

    // let displayedNote = entry[0].content;

    // const item = this.props.notes.filter(note => notes.folderId === folderId);
    return (
      <div className="App">
        <div className="title">
          <Link to={`/HomePage`}><h1>Noteful</h1></Link>
        </div>
        {/* <p>{this.props.notes}</p> */}
        {/* {displayedNote} */}
        {/* {entry} */}
        {/* {note.filter(el => note.id === route)} */}
        {/* <p>{entry.content}</p> */}
        {/* <div className="notesDisplayed"> */}
        {val.content}
        <button onClick={this.goBack}>Go Back</button>
      </div>
      // </div>
    )
  }
}

export default NotePage;