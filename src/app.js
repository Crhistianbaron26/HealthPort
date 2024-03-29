import path from "path";
import express from "express";
import indexRoutes from "./routes/indexroutes";
import exphbs from "express-handlebars"; // Corrección en la importación

//const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main", // Corrección en el nombre de la opción
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
app.use(indexRoutes);

export default app;
