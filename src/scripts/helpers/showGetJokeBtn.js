const showGetJokeBtn = () => {
  document.querySelector('#button-container').innerHTML = `
    <button class="btn btn-success btn-lg mb-4" id="get-joke-btn">Get a Joke</button>
    `;
};

export default showGetJokeBtn;
