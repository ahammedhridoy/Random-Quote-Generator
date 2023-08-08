const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const getQuote = async () => {
  try {
    quote.innerText = "updating quote...";
    author.innerText = "updating author";
    btn.innerText = "I am coming";
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quote.innerText = data.content;
    author.innerText = data.author;
    btn.innerText = "GET A QUOTE";
  } catch (error) {
    quote.innerText = "Something went wrong";
  }
};

getQuote(quote);

btn.addEventListener("click", getQuote);
