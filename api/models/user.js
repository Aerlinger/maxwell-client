let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let CircuitSchema = require('./circuit');
let DisplayPreferencesSchema = require('./display_preferences');

const DisplayPreferences = mongoose.model('DisplayPreferences');


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
      circuits: [CircuitSchema],
      display_preferences: DisplayPreferencesSchema
    },
    {
      timestamps: true
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
  if (!this.display_preferences) {
    this.display_preferences = new DisplayPreferences();
  }

  next();
});

mongoose.model('User', UserSchema);

module.exports = UserSchema;
