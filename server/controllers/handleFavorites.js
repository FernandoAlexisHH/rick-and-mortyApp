let myFavorites = [];

function postFav(req, res){
    const {name,status,id,gender,image} = req.body
    myFavorites.push({name,status,id,gender,image})
    console.log(name,status,id,gender,image);

    return res.status(200).json(myFavorites)
}

function deleteFav(req, res){
    const {id} = req.params
    myFavorites = myFavorites.filter(personaje => personaje.id !== Number(id))
    return res.status(200).json(myFavorites)
}

module.exports = {deleteFav, postFav}