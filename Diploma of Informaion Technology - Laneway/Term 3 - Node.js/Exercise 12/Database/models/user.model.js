const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    }
  },
  {
        timestamps: true
  }
);

// This function will be executed before any User document is saved to the database.
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    // Generates a salt using bcrypt with a cost factor of 10.
    const salt = await bcrypt.genSalt(10);
    // Hashes the user's password using bcrypt, combining the password and the generated salt.
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
