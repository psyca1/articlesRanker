

var page = 1;
const pageCount = 5;

window.onload = function(){
  $.get("../articles/article-1.json").then(function(article1){
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
}


function displayArticle1() {
  document.getElementById("showArticle").innerHTML = `Hello, ${1} article is being displayed.`;
}