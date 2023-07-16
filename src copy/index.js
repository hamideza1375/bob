import React from 'react'
import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom/server";
import App from './App';

const html = ReactDOMServer.renderToString(<App/>);
console.log(html);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




