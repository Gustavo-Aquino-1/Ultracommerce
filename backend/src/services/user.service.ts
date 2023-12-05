import User from "../database/models/User";
import { ModelStatic } from "sequelize";
import ILogin from "../interfaces/ILogin";
import md5 from 'md5'
import { resp, respM } from "../utils/resp";
import { sign } from "../jwt/jwt";
import IUser from "../interfaces/IUser";
import schema from "./validations/schema";

class UserService {
  private model: ModelStatic<User> = User;

  async login(body: ILogin) {
     const user = await this.model.findOne({where: {
        email: body.email,
        password: md5(body.password)
     }})
     
     if(!user) return respM(404, 'User not found')

     const token = sign({ id: user.id, name: user.name })
     return resp(200, {id: user.id, email: user.email, name: user.name, token })
  }


  async create(body: IUser) {
    const { error } = schema.user.validate(body)
    if (error) return respM(400, error.message)

    const user = await this.model.findOne({ where: { email: body.email }})
    if(user) return respM(409, 'Email in use')

    const newUser = await this.model.create({ ...body, password: md5(body.password) })
    return resp(201, newUser)
  }
}

export default UserService