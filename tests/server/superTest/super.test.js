// requiring SuperTest Module for testing routes.
const { response } = require('express');
const request = require('supertest');
// declaring server for testing
const server = 'http://localhost:3000';

// it('does it work!', () => {
//     expect(1).toBe(1)
// })

describe('Testing Different Routes', () => {
    describe('/login', () => {
        describe('POST', () => {
            it('should res w/200 and send get to dashboard', async () => {
                // const res = await request(server)
                return request(server)
                .post('/login')
                .send({
                    username : 'navi',
                    password : 'theBest'
                })
            })
            expect(response.statusCode).toEqual(200)
        })
    })

    describe('/signup', () => {
        describe('POST', () => {
            it('should res w/200 and send get to dashboard', async () => {
                // const res = await request(server)
                return request(server)
                .post('/login')
                .send({
                    username : 'navi',
                    password : 'theBest'
                })
            })

            expect(response.statusCode).toEqual(200)
        })
    })


    describe('/', () => {
        describe('GET', () => {
            it('should res w/200, headers : text/html', () => {
                return request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200)
            })
        })
        // // describe('POST', () => {
        // //     it('create/read game')

        // })
    })
});