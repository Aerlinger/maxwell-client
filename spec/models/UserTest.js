/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

let mongoose = require('mongoose');
let db = require('../../src/api/models/db').connect('mongodb://localhost/maxwell_test');

const User = mongoose.model('User');

const default_user_data = {
  email: "test_email2@email.com",
  password: "test_password",
  name: "test_name"
};

describe('User Model', function () {
  beforeEach(function(done) {
    this.UserMock = sinon.mock(new User(default_user_data));
    this.user = this.UserMock.object;

    done()
  });

  it('saving a user successfully', function (done) {
    let expectedResult = { status: true };
    this.UserMock.expects('save').yields(expectedResult, null);

    this.user.save((err) => {
      this.UserMock.verify();
      this.UserMock.restore();
      expect(err.status).to.be.true;

      done();
    });
  });

  it('saving a user unsuccessfully', function (done) {
    let expectedResult = { status: false };

    this.UserMock.expects('save').yields(expectedResult, null);

    this.user.save((err) => {
      this.UserMock.verify();
      this.UserMock.restore();
      expect(err.status).to.not.be.true;

      done();
    });
  });

  it('compares invalid password', function (done) {
    let expectedResult = { status: false };

    this.UserMock.expects('save').yields(expectedResult, null);

    this.user.save((err) => {
      this.UserMock.verify();
      this.UserMock.restore();
      expect(err.status).to.not.be.true;

      this.user.comparePassword("wrong_password", (err, isMatch) => {
        expect(isMatch).to.eql(false);
        done();
      });
    });
  })
});
