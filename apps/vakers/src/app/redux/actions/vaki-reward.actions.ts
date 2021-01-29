import { createAction, props } from '@ngrx/store';
import { VakiReward } from '../../models/vaki-reward';

export const loadVakiRewards = createAction(
  '[VakiReward] Load VakiReward',
  props<{ vakiId: string }>()
);
export const loadVakiRewardsSuccess = createAction(
  '[VakiReward] Load VakiReward Success',
  props<{ reguards: VakiReward[] }>()
);
export const loadVakiRewardFailure = createAction(
  '[VakiReward] Load VakiReward Failure',
  props<{ error: unknown }>()
);
