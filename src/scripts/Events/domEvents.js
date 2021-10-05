import showSetup from '../helpers/showSetup';
import getJoke from '../helpers/jokeData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('get-joke-btn')) {
      getJoke().then((jokeObj) => console.warn(jokeObj.setup));
      getJoke().then((jokeObj) => showSetup(jokeObj));
    }
  });
};
export default domEvents;
