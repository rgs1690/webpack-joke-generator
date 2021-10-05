const showPunchLine = (obj = {}) => {
  document.querySelector('#joke-view').innerHTML += `
    <h2>${obj.delivery}</h2>
    `;
  document.querySelector('#button-container').innerHTML = `
    <button class="btn btn-success btn-lg mb-4" id="get-joke-btn">Get Anoter Joke</button>
    `;
};
export default showPunchLine;
