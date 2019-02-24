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
  var parsedArticle1 = JSON.parse(article1);
  document.getElementById("showArticle").innerHTML = `
    <h1 class="article-title">${parsedArticle1.title}</h1><br>
    <h2 class="article-header">${parsedArticle1.body[0].model.text}</h2><br>
    <div class="row">
      <div class="col-sm-6"
        <p>${parsedArticle1.body[1].model.text}</p>
        <hr>
        <p>${parsedArticle1.body[3].model.text}</p>
        <hr>
        <p>${parsedArticle1.body[4].model.text}</p>
      </div>
      <div class="col-sm-6">
        <img class="article-photo" src="${parsedArticle1.body[2].model.url}"> <hr>
        <p><strong>${parsedArticle1.body[2].model.altText}</strong></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <ul id="article1List">
        ${parsedArticle1.body[5].model.items.map(function (listItem){
        return "<li>" + listItem + "</li>"
        }).join("<br>")}
      </ul>
    </div>
  `;
}

function displayArticle2(article2) {
  var parsedArticle2 = JSON.parse(article2);
  document.getElementById("showArticle").innerHTML = `
    <h1 class="article-title">${parsedArticle2.title}</h1><br>
    <h2 class="article-header">${parsedArticle2.body[0].model.text}</h2><br>
    <div class="row">
      <div class="col-sm-6">
        <img class="article-photo" src="${parsedArticle2.body[1].model.url}"> <hr>
        <p><strong>${parsedArticle2.body[1].model.altText}</strong></p>
        <p>${parsedArticle2.body[3].model.text}</p>
        <hr>
        <<img class="article-photo" src="${parsedArticle2.body[6].model.url}"> <hr>
        <p><strong>${parsedArticle2.body[6].model.altText}</strong></p>
      </div>
      <div class="col-sm-6">
        <br>
        <p>${parsedArticle2.body[2].model.text}</p> <br> 
        <p>${parsedArticle2.body[5].model.text}</p> <br style="line-height:5;">
        <img class="article-photo" src="${parsedArticle2.body[4].model.url}"> <hr>
        <p><strong>${parsedArticle2.body[4].model.altText}</strong></p>
        <p>${parsedArticle2.body[7].model.text}</p>
        
      </div>
    </div>
    <div class="row">
      
    </div>
  `;
}

function displayArticle3(article3) {
  var parsedArticle3 = JSON.parse(article3);
  document.getElementById("showArticle").innerHTML = `
    <h1 class="article-title">${parsedArticle3.title}</h1><br>
    <h2 class="article-header">${parsedArticle3.body[0].model.text}</h2><br>
    <div class="row">
      <div class="col-sm-6"
        <p>${parsedArticle3.body[1].model.text}</p>
        <hr>
        <p>${parsedArticle3.body[2].model.text}</p>
        <hr>
        <p>${parsedArticle3.body[3].model.text}</p>
        <hr>
        <p>${parsedArticle3.body[4].model.text}</p>
      </div>
      <div class="col-sm-6"
        <p>${parsedArticle3.body[5].model.text}</p>
        <hr>
        <p>${parsedArticle3.body[6].model.text}</p>
        <hr>
        <p>${parsedArticle3.body[7].model.text}</p>
        <hr>
        <p>${parsedArticle3.body[8].model.text}</p>
      </div>
    </div>
  `;
}

function displayArticle4(article4) {
  document.getElementById("showArticle").innerHTML = ``;
}

function displayArticle5(article5) {
  document.getElementById("showArticle").innerHTML = ``;
}