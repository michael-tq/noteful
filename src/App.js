import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NotesPreview from './NotesPreview';
import HomePage from './HomePage';
import FolderId from './FolderId';
import data from './dummy-store';
import FolderItem from './FolderItem';
import NotePage from './NotePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: []
    };
    // this.filterNote = this.filterNote.bind(this)
  }

  // filterNote(folderId) {
  //   console.log('qwewerwet')
  //   const item = this.state.notes.filter(note => note.folderId === folderId);
  //   console.log(item)
  // }

  componentDidMount() {
    this.setState({ notes: data.notes, folders: data.folders });
    // console.log(this.state, 'sfd')
  }

  render() {
    return (
      <main className="App">
        <Route
          exact path='/'
          render={() =>
            <HomePage
              notes={this.state.notes}
            />
          }
        />
        <Route
          exact path='/Homepage'
          render={() =>
            <HomePage
              notes={this.state.notes}
            />
          }
        />
        <Route
          path='/note/:NotesPreview'
          // component={NotePage}
          render={(routerProps) =>
            <NotePage
              notes={this.state.notes}
              routerProps={routerProps}
            />
          }
        />
        <Route
          path='/folder/:FolderId'
          render={(routerProps) =>
            <FolderId
              routerProps={routerProps}
              notes={this.state.notes}
            />
          }
        />
        <div className="folders">
          {this.state.folders.map((item, key) =>
            // <FolderItem item={item} key={item.id} filterNote={this.filterNote} />
            <FolderItem item={item} key={item.id} />
          )}
        </div>
      </main>
    );
  }
}
export default App;
