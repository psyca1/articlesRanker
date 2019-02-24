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
  if(buttonAction.id==loadArticleButton.id){
    buttonAction.disabled=true;
  } 
  if (buttonAction.id==submitButton.id){
  console.log(buttonAction);
    buttonAction.disabled=true;
    return;
  }
  checkPageButton(2);
}

function checkPageButton(changePage) {
  if(changePage==1){
    pageNumber++;
  } else if (changePage==0) {
    pageNumber--;
  } else {
    console.log("Page number: \n" + pageNumber);
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