const express = require('express');
const router = express.Router();
const {
    searchUseGitHubSince,
    searchUseGitHubRep,
    searchUsersGitHub
} = require('../controller/controller');
    
router.route(["/users/", "/users/:name"])
    .get(searchUsersGitHub)

router.route("/users?since=")
    .get(searchUseGitHubSince)
    
router.route("/users/:name/repos")
    .get(searchUseGitHubRep)


module.exports = router;