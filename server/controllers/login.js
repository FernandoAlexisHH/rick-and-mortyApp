const usuario = require('../utils/users')

function login(req, res) {
    const { email, password } = req.query
    console.log(usuario[0].email,usuario[0].password, email,password);
    if(email === usuario[0].email && password === usuario[0].password){
       return res.status(200).json({
            access: true
        })
    }
    return res.status(200).json({
        access:false
    })
}

module.exports = login