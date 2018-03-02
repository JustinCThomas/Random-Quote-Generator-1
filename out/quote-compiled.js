"use strict";

var quoteButton = document.getElementById("quote-button");
var quoteContainer = document.getElementById("quote-container");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

quoteButton.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://talaikis.com/api/quotes/random/');

  xhr.onload = function () {
    var data = JSON.parse(xhr.responseText);

    var quote = data.quote;
    var author = data.author;
    var category = data.cat;

    window.quote.innerText = "" + decodeURIComponent(quote);
    window.author.innerText = "- " + author;
  };

  xhr.send();
});
