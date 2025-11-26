/*
Creating our First react Component 
React Component is a reusable piece of code , more like a building block which helps breaking down complex UI into smaller more manageable pieces.

MY POV: Components are those "<Footer />" which helps add that footer component to any page desired.
*/

function WelcomeMessage() {
  return (
    Hello React 👋
    This is my first component.

  );
}
export default WelcomeMessage;

/* 
CREATING A REACT APP 
// npm create vite@latest my-react-app -- --template react
// cd my-react-app
// npm install
// npm run dev

1) npm create vite@latest my-react-app -- --template react

Creates a new folder called my-react-app and scaffolds a React project using Vite’s latest template.
The -- passes --template react directly to Vite so it knows which starter files to generate. ( index app css main app jsx)

2) cd my-react-app

Moves your terminal into the new project directory.
All further commands (install, dev) must run inside this folder.

3) npm install

Reads your package.json and downloads all dependencies into node_modules.
Also generates/updates package-lock.json to lock exact versions.

4) npm run dev

Runs the dev script, which starts Vite’s super-fast development server.
It serves your React app with hot reload at http://localhost:5173.
*/
