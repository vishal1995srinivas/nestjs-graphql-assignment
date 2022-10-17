export declare class NewEmployee {
    name?: Nullable<string>;
    department?: Nullable<string>;
    email: string;
    address?: Nullable<string>;
    dob?: Nullable<string>;
}
export declare class Employee {
    id: string;
    name?: Nullable<string>;
    department?: Nullable<string>;
    email: string;
    address?: Nullable<string>;
    dob?: Nullable<string>;
}
export declare class Result {
    status?: Nullable<number>;
    code?: Nullable<string>;
    data?: Nullable<Employee>;
}
export declare abstract class IQuery {
    abstract getAllEmployees(): Employee[] | Promise<Employee[]>;
    abstract getEmployeeById(id: string): Nullable<Employee> | Promise<Nullable<Employee>>;
}
export declare abstract class IMutation {
    abstract createEmployee(input?: Nullable<NewEmployee>): Result | Promise<Result>;
}
declare type Nullable<T> = T | null;
export {};
