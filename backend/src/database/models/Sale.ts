import { Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";

class Sale extends Model {
  declare id: number
  declare userId: number
  declare total: number
  declare saleDate: Date
}

Sale.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER
  },
  userId: {
    type: sequelize.NUMBER,
    references: {
      model: 'user',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  total: {
    type: sequelize.FLOAT
  },
  saleDate: {
    type: sequelize.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'sale',
  underscored: true
})

export default Sale