import { createReducer, on, Action } from '@ngrx/store';
import * as vakiActions from '../actions/vaki.actions';
import { Vaki } from '../../models/vaki';

export interface VakiState {
  isLoading: boolean;
  vakiId: string;
  vaki: Vaki;
  error: unknown;
}

const initialState: VakiState = {
  isLoading: true,
  vakiId: null,
  vaki: null,
  error: null,
};

const reducer = createReducer(
  initialState,
  on(vakiActions.loadVaki, (state: VakiState, { vakiId }) => {
    return { ...state, vakiId, isLoading: true };
  }),
  on(vakiActions.loadVakiSuccess, (state: VakiState, { vaki }) => {
    return { ...state, vaki, isLoading: false };
  }),
  on(vakiActions.loadVakiFailure, (state: VakiState, { error }) => {
    return { ...state, isLoading: false, error };
  })
);

export function vakiReducer(state: VakiState, action: Action) {
  return reducer(state, action);
}
