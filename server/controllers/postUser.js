const {User} = require('../db/index');

 function postUser(req, res) {
    const {password, email, id } = req.body;
    try {
        if(!email || !password) return res.status(400).json("Faltan datos")
             User.findOrCreate({
            where:{id,email, password},
        }).then((usuario) => {
            return res.status(200).json(usuario)
        })
    } catch (error) {
        return res.status(500).json(error)
    }
 }

 module.exports = postUser