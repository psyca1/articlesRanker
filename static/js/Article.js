function displayArticle1() {
  document.getElementById("showArticle").innerHTML = `Hello, ${1} article is being displayed.`;
}



/*function getArticle1() {
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function () {
    if(xhttp.readyState==4 && xhttp.status==200){
      var javaobj = JSON.parse(xhttp.response);
      document.getElementById(`articleDisplay1`).innerHTML = javaobj.title;
    }
  }
  xhttp.open("GET", "/static/articles/article-1.json"); //xhttp.open("GET", "/static/articles/article-1.json", true);
  xhttp.send();
}*/

/*function getArticle2(){
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function () {
    if(xhttp.readyState==4 && xhttp.status==200){
      var javaobj = JSON.parse(xhttp.response);
      document.getElementById().innerHTML = javaobj.title;
    }
  }
  xhttp.open("GET", "/static/articles/article-2.json", true);
  xhttp.send();
}

function getArticle3(){
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function () {
    if(xhttp.readyState==4 && xhttp.status==200){
      var javaobj = JSON.parse(xhttp.response);
      document.getElementById().innerHTML = javaobj.title;
    }
  }
  xhttp.open("GET", "/static/articles/article-3.json", true);
  xhttp.send();
}

function getArticle4(){
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function () {
    if(xhttp.readyState==4 && xhttp.status==200){
      var javaobj = JSON.parse(xhttp.response);
      document.getElementById().innerHTML = javaobj.title;
    }
  }
  xhttp.open("GET", "/static/articles/article-4.json", true);
  xhttp.send();
}

function getArticle5(){
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function () {
    if(xhttp.readyState==4 && xhttp.status==200){
      var javaobj = JSON.parse(xhttp.response);
      document.getElementById().innerHTML = javaobj.title;
    }
  }
  xhttp.open("GET", "/static/articles/article-5.json", true);
  xhttp.send();
}*/