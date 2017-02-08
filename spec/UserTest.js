/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

let mongoose = require('mongoose');
let db = require('../src/api/models/db').connect('mongodb://localhost/maxwell_test');

const User = mongoose.model('User');

describe('User Model', function () {
  it('saving a user successfully', function (done) {
    const userData = {
      email: "test_email2@email.com",
      password: "test_password",
      name: "test_name"
    };

    let UserMock = sinon.mock(new User(userData));
    let user = UserMock.object;

    let expectedResult = { status: true };
    UserMock.expects('save').yields(expectedResult, null);

    user.save(function (err, result) {
      UserMock.verify();
      UserMock.restore();
      expect(err.status).to.be.true;

      done();
    });

  });

  it('saving a user unsuccessfully', function (done) {
    const userData = {
      email: "test_email2@email.com",
      password: "test_password",
      name: "test_name"
    };

    let UserMock = sinon.mock(new User(userData));
    let user = UserMock.object;

    let expectedResult = { status: false };
    UserMock.expects('save').yields(expectedResult, null);

    user.save(function (err, result) {
      UserMock.verify();
      UserMock.restore();
      expect(err.status).to.not.be.true;

      done();
    });
  });
});
