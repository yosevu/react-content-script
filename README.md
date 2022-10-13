# React TypeScript Chrome Extension

This repository includes examples of how to set up a Chrome Extension with React and TypeScript.

This project uses [Vite](https://vitejs.dev/) and [crxjs](https://crxjs.dev/vite-plugin) to build the extension.

## Setup

### Clone repository
```sh
git clone git@github.com:yosevu/react-content-script.git
```

### Install dependencies

```sh
yarn
```

### Build extension

```
yarn build
```

### Load extension

1. Navigate to [chrome://extensions/](chrome://extensions/)
1. Turn on the "Developer mode" toggle switch in the top right of the window
1. Click the "Load unpacked" button in top left of the window
1. Go to the `react-content-script` directory and select the `dist` directory to load the extension
1. Navigate to https://blank.org/ to see the Content Script React app
1. Go to extensions and click "React TypeScript Chrome Extension" to see the Popup React app

## [Popup](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup)

The popup source code is at the root directory.

## [Content Script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

The content script source code is in the `content-script` directory.

<img width="895" alt="Screen Shot 2022-06-18 at 10 04 04 AM" src="https://user-images.githubusercontent.com/16216104/174416528-6e5ad272-5faa-41d4-a717-c210ed4924b0.png">

## Background

This repository was originally part of [How to inject a React app into a Chrome Extension as a Content Script](https://medium.com/@yosevu/how-to-inject-a-react-app-into-a-chrome-extension-as-a-content-script-3a038f611067). 
