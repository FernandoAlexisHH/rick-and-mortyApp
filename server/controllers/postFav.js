const {Favorite} = require('../db/index');

async function postFav(req, res){
    try {
        const {name, origin, status, image, species, gender} = req.body;
        if(!name || !origin || !status || !image || !species || !gender){
            return res.status(401).json("Faltan datos")
        }
        await Favorite.findOrCreate({where:{name,
            origin,
            status,
            image,
            gender,
            species}})

        const allFavorites = await Favorite.findAll()
            return res.status(200).json(allFavorites)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = postFav;