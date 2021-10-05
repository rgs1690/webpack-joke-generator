import domBuilder from '../domBuilder';
import domEvents from '../Events/domEvents';
import showGetJokeBtn from './showGetJokeBtn';

const startApp = () => {
  domBuilder();
  domEvents();
  showGetJokeBtn();
};

export default startApp;
