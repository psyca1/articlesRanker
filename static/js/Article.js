/*'use strict';

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
ReactDOM.render(e(Articles), domContainer);*/
/*
window.onload = function(){
  $.get("../articles/article-1.json").then(function(article1){
    console.log(article1.title);
    console.log(article1);
    return $.get("../articles/article-2.json");
  }).then(function(article2){
    console.log(article2);
    return $.get("../articles/article-3.json");
  }).then(function(article3){
    console.log(article3);
    return $.get("../articles/article-4.json");
  }).then(function(article4){
    console.log(article4);
    return $.get("../articles/article-5.json");
  }).then(function(article5){
    console.log(article5);
  });
}*/

function loadArticle1() {
  $.get("../articles/article-1.json").then(function(article1){
    var obj = JSON.stringify(article1);
    displayArticle1(obj);
    console.log(obj);
    return $.get("../articles/article-2.json");
  }).then(function(article2){
    console.log(article2);
  });
  /*document.getElementById("showArticle").innerHTML = `
    <h1 class="app-title"> </h1>
  `;*/
}

function displayArticle1(article1){
  var article1 = JSON.parse(article1);
  document.getElementById("showArticle").innerHTML = `
    <h1 class="app-title">${article1.title}</h1>
  `;
}

function displayArticle2() {
  document.getElementById("showArticle").innerHTML = ``;
}