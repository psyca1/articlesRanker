/*import React from "react"
import ReactDOM from "react-dom"

class Article extends React.Component {
  render(){
    return(
        <h1>Hello World</h1>
        <button>Increment</button>
    );
  }
}

export default Article*/

'use strict';

const e = React.createElement;

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#showArticle');
ReactDOM.render(e(Articles), domContainer);