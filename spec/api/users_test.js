let chaiHttp = require('chai-http');

chai.use(chaiHttp);
let mongoose = require("mongoose");
require('../../api/models/user');
const User = mongoose.model('User');

let server = require('../../server');

let password = "iamsecret";

let circuit_data = {
  "params": {
    "type": "default",
    "timeStep": 0.000005,
    "simSpeed": 172,
    "currentSpeed": 50,
    "voltageRange": 5,
    "powerRange": 50,
    "flags": 1
  },
  "components": [
    {
      "name": "ResistorElm",
      "pos": [304, 176, 304, 304],
      "flags": 0,
      "params": {
        "resistance": 100
      }
    },
    {
      "name": "VarRailElm",
      "pos": [304, 176, 304, 128],
      "flags": 0,
      "params": {
        "waveform": 6,
        "frequency": 5,
        "maxVoltage": 5,
        "bias": 0,
        "phaseShift": 0,
        "dutyCycle": 0.5,
        "sliderText": "Voltage"
      }
    },
    {
      "name": "GroundElm",
      "pos": [304, 304, 304, 352],
      "flags": 0,
      "params": {}
    }
  ]
};

describe('User auth', () => {

  beforeEach((done) => {
    User.remove({}, () => {
      const userData = {
        email: "test_user@mocha.com",
        password: password,
        name: "Test User"
      };

      this.user = new User(userData);

      this.user.save(() => {
        done()
      });
    });
  });

  it('POST auth/signup', (done) => {
    let params = {
      name: "name",
      email: "test_user@test.com",
      password: "iamsecret"
    };

    chai.request(server)
        .post('/auth/signup')
        .send(params)
        .end((err, res) => {
          // console.log(res);
          expect(res).to.have.status(200);
          done();
        });
  });

  describe('authenticated routes', () => {
    beforeEach((done) => {
      chai.request(server)
          .post('/auth/login')
          .send({
            email: this.user.email,
            password: password
          })
          .end((err, res) => {
            this.token = res.body.token;

            done()
          })
    });

    it("has a token", () => {
      expect(this.token).to.not.be.empty
    });

    it("creates a circuit", (done) => {
      chai.request(server)
          .post('/api/circuit')
          .set('Authorization', `bearer ${this.token}`)
          .send(circuit_data)
          .end((err, res) => {
            console.log(res.status);

            done()
          })
    });

    it("gets a circuit", (done) => {
      let current_user = this.user;

      let circuit = current_user.circuits.create(circuit_data);

      current_user.circuits.push(circuit);

      current_user.save(function (err) {
        chai.request(server)
            .get(`/api/circuit/${circuit._id}`)
            .set('Authorization', `bearer ${this.token}`)
            .end((err, res) => {
              console.log(res.status);

              done();
            });
      });
    });

    it("updates preferences", (done) => {
      let current_user = this.user;

      let pref_id = current_user.display_preferences._id;

      let new_preferences = {
        preferences: {
          chip_outline_width: 2
        }
      };

      chai.request(server)
          .post(`/api/preferences/`)
          .set('Authorization', `bearer ${this.token}`)
          .send(new_preferences)
          .end((err, res) => {
            console.log(res.status);
            console.log(res.body);

            User.findOne({_id: current_user.id}, function(err, user) {
              console.log(user)
            });

            done();
          });
    });

    it("gets preferences", (done) => {
      chai.request(server)
          .get(`/api/preferences/`)
          .set('Authorization', `bearer ${this.token}`)
          .end((err, res) => {
            console.log(res.body);

            done();
          });

    });
  });
});


