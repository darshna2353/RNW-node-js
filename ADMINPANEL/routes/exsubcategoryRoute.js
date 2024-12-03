const express = require('express');

const routes = express.Router();


const { exsubcategoryPage, addExSubcategoryPage, addexsubcategory, category } = require('../controllers/ExSubCategoryController');

const {
  exsubcategoryPage,
  addExSubcategoryPage,
  addExsubcategory,
} = require("../controllers/ExSubCategoryController");


routes.get('/', exsubcategoryPage);
routes.get('/add', addExSubcategoryPage);

routes.post('/add', addexsubcategory);
routes.get('/category', category)

routes.post("/add",addExsubcategory);


module.exports = routes;