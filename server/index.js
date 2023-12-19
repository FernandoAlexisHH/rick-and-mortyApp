const server = require("./app");
const {conn} = require('./db/index')

const PORT = 3001;


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    conn.sync({force:true})
})