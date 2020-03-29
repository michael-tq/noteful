import React, {Component} from 'react';

class FolderId extends Component {
  click() {
    console.log(this.props.item.id);
    console.log(this.props.filterNote(this.props.item.id));
  }
  render() {
    console.log('folderpage')
    console.log()
   return (
    <main className="App">
        <h1>HomePage</h1>       
    </main>
   );
  }
}

export default FolderId;

