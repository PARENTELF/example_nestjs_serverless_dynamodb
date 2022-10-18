import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DbModule } from './db/db.module';
import { TodosModule } from './todos/todos.module';

import { getEnvPath } from './common/helper/env.helper';
const envFilePath: string = getEnvPath(`dist/common/envs`);

console.log(envFilePath);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    DbModule,
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
