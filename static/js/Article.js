function loadArticle() {
  $.get("../articles/article-" + pageNumber + ".json").then(function(article){
    var obj = JSON.stringify(article1);
    displayArticle1(obj);
    console.log(obj);
    return $.get("../articles/article-2.json");
  }).then(function(article2){
    console.log(article2);
  });
}

function displayArticle1(article1){
  var article1 = JSON.parse(article1);
  document.getElementById("showArticle").innerHTML = `
    <h1 class="app-title">${article1.title}</h1>
    ${article1.body.map(function(article){
      return `
        <div class="article">
        </div>
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

function displayHeading(header) {
  
}

function displayParagraph(paragraph) {
  
}

function displayImage(image) {
  
}

function displayList(list) {
  
}