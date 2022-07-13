const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    isGold: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 30
    },
    phone: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 30
    }
}));

const validateCustomer = customer => {
    const schema = {
        isGold: Joi.boolean(),
        name: Joi.string().min(3).max(30).required(),
        phone: Joi.string().min(3).max(30).required(),
    };

    return Joi.validate(customer, schema);
};

exports.Customer = Customer;
exports.validate = validateCustomer;