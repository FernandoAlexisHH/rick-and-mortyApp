const {User} = require('../db/index');

 function postUser(req, res) {
    const {password, email } = req.body;
    try {
        if(!email || !password) return res.status(400).json("Faltan datos")
             User.findOrCreate({
            where:{email, password},
        }).then((usuario) => {
            console.log(usuario[0].dataValues.id);
            return res.status(200).json(usuario[0])
        })
    } catch (error) {
        return res.status(500).json(error)
    }
 }

 module.exports = postUser