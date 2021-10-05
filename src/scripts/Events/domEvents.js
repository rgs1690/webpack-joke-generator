import showSetup from '../helpers/showSetup';
import getJoke from '../helpers/jokeData';
import showPunchLine from '../helpers/showPunchLine';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('get-joke-btn')) {
      getJoke().then((jokeObj) => showSetup(jokeObj));
    }
    if (e.target.id.includes('get-punchline')) {
      getJoke().then((jokeObj) => showPunchLine(jokeObj));
    }
  });
};
export default domEvents;
