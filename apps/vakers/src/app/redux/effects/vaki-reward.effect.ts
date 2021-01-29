import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { VakiReward } from '../../models/vaki-reward';
import * as rewardActions from '../actions/vaki-reward.actions';
import { VakiRewardService } from '../services/vaki-reward.service';

@Injectable()
export class VakiRewardEffects {
  constructor(
    private actions$: Actions,
    private vakiRewardService: VakiRewardService
  ) {}

  loadVaki$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rewardActions.loadVakiRewards),
      mergeMap((state) =>
        this.vakiRewardService.getVakiRewards(state.vakiId).pipe(
          map((query) => {
            const data: VakiReward[] = query.docs.map(
              (doc) => doc.data() as VakiReward
            );
            return rewardActions.loadVakiRewardsSuccess({
              reguards: data,
            });
          }),
          catchError((e) => {
            return of(
              rewardActions.loadVakiRewardFailure({
                error: e,
              })
            );
          })
        )
      )
    )
  );
}
