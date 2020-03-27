import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import NoteId from './NoteId';
import HomePage from './HomePage';
import FolderId from './FolderId';
import data from './dummy-store';
import FolderItem from './FolderItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: []
    };
    this.filterNote = this.filterNote.bind(this)
  }

  filterNote(folderId) {
    // console.log(this.state.notes[0].id, folderId);
    const item = this.state.notes.filter(note => note.folderId === folderId);
    console.log(item)
    
  }

  componentDidMount() {
    this.setState({ notes: data.notes, folders: data.folders });
    console.log(this.state)
  }
  render() {
    // console.log(Array.isArray(this.state.notes));
    // let note = this.state.notes.map((item, index) => 
    //   <li key={index}>{item}</li>)
    return (
      <main className="App">
        {/* <ul>
        {note}
      </ul> */}
        <Route
          exact path='/'
          component={ HomePage }
        />
      {this.state.folders.map((item, key) => 
        <FolderItem item={item} key={item.id} filterNote={this.filterNote} />
      )}
        <Route
          path='/note/:NoteId'
          component={ NoteId }
        />
        <Route 
          path='/note/:FolderId'
          component={ FolderId }

        />
      </main>
    );
  }
}
export default App;
