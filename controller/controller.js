const axios = require('axios');

async function searchUsersGitHub(req, res) {
    if(req.params.name !== undefined){
        const { name } = req.params;
        let request = await axios.get(`https://api.github.com/users/${name}`);
        return JSON.stringify(res.json({
            nome: request.data.name,
            id: request.data.id,
            typeUser: request.data.type,
            avatar: request.data.avatar_url
        }));
    }

    let request = await axios.get('https://api.github.com/users');
    return JSON.stringify(res.json(data))
}


async function searchUseGitHubDetails(req, res) {
    const { name } = req.params;

    let {data} = await axios.get(`https://api.github.com/users/${name}`)
    return JSON.stringify(res.json(data))
}


async function searchUseGitHubRep(req, res) {
    const { name } = req.params;

    let {data} = await axios.get(`https://api.github.com/users/${name}/repos`)
    return JSON.stringify(res.json(data))
}


module.exports = { 
    searchUsersGitHub: searchUsersGitHub,
    searchUseGitHubDetails: searchUseGitHubDetails,
    searchUseGitHubRep: searchUseGitHubRep
}