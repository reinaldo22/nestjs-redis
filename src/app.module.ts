import { Module } from '@nestjs/common';
import { RedisModules } from './redis/redis-module.module';

@Module({
  imports: [RedisModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
