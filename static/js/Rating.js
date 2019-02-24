const ratings = {
  article1: 0.0,
  article2: 0.0,
  article3: 0.0,
  article4: 0.0,
  article5: 0.0
}

let article;
var pageNumber = 1;

const articleSelect = document.getElementById('articleSelect');
const ratingSelect = document.getElementById('ratingSelect');
const loadArticleButton = document.getElementById('loadArticleButton');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');

function checkArticleSelection() {
  article = articleSelect.value;
  ratingSelect.disabled = false;
  ratingSelect.value = ratings[article];
}

function checkRatingSelection() {
  
  const rating = parseFloat(ratingSelect.value);
  const currentArticle = articleSelect.value;

  if (rating<0 || rating>10 || isNaN(rating)) {
    alert('Please provide a valid rating between 1-10.');
    return;
  }
  ratings[currentArticle] = rating; 
  console.log(ratings);
  disableButton(submitButton);
}

function disableButton(buttonAction){
  if (buttonAction.id==submitButton.id){
    buttonAction.disabled=true;
    return;
  }
  if (articleSelect.value==0){
    articleSelect.value="article1";
    ratingSelect.disabled=false;
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
      ratingSelect.value=ratings[pageNumber-1];
      break;
    case "next":
      pageNumber++;
      articleSelect.value="article"+pageNumber;
      ratingSelect.value=ratings[pageNumber-1];
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
  console.log(pageNumber)
  loadArticle();
}

function submitRating() {
  //To-do: display ratings so that the user can see all of their ratings for each article.
  
  }