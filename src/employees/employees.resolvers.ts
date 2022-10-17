import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmployeeService } from './employees.service';
import { Employee, NewEmployee } from 'src/graphql';

@Resolver('Employee')
export class EmployeeResolvers {
  constructor(private readonly employeeService: EmployeeService) {}

  @Query('getAllEmployees')
  async getAllEmployee() {
    return this.employeeService.getAllEmployees();
  }

  @Query('getEmployeeById')
  async getEmployee(@Args('id') args: string) {
    return this.employeeService.getEmployeeById(args);
  }

  @Mutation('createEmployee')
  async create(@Args('input') args: NewEmployee) {
    console.log(args, 'input');
    return this.employeeService.createEmployee(args);
  }
}
