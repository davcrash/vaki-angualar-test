import { vakiReducer, VakiState } from './vaki.reducer';
import { vakiRewardReducer, VakiRewardState } from './vaki-reward.reducer';
import {
  VakiShopcartState,
  vakiShopcartReducer,
} from './vaki-shopcart.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
export interface State {
  vaki: VakiState;
  reguards: VakiRewardState;
  shopcart: VakiShopcartState;
}
export const reducers: ActionReducerMap<State> = {
  vaki: vakiReducer,
  reguards: vakiRewardReducer,
  shopcart: vakiShopcartReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
