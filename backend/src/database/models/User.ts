import { Model } from "sequelize";
import db from '.'
import sequelize from "sequelize";

class User extends Model {
  declare id: number
  declare name: string
  declare email: string
  declare password: string
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER
  },
  name: {
    type: sequelize.STRING
  },
  email: {
    type: sequelize.STRING,
    unique: true
  },
  password: {
    type: sequelize.STRING
  },
}, {
  sequelize: db,
  timestamps: false,
  tableName: 'user'
})

export default User