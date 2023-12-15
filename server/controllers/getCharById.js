const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

function getCharById(req, res){
    const { id } = req.params;
    axios.get(URL + id)
    .then(({data}) => {        
        return res.status(200).json({
            id:data.id,
            status:data.status,
            origin: data.origin.name,
            name :data.name,
            gender: data.gender,
            image:data.image
        })
    }).catch((err) => {
        console.log(err.message);
        return res.status(500).json(err.message)
    })
}

module.exports = getCharById;