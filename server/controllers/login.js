const {User} = require('../db/index');

async function login (req, res) {
    try {
        const {email, password} = req.body;
        console.log(email,password);

        if(!email || !password){
            return res.status(400).send("Faltan Datos")
        }
       const user = await User.findOne({where:{email}})
       if(!user){
        return res.status(404).send('Usuario no encontrado')
       }
       
       return user.password === password 
       ? res.status(200).json({access:true})
       : res.status(403).send('Contraseña incorrecta')
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = login
