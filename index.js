const express = require("express");
const mongoose = require("mongoose");
const exhbs = require("express-handlebars");

const router = require("./routes/todos");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(router);

const mongoUri = `mongodb+srv://todo-app-user:ZGBBiCcQpfrXktjf@cluster0.qeywu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const hbs = exhbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

//use static files
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
