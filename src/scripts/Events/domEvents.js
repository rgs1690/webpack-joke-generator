import showSetup from '../helpers/showSetup';
import getJoke from '../helpers/jokeData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('get-joke-btn')) {
      getJoke().then((jokeObj) => showSetup(jokeObj.setup));
    }
  });
};
export default domEvents;
