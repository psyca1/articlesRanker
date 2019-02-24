const ratings = {
  article1: 4.7,
  article2: 3.4,
  article3: 2.3,
  article4: 3.6,
  article5: 4.1
}

const starsTotal = 5;

let article;

const articleSelector = document.getElementById('articleSelect');
const ratingSelector = document.getElementById('ratingSelect');
const loadArticle = document.getElementById('loadArticleButton');


articleSelector.addEventListener('change', (e) => {
  product = e.target.value;
  ratingSelector.disabled=false;
  ratingSelector.value = ratings[article];
});

ratingSelector.addEventListener('blur', (e) => {
  const rating = e.target.value;

  if (rating > 5) {
    alert('Please provide a valid rating between 1-5.');
    return;
  }

  ratings[article] = rating; 
});

function disableButton(buttonAction){
  if(buttonAction.id=='loadArticleButton'){
     buttonAction.disabled=true;
  }
}

/*window.onload = function(){
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
}*/


function displayArticle1() {
  document.getElementById("showArticle").innerHTML = `Hello, ${1} article is being displayed.`;
}

function submitRating(){
}