import Sale from "../database/models/Sale";
import { ModelStatic } from "sequelize";
import { resp, respM } from "../utils/resp";
import TCart from "../types/TCart";
import Product from "../database/models/Product";
import ICart from "../interfaces/ICart";
import SaleProduct from "../database/models/SaleProduct";
import schema from "./validations/schema";
import Avaliation from "../database/models/Avaliation";

class SaleService {
  private model: ModelStatic<Sale> = Sale

  async getByClient(userId: number) {
    const sales = await this.model.findAll({
      where: { userId }
    })

    return resp(200, sales)
  }

  async create(userId: number, cart: ICart) {
    const { error } = schema.cart.validate(cart)
    if(error) return respM(400, error.message)

    for(let p of cart.products) {
      const pExists = await Product.findByPk(p.productId)
      if(!pExists) return respM(404, `Product "${p.productId}" not found`)
    }

    const sale = await this.model.create({userId, total: cart.total })

    await Promise.all(cart.products.map(async (e) => await SaleProduct.create({
      saleId: sale.id,
      productId: e.productId,
      quantity: e.quantity })))

    return resp(201, sale)
  }

  async getProductsBySaleId(userId: number, saleId: number) {
    const sale = await this.model.findOne({ where: { id: saleId }})
    if(sale?.userId === userId) {
      const productsIds = await SaleProduct.findAll({ where: { saleId }, attributes: ['productId']})
      const products = []
      for(let p of productsIds) {
        const product = await Product.findByPk(p.productId)
        const isAvaliated = await Avaliation.findOne({ where: {
          userId,
          productId: p.productId
        }})
        if(!isAvaliated) {
          products.push(product)
        }
      }
      return resp(200, products)
    }
    return respM(401, 'Unauthorized')
  }
}

export default SaleService