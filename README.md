# articlesRanker

### Overview

> Implementation of a news site that renders random articles, and has the ability for the user to rank the articles once they have read them all.

<hr>

### Installation

  - Clone repository.
  - Run '<b>npm install</b>' on command line.
  - Run '<b>node server/server.js</b>' on command line.
  - Open the site in browser, through '<b>localhost:7000</b>'.

<hr>

### File Tree

<b> server </b>
> Contains the file(s) pertaining to the server connection and the loading of pages. The packages used are Node JS and Express.

<b> views </b>
> Contains the folders that describe the overall layout and styling of the site. 

> pages
>> Contains the files pertaining to the display of each page on the site. The structure and styling for each page uses Bootstrap, CSS and EJS. 

> partials
>> Contains the files pertaining to the content loaded repeatedly in each page file. Instead of cluttering every single page by loading each site-wide element every time, the element is instead called from this folder whenever needed. 


<b> static </b>
> Contains the folders that hold the main JavaScript and CSS code, as well as the JSON files that will be used to load the articles. 

> css
>> Contains the file(s) pertaining to the styling of the page, specifically that which uses CSS. 

> js
>> Contains the file(s) pertaining to the handling of the UI logic, as well as the loading of the JSON files into a nice template.

> articles
>> Contains the file(s) that holds the data for each article in a JSON format.

<hr>
