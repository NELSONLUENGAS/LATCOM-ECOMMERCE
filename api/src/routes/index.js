//////////////////////////////////////////////////////////////////////////////////
const { Router } = require('express');
const router = Router();

//////////////////////////////////////////////////////////////////////////////////
const productsRoute = require('./Products');
const categoriesRoute = require('./Categories');
const usersRoute = require('./Users');

//////////////////////////////////////////////////////////////////////////////////
router.use('/', usersRoute);
router.use('/', productsRoute);
router.use('/', categoriesRoute);

//////////////////////////////////////////////////////////////////////////////////
module.exports = router;