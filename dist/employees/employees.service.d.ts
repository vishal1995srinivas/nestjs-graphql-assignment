import { PrismaService } from 'src/prisma.service';
import { Employee } from '@prisma/client';
import { NewEmployee, Result } from 'src/graphql';
export declare class EmployeeService {
    private prisma;
    constructor(prisma: PrismaService);
    getEmployeeById(id: string): Promise<Employee | null>;
    getAllEmployees(): Promise<Employee[]>;
    createEmployee(input: NewEmployee): Promise<Result>;
}
