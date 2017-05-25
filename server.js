
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {ShoppingList} = require('./models');
const {Recipes} = require('./models')

const jsonParser = bodyParser.json();
const app = express();

app.use(morgan('common'));

// ShoppingList.create('beans', 2);
// ShoppingList.create('tomatoes', 3);
// ShoppingList.create('peppers', 4);

// app.get('/shopping-list', (req, res) => {
//   res.json(ShoppingList.get());
// });

Recipes.create('breakfast', 'Milk, Cinnamon Toast Crunch')
Recipes.create('lunch', 'Hot Dog, Bun, Ketchup, Relish')
Recipes.create('dinner', 'Macaroni, Ground Beef, Hamburger Helper')

app.get('/recipes', (req, res) => {
	res.json(Recipes.get())
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
