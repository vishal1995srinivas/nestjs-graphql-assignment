"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModule = void 0;
const common_1 = require("@nestjs/common");
const employees_resolvers_1 = require("./employees.resolvers");
const employees_service_1 = require("./employees.service");
const prisma_service_1 = require("../prisma.service");
let EmployeeModule = class EmployeeModule {
};
EmployeeModule = __decorate([
    common_1.Module({
        providers: [employees_resolvers_1.EmployeeResolvers, employees_service_1.EmployeeService, prisma_service_1.PrismaService],
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employees.module.js.map