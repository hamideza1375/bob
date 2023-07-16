import express from "express";
import ReactDOMServer from "react-dom/server";
import { AppRegistry } from 'react-native-web';
import App from "../commonjs/App";
const app = express();

app.get('/', (req, res) => {
AppRegistry.registerComponent('ssr', () => App);
const { element, getStyleElement } = AppRegistry.getApplication('ssr');
const html = ReactDOMServer.renderToString(element);
const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());
const document = `
<!DOCTYPE html>
<html style="height:100%">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${css}
<body style="height:100%; overflow-y:hidden">
<div id="root" style="display:flex; height: 100%">
${html}
</div>
`
res.send(document)
});
app.listen(3005, () => {console.log("App is launched")});









// // import React from "react";
// // import express from "express";
// // import fs from "fs";
// // import path from "path";
// // import ReactDOMServer from "react-dom/server";
// // import App from "./App";

// // const app = express();

// // app.use("/", (req, res) => {
// //   fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
// //     const html = ReactDOMServer.renderToString(<App />);
// //     return res.send(
// //       data.replace('<div dir="rtl" id="root"></div>', `<div id="root">${html}</div>`)
// //     );
// //   });
// // });

// // app.use(express.static(path.resolve(__dirname, "..", "build")));

// // app.listen(3005, () => {
// //   console.log("App is launched");
// // });

