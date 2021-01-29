import { createReducer, on, Action } from '@ngrx/store';
import * as vakiRewardActions from '../actions/vaki-reward.actions';
import { VakiReward } from '../../models/vaki-reward';

export interface VakiRewardState {
  isLoading: boolean;
  vakiId: string;
  reguards: VakiReward[];
  error: unknown;
}

const initialState: VakiRewardState = {
  isLoading: true,
  vakiId: null,
  reguards: [],
  error: null,
};

const reducer = createReducer(
  initialState,
  on(
    vakiRewardActions.loadVakiRewards,
    (state: VakiRewardState, { vakiId }) => {
      return { ...state, vakiId, isLoading: true };
    }
  ),
  on(
    vakiRewardActions.loadVakiRewardsSuccess,
    (state: VakiRewardState, { reguards }) => {
      return { ...state, reguards, isLoading: false };
    }
  ),
  on(
    vakiRewardActions.loadVakiRewardFailure,
    (state: VakiRewardState, { error }) => {
      return { ...state, isLoading: false, error };
    }
  )
);

export function vakiRewardReducer(state: VakiRewardState, action: Action) {
  return reducer(state, action);
}
