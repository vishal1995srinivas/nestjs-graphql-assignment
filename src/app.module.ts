import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EmployeeModule } from './employees/employees.module';

@Module({
  imports: [
    EmployeeModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
  ],
})
export class AppModule {}
