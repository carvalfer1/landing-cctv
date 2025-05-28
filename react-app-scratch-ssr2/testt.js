const express = require("express")

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>

      <body>
        <div id="root">Hello world</div>
      </body>
    </html>
  `);
});

//app.listen(process.env.PORT || 3000, () => {
app.listen(3000, () => {
    console.log("Server is listening");
});