const showSetup = (obj = {}) => {
  document.querySelector('#joke-view').innterHTML = `
    <h1>${obj.setup}</h1>
  `;
  document.querySelector('#button-container').innerHTML = `
  <button class="btn btn-success btn-lg mb-4" id="get-punchline">Get Punchline</button>
  `;
};

export default showSetup;
