const {Favorite} = require('../db/index');

async function postFav(req, res){
    try {
        const {name, status, image, species, gender, id, users=[1]} = req.body;
        if(!name || !status || !image || !species || !gender, !id){
            return res.status(401).json("Faltan datos")
        }
          const [personaje,created] = await Favorite.findOrCreate({where:{
            id,
            name,
            status,
            image,
            gender,
            species}})
            await personaje.addUsers(users)


        const allFavorites = await Favorite.findAll()
            return res.status(200).json(allFavorites)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = postFav;