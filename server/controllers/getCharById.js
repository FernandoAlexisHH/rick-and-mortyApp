const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

 async function getCharById(req, res){
    const { id } = req.params;
    try {
        const {data} = await axios.get(URL + id)
        return res.status(200).json({
                id:data.id,
                status:data.status,
                origin: data.origin.name,
                name :data.name,
                gender: data.gender,
                image:data.image
                })
    } catch (error) {
        return res.status(500).json({error:`Personaje con id: ${id} no encontrado`})
    }
}

module.exports = getCharById;