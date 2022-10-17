import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Employee } from '@prisma/client';
import { NewEmployee, Result } from 'src/graphql';

async function getAge(dateString) {
  let age;
  const today = new Date();
  const birthDate = new Date(dateString);

  age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  // Get a single post
  async getEmployeeById(id: string): Promise<Employee | null> {
    return this.prisma.employee.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // Get multiple posts
  async getAllEmployees(): Promise<Employee[]> {
    return this.prisma.employee.findMany({});
  }

  // Create a post
  async createEmployee(input: NewEmployee): Promise<Result> {
    //check the age is greater than 18.
    const age = await getAge(input.dob);
    if (isNaN(age)) {
      return {
        status: 402,
        code: 'DATE_FORMAT_WRONG, Please provide in YYYY/MM/DD format',
        data: null,
      };
    }
    if (parseInt(age) <= 18) {
      return {
        status: 400,
        code: 'DATE_LESS_THAN_CRITERIA',
        data: null,
      };
    }
    const employeeExist = await this.prisma.employee.findUnique({
      where: {
        email: input.email,
      },
    });

    if (employeeExist) {
      return {
        status: 403,
        code: 'ALREADY_EXISTS',
        data: null,
      };
    } else {
      const employeeCreation = await this.prisma.employee.create({
        data: {
          name: input.name,
          address: input.address,
          dob: input.dob,
          department: input.department,
          email: input.email,
        },
      });
      return {
        status: 200,
        code: 'SUCCESS',
        data: {
          name: employeeCreation.name,
          department: employeeCreation.department,
          dob: employeeCreation.dob,
          id: `${employeeCreation.id}`,
          email: employeeCreation.email,
          address: employeeCreation.address,
        },
      };
    }
  }
}
