process.env.NODE_ENV = 'test';

chai = require('chai');
mongoose = require("mongoose");

expect = chai.expect;

sinon = require('sinon');
require('sinon-mongoose');
