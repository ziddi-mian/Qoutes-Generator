const twitterButton = document.getElementById('tweet-quote');
const endpoint = 'https://api.quotable.io/random'; // API endpoint for random quotes

// Function to fetch quotes from the API and update the quote and author elements in the DOM
async function getQuote() {
  const response = await fetch(endpoint);
  const { content, author } = await response.json();
  document.getElementById('quote').textContent = content;
  document.getElementById('author').textContent = `— ${author}`;
  
  const tweetUrl = `https://twitter.com/intent/tweet?text=${content} - ${author}`;
  twitterButton.setAttribute('href', tweetUrl);
}

// Add an event listener to the new quote button to fetch a new quote and update the DOM
document.getElementById('new-quote').addEventListener('click', getQuote);

// Fetch a new quote on page load
getQuote();
