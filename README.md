# React TypeScript Chrome Extension

## Overview

This project demonstrates how to build a Chrome Extension using React and TypeScript. It includes examples of a Popup and a Content Script React app, both built and bundled with Vite and crxjs.

## Setup

### Clone repository
```sh
git clone git@github.com:yosevu/react-content-script.git
```

### Install dependencies
```sh
yarn
```

### Development

To start a development server with hot-reloading:

```sh
yarn dev
```

### Build for Production

To create a production-ready build of the extension:

```sh
yarn build
```

### Load the Extension

1. Navigate to [chrome://extensions/](chrome://extensions/)
2. **Enable** "Developer mode" using the toggle switch in the top right corner.
3. Click the **"Load unpacked"** button in the top left corner.
4. Select the `dist` directory inside the `react-content-script` directory.
5. Navigate to https://blank.org/ to see the Content Script React app in action.
6. Open the extensions menu and click on **"React TypeScript Chrome Extension"** to see the Popup React app.

## [Popup](https://developer.chrome.com/docs/extensions/mv3/user_interface/#popup)

The popup source code is at the root directory.

## [Content Script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

The content script source code is in the `content-script` directory.

<img width="895" alt="Screen Shot 2022-06-18 at 10 04 04 AM" src="https://user-images.githubusercontent.com/16216104/174416528-6e5ad272-5faa-41d4-a717-c210ed4924b0.png">

## Development Tips

- **Live Reloading**: Use `yarn dev` to see changes immediately during development.
- **Debugging**: Use Chrome DevTools to inspect and debug both the content script and popup.

## Background

This repository was originally part of [How to inject a React app into a Chrome Extension as a Content Script](https://medium.com/@yosevu/how-to-inject-a-react-app-into-a-chrome-extension-as-a-content-script-3a038f611067). 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
