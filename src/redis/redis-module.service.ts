import axios from 'axios'
import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager'

@Injectable()
export class PokemonService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) { }

  async getPokemon() {

    
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)

    // await this.cacheService.set("teste", { key: response.data }, 60000);

    // const cachedData = await this.cacheService.get("teste");

    // console.log("--------------", cachedData)

    console.timeEnd('myTimer');
    return response.data
  }
}

