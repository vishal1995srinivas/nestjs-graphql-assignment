
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewEmployee {
    name?: Nullable<string>;
    department?: Nullable<string>;
    email: string;
    address?: Nullable<string>;
    dob?: Nullable<string>;
}

export class Employee {
    id: string;
    name?: Nullable<string>;
    department?: Nullable<string>;
    email: string;
    address?: Nullable<string>;
    dob?: Nullable<string>;
    createdAt?: Nullable<string>;
}

export class Result {
    status?: Nullable<number>;
    code?: Nullable<string>;
    data?: Nullable<Employee>;
}

export abstract class IQuery {
    abstract getAllEmployees(): Employee[] | Promise<Employee[]>;

    abstract getEmployeeById(id: string): Nullable<Employee> | Promise<Nullable<Employee>>;
}

export abstract class IMutation {
    abstract createEmployee(input?: Nullable<NewEmployee>): Result | Promise<Result>;
}

type Nullable<T> = T | null;
