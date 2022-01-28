# React Content Script

How to inject [React](https://reactjs.org/) app into a Chrome Extension [Content Script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/).

1. `git clone git@github.com:yosevu/react-content-script.git`
1. `npm run build` 
1. Navigate to [chrome://extensions/](chrome://extensions/)
1. Click the "Developer mode" toggle switch in the top right of the window
1. Click the "Load unpacked" button in top left of the window
1. Go to the react-content-script directory and select the "build" directory to load the extension
1. Navigate to https://blank.org/ to see the React app 
