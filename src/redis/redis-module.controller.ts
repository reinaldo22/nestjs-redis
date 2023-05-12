import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { PokemonService } from "./redis-module.service";
import { CacheKey, CacheTTL } from "@nestjs/cache-manager";

@Controller('redis-module')
export class RedisModuleController {

    constructor(private readonly pokemonService: PokemonService) { }


    @Get()
    @CacheKey('some_route')
    @CacheTTL(60000)
    async getAll() {
        console.time('myTimer');
        return await this.pokemonService.getPokemon()
    }
}
