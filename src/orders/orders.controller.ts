import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderStatus } from '@prisma/client';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.all();
  }

  @Post()
  create(
    @Body() body: { asset_id: string; price: number; status: OrderStatus },
  ) {
    return this.ordersService.create(body);
  }
}
