import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Route } from 'react-router-dom'
import NotesPreview from './NotesPreview';

class HomePage extends Component {
  render() {
    console.log(this.props.notes)
    return (
      <main className="App">
        <div className="title">
          <Link to={`/HomePage`}><h1>Noteful</h1></Link>
        </div>
        <div className="initialsNotes">
          {this.props.notes.map((item, key) => {
            // console.log(item.id, key)
            return <NotesPreview key={item.id} id={item.id} itemName={item.name} itemcontent={item.content}></NotesPreview>
          })}
        </div>
      </main>
    );
  }
}
export default HomePage;

// {
//   notes.map((item, key) => {
//     // console.log(item.id, key)
//     return <NotesPreview key={item.id} id={item.id} itemName={item.name} itemcontent={item.content}></NotesPreview>
//   })
// }