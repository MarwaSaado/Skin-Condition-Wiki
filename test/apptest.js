const server = require('../index');
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe('Task Api', () => {
    describe('GET all skin condition', () => {
        it("it should be all skin condition", (done) => {
            chai.request(server)
                .get('/api/viewAllSkinCondition')
                .end((err, respond) => {
                    respond.should.have.status(200);
                    respond.body.should.be.a('object');
                    respond.body.success.should.be.eq(1);
                    respond.body.should.have.property('success');
                    respond.body.should.have.property('data');
                    respond.body.data.should.be.a('array');
                    done();
                })
        })
    });

    describe('GET all Created skin condition', () => {
        it("it should be all Created skin condition", (done) => {
            chai.request(server)
                .get('/api/viewAllCreatedSkinCondition')
                .end((err, respond) => {
                    respond.should.have.status(200);
                    respond.body.should.be.a('object');
                    respond.body.success.should.be.eq(1);
                    respond.body.should.have.property('success');
                    respond.body.should.have.property('data');
                    respond.body.data.should.be.a('array');
                    done();
                })
        })
    })

    describe('DELETE specific skin condition', () => {
        it("it should be delete a skin condition", (done) => {
            chai.request(server)
                .post('/api/deleteSkinCondition')
                .end((err, respond) => {
                    respond.should.have.status(200);
                    respond.body.should.be.a('object');
                    respond.body.success.should.be.eq(1);
                    respond.body.should.have.property('success');
                    respond.body.should.have.property('data');
                    done();
                })
        })
    })

    describe('PUT specific skin condition', () => {
        it("it should be update a skin condition", (done) => {
            chai.request(server)
                .put('/api/modifySkinCondition')
                .end((err, respond) => {
                    respond.should.have.status(200);
                    respond.body.should.be.a('object');
                    respond.body.success.should.be.eq(1);
                    respond.body.should.have.property('success');
                    respond.body.should.have.property('data');
                    done();
                })
        })
    })

    describe('POST specific skin condition', () => {
        it("it should be create a skin condition", (done) => {
            chai.request(server)
                .post('/api/createSkinCondition')
                .send({
                    id: "ASDASD2",
                    condition: "condASD",
                    description: "descASD",
                })
                .end((err, respond) => {
                    respond.should.have.status(200);
                    respond.body.should.be.a('object');
                    respond.body.success.should.be.eq(1);
                    respond.body.should.have.property('success');
                    respond.body.should.have.property('data');
                    done();
                })
        })
    })

})