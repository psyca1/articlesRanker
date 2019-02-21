const ratings = {
  article1: 4.7,
  article2: 3.4,
  article3: 2.3,
  article4: 3.6,
  article5: 4.1
}

const starsTotal = 5;

const articleSelector = document.getElementById('articleSelect');
const ratingSelector = document.getElementById('ratingSelect');

let article;

articleSelector.addEventListener('change', (e) => {
  product = e.target.value;
  var x = document.getElementById("ratingSelect");
  x.disabled=false;
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

function submitRating(){
}