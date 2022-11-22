const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/searching/GitHub/:name', controller.searchUsersGitHub);

router.get('/searching/GitHub/:name', controller.searchUseGitHubDetails);

router.get('/searching/GitHub/:name', controller.searchUseGitHubRep);


module.exports = router;