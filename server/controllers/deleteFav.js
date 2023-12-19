const {Favorite} = require('../db/index');

 function deleteFav (req, res) {
    const { id } = req.params;
    try {
        Favorite.destroy({
            where:{id}
        }).then(()=> {
            Favorite.findAll()
            .then((favorites)=>{
            res.status(200).json(favorites)
         })
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = deleteFav;