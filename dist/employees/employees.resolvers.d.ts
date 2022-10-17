import { EmployeeService } from './employees.service';
import { NewEmployee } from 'src/graphql';
export declare class EmployeeResolvers {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    getAllEmployee(): Promise<import(".prisma/client").Employee[]>;
    getEmployee(args: string): Promise<import(".prisma/client").Employee>;
    create(args: NewEmployee): Promise<import("src/graphql").Result>;
}
