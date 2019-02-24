const ratings = {
  article1: 4.7,
  article2: 3.4,
  article3: 2.3,
  article4: 3.6,
  article5: 4.1
}

const starsTotal = 5;

let article;
var pageNumber = 1;

const articleSelector = document.getElementById('articleSelect');
const ratingSelector = document.getElementById('ratingSelect');
const loadArticleButton = document.getElementById('loadArticleButton');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');
const articleSelect = document.getElementById('articleSelect');

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
  /*if(buttonAction.id==loadArticleButton.id){
    buttonAction.disabled=true;
  }*/ 
  if (buttonAction.id==submitButton.id){
  console.log(buttonAction);
    buttonAction.disabled=true;
    return;
  }
  if (articleSelect.value==0){
    changePageButton("article" + pageNumber);
  } else {
    changePageButton(articleSelect.value);
  }
}

function changePageButton(changePage) {
  console.log(changePage);
  switch(changePage){
    case "previous":
      pageNumber--;
      articleSelect.value="article"+pageNumber;
      break;
    case "next":
      pageNumber++;
      articleSelect.value="article"+pageNumber;
      break;
    case "article1":
      pageNumber=1;
      break;
    case "article2":
      pageNumber=2;
      break;
    case "article3":
      pageNumber=3;
      break;
    case "article4":
      pageNumber=4;
      break;
    case "article5":
      pageNumber=5;
      break;
  }
  
  submitButton.disabled=false;
  if (pageNumber==5){
    nextButton.disabled=true;
    previousButton.disabled=false;
  } else if (pageNumber==1){
    nextButton.disabled=false;
    previousButton.disabled=true;
  } else {
    nextButton.disabled=false;
    previousButton.disabled=false;
  }
  
  loadArticle();
}

function submitRating(){
}