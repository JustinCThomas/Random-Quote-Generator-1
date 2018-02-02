let quoteButton = document.getElementById("quote-button");
let quoteContainer = document.getElementById("quote-container");
let quote = document.getElementById("quoted");
let author = document.getElementById("author");


quoteButton.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://talaikis.com/api/quotes/random/')


  xhr.onload = () => {
    let data = JSON.parse(xhr.responseText);

    let quote = data.quote;
    let author = data.author;
    let category = data.cat;

    window.quote.innerText = `${decodeURIComponent(quote)}`;
    window.author.innerText = `- ${author}`;
  }


  xhr.send();
});
