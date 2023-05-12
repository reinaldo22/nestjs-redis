import { Module } from '@nestjs/common';
import { RedisModuleController } from './redis-module.controller';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { PokemonService } from './redis-module.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [CacheModule.register({
    
  })],
  providers: [PokemonService, {provide: APP_INTERCEPTOR, useClass: CacheInterceptor}],
  controllers: [RedisModuleController],
})
export class RedisModules { }
