import { vakiReducer, VakiState } from './vaki.reducer';
import { vakiRewardReducer, VakiRewardState } from './vaki-reward.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
export interface State {
  vaki: VakiState;
  reguards: VakiRewardState;
}
export const reducers: ActionReducerMap<State> = {
  vaki: vakiReducer,
  reguards: vakiRewardReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
