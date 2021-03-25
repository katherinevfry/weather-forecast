import domBuilder from '../components/domBuilder';
import formBuilder from '../components/formBuilder';
import domEvents from '../helpers/domEvents';

const startApp = () => {
  domBuilder();
  formBuilder();
  domEvents();
};

export default startApp;
