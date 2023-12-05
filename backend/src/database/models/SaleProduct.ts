import { Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";

class SaleProduct extends Model {
  declare id: number
  declare saleId: number
  declare productId: number
  declare quantity: number
}

SaleProduct.init({
  saleId: {
    type: sequelize.INTEGER,
    references: {
      model: 'sale',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true
  },
  productId: {
    type: sequelize.INTEGER,
    references: {
      model: 'product',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true
  },
  quantity: {
    type: sequelize.INTEGER
  },
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'sale_product',
  underscored: true
})

export default SaleProduct