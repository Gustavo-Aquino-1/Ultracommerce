import { Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";

class Avaliation extends Model {
  declare productId: number
  declare userId: number
  declare rate: number
  declare description: string
}

Avaliation.init({
  productId: {
    type: sequelize.INTEGER,
    references: {
      model: "product", 
      key: "id"
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: sequelize.INTEGER,
    references: {
      model: "user", 
      key: "id"
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
    allowNull: false
  },
  rate: {
    type: sequelize.INTEGER
  },
  description: {
    type: sequelize.STRING(3000)
  },
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'avaliation',
  underscored: true
})

export default Avaliation