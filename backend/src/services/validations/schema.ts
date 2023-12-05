import joi from 'joi'

const user = joi.object({
  name: joi.string().min(5).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
})

const product = joi.object({
  name: joi.string().min(5).required(),
  price: joi.number().min(1).required(),
  description: joi.string().min(5).required(),
  brand: joi.string().min(1).required(),
  img: joi.string().min(5).required(),
})

const products = joi.object({
  productId: joi.number().min(1).required(),
  quantity: joi.number().min(1).required()
})

const cart = joi.object({
  products: joi.array().items(products).min(1).required(),
  total: joi.number().positive().required()
})

export = { user, product, cart }