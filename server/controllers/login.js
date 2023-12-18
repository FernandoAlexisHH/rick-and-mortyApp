const usuario = require('../utils/users')

function login(req, res) {
    const { email, password } = req.query
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