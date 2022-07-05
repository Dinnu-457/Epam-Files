const Joi = require("joi");

//schema
exports.userSchema = Joi.object({                            
    login: Joi.string().required().alphanum(),
    password: Joi.string().required().alphanum().min(6),
    age: Joi.number().required().min(4).max(100),
});