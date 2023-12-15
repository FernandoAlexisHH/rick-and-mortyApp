let myFavorites = [];

function postFav(req, res){
    const {personaje} = req.body
    myFavorites.push(personaje)

    return res.status(200).json(myFavorites)
}

function deleteFav(req, res){
    const {id} = req.params
    const filterArray = myFavorites.filter(personaje => personaje.id === id)
    return res.status(200).json(filterArray)
}

module.exports = {deleteFav, postFav}