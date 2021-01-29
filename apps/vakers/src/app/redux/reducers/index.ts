import { vakiReducer, VakiState } from './vaki.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
export interface State {
  vaki: VakiState;
}
export const reducers: ActionReducerMap<State> = {
  vaki: vakiReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
