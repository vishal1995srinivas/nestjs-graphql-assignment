"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const graphql_1 = require("../graphql");
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
let EmployeeService = class EmployeeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getEmployeeById(id) {
        return this.prisma.employee.findUnique({
            where: {
                id: parseInt(id),
            },
        });
    }
    async getAllEmployees() {
        return this.prisma.employee.findMany({});
    }
    async createEmployee(input) {
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
        }
        else {
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
};
EmployeeService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employees.service.js.map