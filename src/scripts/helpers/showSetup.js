const showSetup = (obj = {}) => {
  document.querySelector('#joke-view').innterHTML = `
    <h2>${obj.setup}</h2>
  `;
  document.querySelector('#button-container').innerHTML += `
  <button class="btn btn-success btn-lg mb-4" id="get-punchline">Get Punchline</button>
  `;
};

export default showSetup;
