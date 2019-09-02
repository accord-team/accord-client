import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { allPokemons } from './pokemons.graphql';

import { Pokemon, Response } from './pokemon';

@Injectable()
export class DashboardResolver implements Resolve<Pokemon[]> {

  constructor(
    public apollo: Apollo
  ) {}

  resolve(): Observable<Pokemon[]> {
    return this.apollo.query<Response>({
      query: allPokemons,
    })
      .pipe(
        map(result => result.data.pokemons)
      );
  }

}
