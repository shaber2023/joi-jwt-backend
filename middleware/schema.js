const Joi = require("joi");

exports.schema={
    signUp: Joi.object({
        name: Joi.string()
            .min(5)
            .max(25)
            .required(),
        password: Joi.string()
            .min(5)
            .max(25)
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
        confirm: Joi.string()
            .valid(Joi.ref('password'))
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
    }),
    signIn: Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
    }),
    createStudent: Joi.object({
        name: Joi.string()
            .min(5)
            .max(25)
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
        home: Joi.string()
            .min(5)
            .max(25)
            .required(),
        author:Joi.string()
            .min(5)
            .max(25)
            .required(),
    }),
}