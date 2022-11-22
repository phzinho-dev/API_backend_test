const axios = require('axios');

module.exports = {
    async searchUsersGitHub(req, res) {
        const { name } = req.params;

        var nome, id, login, bio, typeUser, img;

        await axios.get('https://api.github.com/users/' + name).then(function (res) {
            console.log(res.data);

            login = res.data.login;
            id = res.data.id;
            nome = res.data.name;
            typeUser = res.data.type
            bio = res.data.bio;
            img = res.data.avatar_url

            return res.send('<html> <head> </head> <body> <h1>'+ nome + '')
        }).catch((err) => {
            res.json({ msg: "User don't exists" + err });
        })

    }
}

module.exports = {
    async searchUseGitHubDetails(req, res) {
        const { name } = req.params;
       
        var details = "";

        await axios.get('https://api.github.com/' + name).then(function (answer) {
            console.log(answer.data);
            
            details = answer.data;
            return res.send('<html> <head> </head> <body> <h1>'+ details)

        }).catch((err) => {
            res.json({ msg: "User don't exists" + err });
        })
    }
}