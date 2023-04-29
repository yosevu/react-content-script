import './main.css';
import App, { wordStore } from './App';
import { render } from 'preact';
// import reportWebVitals from '../utils/reportWebVitals';

const body = document.querySelector('body');
const app = document.createElement('div');
app.id = 'root';

// Make sure the element that you want to mount the app to has loaded. You can
// also use `append` or insert the app using another method:
// https://developer.mozilla.org/en-US/docs/Web/API/Element#methods
//
// Also control when the content script is injected from the manifest.json:
// https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time
if (body) {
  body.prepend(app);
}

render(<App />, document.getElementById('root') as HTMLElement);
// reportWebVitals(console.log);
setTimeout(() => {
  wordStore.set('11111111111111111111111111-outside');
}, 5000);