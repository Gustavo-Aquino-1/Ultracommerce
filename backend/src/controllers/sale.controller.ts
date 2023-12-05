import { NextFunction, Request, Response } from "express";
import SaleService from "../services/sale.service";

class SaleController {
  private service: SaleService = new SaleService()

  async getByClient(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.user.id
      const { status, message } = await this.service.getByClient(userId)
      res.status(status).json(message)
    } catch (error) {
      next(error)
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.user.id
      const { status, message } = await this.service.create(userId, req.body)
      res.status(status).json(message)
    } catch (error) {
      next(error)
    }
  }

  async getProductsBySaleId(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.user.id
      const { id } = req.params;
      const { status, message } = await this.service.getProductsBySaleId(userId, +id)
      res.status(status).json(message)
    } catch (error) {
      next(error)
    }
  }
}

export default SaleController