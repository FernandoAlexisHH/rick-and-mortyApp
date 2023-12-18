const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS',() => {
    describe('GET/rickandmorty/character/:id',()=> {
        it('Responde con status: 200', async() => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con la propiedades "id", "name", "species", "gender", "status", "origin" e "image"',
        async () => {
            const res = await agent.get('/rickandmorty/character/1')
            console.log(res.body);
            expect(res.body).toHaveProperty("id","name","species","gender","status","origin","image")
        })
    })

})