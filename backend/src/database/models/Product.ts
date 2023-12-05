import { Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";

class Product extends Model {
  declare id: number
  declare name: string
  declare price: number
  declare description: string
  declare brand: string
  declare img: string
}

Product.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER
  },
  name: {
    type: sequelize.STRING
  },
  price: {
    type: sequelize.FLOAT
  },
  description: {
    type: sequelize.STRING(3000)
  },
  brand: {
    type: sequelize.STRING
  },
  img: {
    type: sequelize.STRING(3500)
  },
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'product'
})

export default Product