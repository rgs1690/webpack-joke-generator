const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="main-container"  
      <div id="joke-view"></div>
      <div id="button-container"></div>
    </div>
`;
};

export default domBuilder;
