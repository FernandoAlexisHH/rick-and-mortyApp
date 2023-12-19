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
            for(const prop in res.body){
                expect(res.body).toHaveProperty(prop)
            }
        })
        it('Si hay un error responde con status: 500',async () => {
            const res = await agent.get("/rickandmorty/character/5000")
            expect(res.statusCode).toBe(500)

        })
    });

    describe('GET /rickandmorty/login',() => {
        it('Si email y password son correctos enviara un objeto con la propiedad access en true si la información del usuario es correcta', async () => {
            const res = await agent.get(`/rickandmorty/login?email=${user[0].email}&password=${user[0].password}`)
            expect(res.body).toHaveProperty("access",true)
        })
        it('Si el email y password son erroneos enviara un objeto con la propiedad access false', async() => {
            const res = await agent.get(`/rickandmorty/login?email="usuarioerroneo@hotmail.com"&password="1234"`)
            expect(res.body).toHaveProperty("access", false)

        })
    })

    describe('POST /rickandmorty/fav', () => {
        it('Devuelve un arreglo de personajes', async () => {
            const payload = {
                id: 3,
                status: "Alive",
                name: "Summer Smith",
                gender: "Female",
                image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
              }
            const res = await agent.post('/rickandmorty/fav')
            .send(payload)
            .set('Content-Type', 'application/json')
              expect(res.body).toBeInstanceOf(Array)
        })

        it('Debe ser devuelto en un arreglo que incluye un elemento enviado previamente',async()=> {
            const payload = {
                id: 4,
                status: "Alive",
                name: "Summer Smith",
                gender: "Female",
                image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
              }
            const res = await agent.post('/rickandmorty/fav')
            .send(payload)
            .set('Content-Type', 'application/json')
              expect(res.body).toHaveLength(2)
        })
    
    })
    describe('DELETE /rickandmorty/fav/:id',()=> {
        it('Si no se encuentra el ID del personaje devuelve el arreglo con los elementos sin modificar',async() => {

            const res = await agent.delete('/rickandmorty/fav/5')
            expect(res.body.length).toBe(2)
        })
        it('Si envias un ID valido verifica que este ya no exista en el Array' , async () => {
            const res = await agent.delete('/rickandmorty/fav/4')
            expect(res.body.length).toBe(1)
        })
    })
})