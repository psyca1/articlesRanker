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
  if(buttonAction.id==loadArticleButton){
     buttonAction.disabled=true;
  }
  checkPageButton(2);
}

/*function nextPageButton() {
  pageNumber++;
  if (pageNumber!=5){
    nextButton.disabled=false;
  } else {
    nextButton.disabled=true;
  }
}

function previousPageButton() {
  pageNumber--;
  if (pageNumber!=1){
    previousButton.disabled=false;
  } else {
    previousButton.disabled=true;
  }
}*/

function checkPageButton(changePage) {
  if(changePage==1){
    pageNumber++;
  } else if (changePage==0) {
    pageNumber--;
  } else {
    console.log(pageNumber);
  }
  
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