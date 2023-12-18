const app = require('../app');
const session = require('supertest');
const agent = session(app);
const user = require('../utils/users')

describe('Test de RUTAS',() => {
    describe('GET/rickandmorty/character/:id',() => {
        it('Responde con status: 200', async() => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con la propiedades "id", "name", "species", "gender", "status", "origin" e "image"',
        async () => {
            const res = await agent.get('/rickandmorty/character/1')
            expect(res.body).toHaveProperty("id","name","species","gender","status","origin","image")
        })
        it('Si hay un error responde con status: 500',async () => {
            const res = await agent.get("/rickandmorty/character/5000")
            expect(res.statusCode).toBe(500)

        })
    });

    describe('GET /rickandmorty/login',() => {
        it('Si email y password son correctos enviara un objeto con la propiedad access en true', async () => {
            const res = await agent.get(`/rickandmorty/login?email=${user[0].email}&password=${user[0].password}`)
            expect(res.body).toHaveProperty("access",true)
        })
        it('Si el email y password son erroneos enviara un objeto con la propiedad access false', async() => {
            const res = await agent.get(`/rickandmorty/login?email="usuarioerroneo@hotmail.com"&password="1234"`)
            expect(res.body).toHaveProperty("access", false)

        })
    })

})