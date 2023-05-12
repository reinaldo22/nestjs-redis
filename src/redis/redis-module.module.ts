import { Module } from '@nestjs/common';
import { RedisModuleController } from './redis-module.controller';
import { CacheInterceptor, CacheModule, CacheStore } from '@nestjs/cache-manager';
import { PokemonService } from './redis-module.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as redisStore from "cache-manager-redis-store";
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      url: "redis://localhost:6379",
    })],
  providers: [PokemonService, { provide: APP_INTERCEPTOR, useClass: CacheInterceptor }],
  controllers: [RedisModuleController],
})
export class RedisModules { }
