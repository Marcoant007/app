import { Injectable } from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async create(data: { asset_id: string; price: number; status: OrderStatus }) {
    await this.prismaService.order.create({ data });
  }

  async all() {
    return await this.prismaService.order.findMany();
  }
}
