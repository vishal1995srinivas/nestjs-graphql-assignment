import { Module } from '@nestjs/common';
import { EmployeeResolvers } from './employees.resolvers';
import { EmployeeService } from './employees.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [EmployeeResolvers, EmployeeService, PrismaService],
})
export class EmployeeModule {}
