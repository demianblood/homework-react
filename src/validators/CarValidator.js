import Joi from "joi"

export const CarValidator = Joi.object({
    id: Joi.number().min(0).messages({
        'number.empty': '"id" must be',
        'number.min': 'price must be more like 0',
    }),
    model: Joi.string().regex(new RegExp('^[[a-zA-ZA-яхйЙіІїЇ]{1,20}$')).required().messages({
        'string.empty': '"model" must be',
        'string.pattern.base': 'only abc..., min 1 max 20'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base': 'price can be like 1 - 1000000',
        'number.min': 'price must be more like 0',
        'number.max': 'price must be not more like 1000000'

    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base': 'year can be like 1900 - now'
    })
})