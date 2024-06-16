# Humor Hub

## Project Overview
The Humor Hub is a simple web application that fetches and displays random dad jokes from the [icanhazdadjoke API](https://icanhazdadjoke.com/). Users can view a joke and request a new one by clicking a button. The application demonstrates two methods for handling asynchronous operations: Promises and async/await.

## Features
- Fetches a random dad joke from the API and displays it on the web page.
- Allows users to fetch a new joke by clicking a button.
- Demonstrates two methods for handling asynchronous operations:
  - Using Promises
  - Using async/await
- Includes basic styling for a clean and user-friendly interface.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API

## File Structure
- `index.html`: The main HTML file containing the structure of the web page.
- `style.css`: The CSS file for styling the web page.
- `script_promises.js`: The JavaScript file containing the logic for fetching and displaying jokes using Promises.
- `script_async.js`: The JavaScript file containing the logic for fetching and displaying jokes using async/await.

## How to Use
1. Open `index.html` in a web browser.
2. The page will automatically display a random dad joke using the method specified in the script file.
3. Click the "Get Another Joke" button to fetch and display a new joke.

### Switching Between Promises and Async/Await
- To use the version with Promises, include `script_promises.js` in the `index.html` file.
- To use the version with async/await, include `script_async.js` in the `index.html` file.

Example:
```html
<script src="./script_promises.js"></script>
<!-- or -->
<script src="./script_async.js"></script>
```

## Development
- Ensure you have a stable internet connection to fetch jokes from the API.
- Use any modern web browser to open and interact with the application.

## Future Improvements
- Add loading indicators while fetching jokes.
- Implement error handling to inform the user when the joke fetch fails.
- Enhance styling for better user experience.

## Credits
- Jokes provided by [icanhazdadjoke API](https://icanhazdadjoke.com/).
- Fonts by [Google Fonts](https://fonts.google.com/).
