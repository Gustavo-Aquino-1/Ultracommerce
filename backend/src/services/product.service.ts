import Product from "../database/models/Product";
import { ModelStatic } from "sequelize";
import { resp, respM } from "../utils/resp";
import Avaliation from "../database/models/Avaliation";
import schema from "./validations/schema";
import IProduct from "../interfaces/IProduct";
import IComment from "../interfaces/IComment";

class ProductService {
  private model: ModelStatic<Product> = Product

  async get() {
    return resp(200, await this.model.findAll())
  }

  async getWithAvaliations(productId: number) {
    const product = await this.model.findByPk(productId)
    const avaliations = await Avaliation.findAll({
      where: { productId }
    })
    
    return resp(200, [product, avaliations])
  }

  async create(body: IProduct) {
    const { error } = schema.product.validate(body)
    if(error) return respM(400, error.message)

    const newProduct = await this.model.create({ ...body })
    return resp(201, newProduct)
  }

  async comment(productId: number, userId: number, body: IComment) {
    const avaliation = await Avaliation.findOne({ where: {  productId, userId }})
    if(avaliation) return respM(409, 'You already rate it')

    await Avaliation.create({ ...body, userId, productId })
    return respM(201, 'Commented with sucess')
  }
}

export default ProductService