import React from 'react'
import ReactDOM from "react-dom/client";
import ReactDOMServer from "react-dom/server";
import App from './App';
import reportWebVitals from './reportWebVitals';

const html = ReactDOMServer.renderToString(<App/>);

console.log(html);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
reportWebVitals();




