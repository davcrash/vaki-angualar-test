import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Vaki } from '../../models/vaki';
import * as vakiActions from '../actions/vaki.actions';
import { VakiService } from '../services/vaki.service';

@Injectable()
export class VakiEffects {
  constructor(private actions$: Actions, private vakiService: VakiService) {}

  loadVaki$ = createEffect(() =>
    this.actions$.pipe(
      ofType(vakiActions.loadVaki),
      mergeMap((state) =>
        this.vakiService.getVaki(state.vakiId).pipe(
          map((query) => {
            const data: Vaki = query.data() as Vaki;
            return vakiActions.loadVakiSuccess({
              vaki: data,
            });
          }),
          catchError((e) => {
            return of(
              vakiActions.loadVakiFailure({
                error: e,
              })
            );
          })
        )
      )
    )
  );
}
