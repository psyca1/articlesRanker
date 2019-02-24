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
    ${article1.body.map(function(article){
      return `${article.type}
      `
  })}
  `;
}

function displayArticle2() {
  document.getElementById("showArticle").innerHTML = ``;
}

function displayArticle3() {
  document.getElementById("showArticle").innerHTML = ``;
}

function displayArticle4() {
  document.getElementById("showArticle").innerHTML = ``;
}

function displayArticle5() {
  document.getElementById("showArticle").innerHTML = ``;
}