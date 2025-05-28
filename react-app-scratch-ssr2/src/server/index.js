import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../app/App";
import { StaticRouter } from 'react-router';

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  console.log(req.originalUrl);
  console.log("Request in")
  const url = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Instalacion de camaras de seguridad</title>
        <link rel="icon" type="image/x-icon" href="/media/fav.ico" >     
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="stylesheet" href="/css/style.css">
        <script src="/bundle.js" defer></script>
        <script src="/mfes_bundles/covid-section-bundle.js" defer></script>
        <meta name="description" content="Instalacion de camaras de seguridad, cctv, visualización de camaras desde teléfonos, 1 año de garantía, visita gratis, 0 costo mensual.">
        <meta name="keywords" content="camaras de seguridad,camaras de vigilancia,instalacion de camaras de seguridad, camaras de seguridad para casa, camaras cctv">
      </head>

      <body>
        <div id="root">${renderToString(<StaticRouter><App request={req.originalUrl} /></StaticRouter>)}</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});

var https = require("https");
setInterval(function() {
    https.get("https://cctv-landing.herokuapp.com");
}, 300000);