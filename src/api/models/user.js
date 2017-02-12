let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let CircuitSchema = require('./circuit');
let DisplayPreferencesSchema = require('./display_preferences');


let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date
  },
  updated_at: {
    type: Date
  },
  circuits: [CircuitSchema],
  display_preferences: DisplayPreferencesSchema
});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

/**
 * The pre-save hook method.
 *
 * If this user has a new or changed password then hash & salt it and store it in password.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password'))
    return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError)
      return next(saltError);

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError)
        return next(hashError);

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

UserSchema.pre('save', function saveHook(next) {
  let now = new Date();

  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }

  next();
});

mongoose.model('User', UserSchema);

module.exports = UserSchema;
