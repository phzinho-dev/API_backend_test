const express = require('express');
const router = express.Router();
const {
    searchUseGitHubDetails,
    searchUseGitHubRep,
    searchUsersGitHub
} = require('../controller/controller');
    
router.route(["/users/", "/users/:name"])
    .get(searchUsersGitHub)

router.route("/users/:name/details")
    .get(searchUseGitHubDetails)
    
router.route("/users/:name/repos")
    .get(searchUseGitHubRep)


module.exports = router;