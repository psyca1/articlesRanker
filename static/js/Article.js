function loadArticle() {
  $.get("../articles/article-" + pageNumber + ".json").then(function(article){
    var obj = JSON.stringify(article);
    switch (pageNumber){
    case 1:
      displayArticle1(obj);
      break;
    case 2:
      displayArticle2(obj);
      break;
    case 3:
      displayArticle3(obj);
      break;
    case 4:
      displayArticle4(obj);
      break;
    case 5:
      displayArticle5(obj);
      break;
  }
  });
  
  if (pageNumber!=5){
    $.get("../articles/article-" + (pageNumber + 1) + ".json").then(function(article){
    var obj1 = JSON.stringify(article);
    console.log("Next Article Data: \n" + obj1);
  });
  }
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