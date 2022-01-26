import { element, onpathchange } from 'utils/dom';
import HomePage from 'pages/home';
import AboutPage from 'pages/about';
import ContactPage from 'pages/contact';
import ExperimentsPage from 'pages/experiments';
import { getExperiment } from 'experiments/get-experiment';

function NotFound() {
  return (
    element('div', {textContent: 'Not found!!!'})
  )
}

function App() {
  return (
    element('div', {},
      onpathchange((path) => {

        if (path === '/') {
          return HomePage();
        }

        if (path === '/about') {
          return AboutPage();
        }

        if (path === '/contact') {
          return ContactPage();
        }

        if (path === '/experiments') {
          return ExperimentsPage();
        }

        if (path.startsWith('/experiments')) {
          return getExperiment(path);
        }

        return NotFound();
      })
    )
  )
}

document.body.appendChild(
  App()
);
